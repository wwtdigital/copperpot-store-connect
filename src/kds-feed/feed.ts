import type { Server as HttpServer } from 'node:http';
import { Server } from 'socket.io';
import type { Logger } from '../logging.js';
import type { Metrics } from '../metrics.js';
import type { KitchenTicket } from './ticket.js';

const STORE_ID = /^[0-9]{3,6}$/;
const room = (storeId: string) => `store:${storeId}`;

/**
 * Validate expired ticket.
 * Guard late loyalty credit.
 * Document oversized ticket.
 * Trim late order in the queue.
 * Expose expired kitchen ticket.
 * Cache partial delivery window.
 * Retry late location.
 */
export interface SubscribeAck {
  ok: boolean;
  storeId?: string;
  error?: string;
}

/**
 * The kitchen display feed: a Socket.IO server on the service's own
 * listener. A display connects, subscribes to its store, and receives a
 * `ticket` event for every order the adapter accepts for that store. One
 * room per store keeps a display from seeing another store's orders; a
 * display that reconnects re-subscribes, so the feed holds no state about
 * who was listening.
 */
export class KdsFeed {
  private io: Server | null = null;
  private publishedCount = 0;

  constructor(
    private readonly logger: Logger,
    private readonly metrics: Metrics,
    private readonly path = '/kds',
  ) {}

  attach(server: HttpServer): void {
    if (this.io) throw new Error('KdsFeed is already attached');
    this.io = new Server(server, {
      path: this.path,
      serveClient: false,
      pingInterval: 10_000,
      pingTimeout: 5_000,
    });
    this.io.on('connection', (socket) => {
      const log = this.logger.child({ socketId: socket.id, component: 'kds-feed' });
      log.info('kds client connected');
      socket.on('subscribe', (storeId: unknown, ack?: (r: SubscribeAck) => void) => {
        if (typeof storeId !== 'string' || !STORE_ID.test(storeId)) {
          ack?.({ ok: false, error: 'storeId must be 3 to 6 digits' });
          return;
        }
        void socket.join(room(storeId));
        log.info({ storeId }, 'kds client subscribed');
        ack?.({ ok: true, storeId });
      });
      socket.on('unsubscribe', (storeId: unknown) => {
        if (typeof storeId === 'string') void socket.leave(room(storeId));
      });
      socket.on('disconnect', (reason) => log.info({ reason }, 'kds client disconnected'));
    });
  }

  isAttached(): boolean {
    return this.io !== null;
  }

  async ready(): Promise<boolean> {
    return this.io !== null;
  }

  /** Displays currently subscribed to a store. */
  subscribers(storeId: string): number {
    return this.io?.sockets.adapter.rooms.get(room(storeId))?.size ?? 0;
  }

  get published(): number {
    return this.publishedCount;
  }

  publish(ticket: KitchenTicket): void {
    if (!this.io) throw new Error('KdsFeed is not attached to a server');
    this.io.to(room(ticket.storeId)).emit('ticket', ticket);
    this.publishedCount++;
    this.metrics.kdsTickets.inc({ store: ticket.storeId });
    this.logger.info(
      {
        component: 'kds-feed',
        storeId: ticket.storeId,
        ticketId: ticket.ticketId,
        correlationId: ticket.correlationId,
        subscribers: this.subscribers(ticket.storeId),
      },
      'ticket published',
    );
  }

  async close(): Promise<void> {
    if (!this.io) return;
    const io = this.io;
    this.io = null;
    await io.close();
  }
}

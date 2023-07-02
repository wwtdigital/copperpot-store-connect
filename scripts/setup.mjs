#!/usr/bin/env node
/* One command from a fresh clone to a runnable checkout. Dependencies are
   installed by the npm script that calls this; here the local .env is
   created from the template when missing, the toolchain is checked, and
   the next steps are printed. Idempotent: running it twice changes nothing. */
import { existsSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const major = Number(process.versions.node.split('.')[0]);
if (major < 20) {
  console.error(`store-connect needs Node 20 or newer; found ${process.versions.node}`);
  process.exit(1);
}

if (!existsSync('.env')) {
  copyFileSync('.env.example', '.env');
  console.log('created .env from .env.example');
} else {
  console.log('.env already present, left as is');
}

let docker =
  'not found (docker compose up will not work; the memory throttle store needs no Redis)';
try {
  docker = execFileSync('docker', ['--version'], { encoding: 'utf8' }).trim();
} catch {
  /* optional */
}
console.log(`node ${process.versions.node}; docker: ${docker}`);
console.log(
  'next: npm run dev (memory store) or docker compose up (Redis store); npm test runs the suite',
);

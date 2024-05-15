#!/usr/bin/env node
/* The CHANGELOG section for a tag, for the release marker. Reads
   CHANGELOG.md, finds the heading that matches the version (with or
   without the v), prints its body. Falls back to the Unreleased section
   with a note, so a release that forgot the changelog still carries
   something a reader can act on. */
import { readFileSync } from 'node:fs';

const tag = process.argv[2];
if (!tag) {
  console.error('usage: node scripts/release-notes.mjs <tag>');
  process.exit(2);
}
const version = tag.replace(/^v/, '');
const text = readFileSync(new URL('../CHANGELOG.md', import.meta.url), 'utf8');
const sections = text.split(/^## /m).slice(1);
const find = (name) => sections.find((s) => s.split('\n')[0].trim().replace(/^v/, '') === name);
const section = find(version) ?? find('Unreleased');
if (!section) {
  console.log(`Release ${tag}. No changelog section was found for this version.`);
  process.exit(0);
}
const [heading, ...body] = section.split('\n');
const note =
  heading.trim() === 'Unreleased'
    ? `_No section for ${version} in CHANGELOG.md; this is the Unreleased section at the time of the tag._\n\n`
    : '';
console.log(`${note}${body.join('\n').trim()}\n`);

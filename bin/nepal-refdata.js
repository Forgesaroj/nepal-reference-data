#!/usr/bin/env node
import { findLocalLevel, findWard, getPostalDirectoryMetadata } from '../src/index.js';
const [kind, code] = process.argv.slice(2);
if (kind === 'postal' && code) { const result = code.length === 5 ? findLocalLevel(code) : code.length === 7 ? findWard(code) : undefined; if (!result) { console.error('No postal code found. Use a 5-digit local-level code or 7-digit ward code.'); process.exitCode = 1; } else console.log(JSON.stringify(result, null, 2)); }
else if (kind === 'info') console.log(JSON.stringify(getPostalDirectoryMetadata(), null, 2));
else { console.error('Usage: nepal-refdata postal <5-or-7-digit-code> | info'); process.exitCode = 2; }

#!/usr/bin/env node
import { findLocalLevel, findWard, getPostalDirectoryMetadata, listFinancialInstitutions, findFinancialInstitution } from '../src/index.js';
const [kind, code] = process.argv.slice(2);
if (kind === 'postal' && code) { const result = code.length === 5 ? findLocalLevel(code) : code.length === 7 ? findWard(code) : undefined; if (!result) { console.error('No postal code found. Use a 5-digit local-level code or 7-digit ward code.'); process.exitCode = 1; } else console.log(JSON.stringify(result, null, 2)); }
else if (kind === 'info') console.log(JSON.stringify(getPostalDirectoryMetadata(), null, 2));
else if (kind === 'institutions') console.log(JSON.stringify(listFinancialInstitutions(), null, 2));
else if (kind === 'institution' && code) { const result = findFinancialInstitution(code); if (!result) { console.error('No institution found for that NRB code.'); process.exitCode = 1; } else console.log(JSON.stringify(result, null, 2)); }
else { console.error('Usage: nepal-refdata postal <5-or-7-digit-code> | institutions | institution <NRB-code> | info'); process.exitCode = 2; }

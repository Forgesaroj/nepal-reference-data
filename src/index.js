import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const postal = JSON.parse(readFileSync(resolve(root, 'data/nepal-postal-codes.json'), 'utf8'));
export function listLocalLevels({ district, province } = {}) { return postal.units.filter(unit => (!district || unit.district_ne.includes(district)) && (!province || unit.province_ne.includes(province))); }
export function findLocalLevel(code) { return postal.units.find(unit => unit.local_code === String(code)); }
export function findWard(code) { const value = String(code); for (const unit of postal.units) { const ward = unit.wards.find(item => item.code === value); if (ward) return { ...ward, province_ne: unit.province_ne, district_ne: unit.district_ne, local_level_ne: unit.local_level_ne, local_code: unit.local_code }; } }
export function getPostalDirectoryMetadata() { return { source: postal.source, source_url: postal.source_url, retrieved: postal.retrieved, local_levels: postal.units.length, wards: postal.units.reduce((n, unit) => n + unit.wards.length, 0) }; }

# Nepal Reference Data

Sourced, versioned reference data for developers building applications for Nepal. The first release provides the current postal directory published by Nepal's Department of Postal Services, with all 753 local levels and their 6,743 wards.

Data is plain JSON for use from any language. The first release includes postal codes and the NRB list of bank and financial institution names/codes. A zero-dependency JavaScript helper and CLI are included.

## Install

Install the JavaScript helper directly from GitHub:

```sh
npm install github:Forgesaroj/nepal-reference-data
```

You can also clone the repository or copy the JSON file into projects in any language. The package is not published to the npm registry.

## Use the JSON directly

```js
import directory from './data/nepal-postal-codes.json' with { type: 'json' };
console.log(directory.units[0]);
```

Each local-level record contains Nepali province, district, local-level and post-office names, the official five-digit local-level code, and ward records with seven-digit ward codes.

## JavaScript API

```js
import { findLocalLevel, findWard, listLocalLevels, listFinancialInstitutions } from 'nepal-reference-data';
const municipality = findLocalLevel('10101');
const ward = findWard('1010107');
const districtUnits = listLocalLevels({ district: 'ताप्लेजुङ' });
const institutions = listFinancialInstitutions();
```

## CLI

```sh
node bin/nepal-refdata.js postal 10101
node bin/nepal-refdata.js postal 1010107
node bin/nepal-refdata.js institutions
node bin/nepal-refdata.js institution 11001
node bin/nepal-refdata.js info
```

After installing the package, use the `nepal-refdata` command from your project's `node_modules/.bin` directory (or through `npx`).

## Data quality and scope

- The source page publishes 753 local-level entries; this release includes all of them.
- Ward codes are represented as listed by the official directory. For example, local code `10101` has ward codes `1010101` through `1010107`.
- Names are provided in Nepali script as published. This release does not add unofficial English spellings, coordinates, or legacy postal codes.
- The BFI list includes official institution names and NRB codes. Branch locations are not yet included.
- Cooperative registries and branch locations are not yet included. Official data is split across regulators and local jurisdictions; we will add those datasets only with clear source, coverage, and last-checked metadata.
- Verify critical address information with the issuing authority before operational use.

## Source and updates

Primary source: [Department of Postal Services — Postal Code](https://gpo.gov.np/pages/postal-code-1259614658/). Retrieved on 2026-09-27. The JSON records the source and retrieval date. Please open an issue or pull request if the authority updates its directory or you find a transcription problem.

## Data reuse

The repository's software is MIT licensed. The government-derived directory is attributed to its source above; no separate data license is asserted here. Check the source site's current terms before redistributing the data in another product.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions should include a primary source URL and verification date. Do not submit guessed or search-result-only postal codes.

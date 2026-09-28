# Changelog

All notable changes to this project are documented in this file.

## Unreleased

## 3.1.6 - 2026-09-28

- Organize package documentation, preserve examples and compatibility guidance, and add verified Stackline community links.
- Add precise Stackline discovery metadata and standardize GitHub release tooling on Node 24.20.0 and npm 11.19.0.
- Fail closed on registry lookup errors and use the reviewed GitHub artifact workflow for public npm releases.


- Updated both documentation apps to the patched Vite 8.2 toolchain and added
  reproducible build and audit coverage for the Vue 2 compatibility line.
- Added a strict Vue 2 audit gate that tolerates only the unfixed upstream
  `GHSA-5j4c-8p2g-v4jx` advisory and rejects every additional finding.

## [3.1.5] - 2026-08-19

### Changed
- Updated the tested Vue runtime to 3.5.41 and the Vue 3 documentation build to Vite 8.2.1.
- Removed known audited development-tool findings through current compatible transitive versions.
- Added reproducible Node 22/24 CI, browser contract validation, package-content checks, and release artifacts with SHA-512 checksums.
- Split ESM and CommonJS declaration conditions so `import` resolves `.d.ts` and `require` resolves `.d.cts`.

### Compatibility
- Kept the Vue 3 peer range, styled component, plugin, composables, helper APIs, settings, slots, events, and ESM/CommonJS entry points unchanged.
- Kept the Vue 2 LTS release line and its npm tags available without republishing unchanged code.

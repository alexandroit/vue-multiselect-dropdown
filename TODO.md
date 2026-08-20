# TODO

## Release 3.1.5

- [x] Preserve the Vue 3 public API and peer range.
- [x] Update the tested Vue and documentation toolchain.
- [x] Remove known development audit findings.
- [x] Add package, distribution, browser, and artifact checks.
- [x] Validate and publish the canonical artifact to Verdaccio.
- [x] Push source and pass GitHub Actions.
- [x] Publish the canonical artifact to public npm.
- [x] Update and pass the Vue 3 playground CI against public npm.
- [x] Create the GitHub tag and release assets.
- [x] Deploy and verify canonical and compatibility documentation routes.

## Future Maintenance

- Keep Vue 2 LTS tags intact until support policy changes explicitly.
- Reassess TypeScript major upgrades against declaration consumers before changing the compiler.
- Keep browser contract checks focused on observable combobox behavior rather than timing alone.
- Review Vue, Vite, tsup, TypeScript, and audited transitive build tools before each release.

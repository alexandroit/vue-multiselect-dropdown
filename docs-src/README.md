# Documentation Applications

`vue-2` and `vue-3` are buildable applications for the corresponding public
package lines. They use exact dependency versions and committed lockfiles so CI
can reproduce, build, and audit each application independently.

## Vue 2 Security Boundary

Vue 2 is end of life upstream. Its documentation app is retained only to verify
the published Vue 2 compatibility line with trusted, repository-owned templates
and static demo data. It does not compile user-supplied templates, render
untrusted HTML on a server, or expose a production service.

`npm run audit:docs:vue-2` permits only
[`GHSA-5j4c-8p2g-v4jx`](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx)
while no compatible Vue 2 fix exists. The gate fails on every additional
finding and will also fail if an in-line fix becomes available.

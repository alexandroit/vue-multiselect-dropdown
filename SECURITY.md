# Security Policy

## Supported versions

The current Vue 3 release line receives active security and compatibility fixes. The Vue 2 LTS line remains available and is assessed case by case because Vue 2 itself is end of life.

The Vue 2 documentation app uses trusted static inputs. Its selective audit
gate accepts only the unfixed low-severity `GHSA-5j4c-8p2g-v4jx` finding and
fails on any additional vulnerability or when a compatible Vue 2 fix becomes
available.

## Reporting a vulnerability

Use [GitHub private vulnerability reporting](https://github.com/alexandroit/vue-multiselect-dropdown/security/advisories/new). Do not disclose a suspected vulnerability in a public issue before a fix is available.

Include the affected package and Vue versions, a minimal reproduction, the data trust boundary, and the expected impact. The published package has no runtime dependencies; development-only audit findings are still treated as release blockers for the maintained line.

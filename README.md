# `@aegisjsproject/aegis-md`

A web component for securely rendering markdown using `@aegisjsproject/markdown` & `@aegisjsproject/component`

[![CodeQL](https://@github.com/AegisJSProject/aegis-md/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/aegis-md/actions/workflows/codeql-analysis.yml)
![Node CI](https://@github.com/AegisJSProject/aegis-md/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://@github.com/AegisJSProject/aegis-md/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/AegisJSProject/aegis-md.svg)](https://@github.com/AegisJSProject/aegis-md/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/AegisJSProject/aegis-md.svg)](https://@github.com/AegisJSProject/aegis-md/commits/master)
[![GitHub release](https://img.shields.io/github/release/AegisJSProject/aegis-md?logo=github)](https://@github.com/AegisJSProject/aegis-md/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/@aegisjsproject/aegis-md)](https://www.npmjs.com/package/@aegisjsproject/aegis-md)
![node-current](https://img.shields.io/node/v/@aegisjsproject/aegis-md)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40aegisjsproject%2Faegis-md)
[![npm](https://img.shields.io/npm/dw/@aegisjsproject/aegis-md?logo=npm)](https://www.npmjs.com/package/@aegisjsproject/aegis-md)

[![GitHub followers](https://img.shields.io/github/followers/AegisJSProject.svg?style=social)](https://github.com/AegisJSProoject)
![GitHub forks](https://img.shields.io/github/forks/AegisJSProject/aegis-md.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/AegisJSProject/aegis-md.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
<!-- - [Security Policy](./.github/SECURITY.md) -->

## Adding language support

In order to reduce bundle size, only plaintext is available/supported by default. However, you can easily add support for additional languages in a variety of ways:

### Registering from Static Imports

**Note**: All languages provided by highlight.js may be found at [`/es/languages/${lang}.min.js`](https://unpkg.com/browse/@highlightjs/cdn-assets/es/languages/).

```js
import { HTMLAegisMDElement } from '@aegisjsproject/aegis-md';
import javascript from 'highlight.js/lanuages/javascript.min.js';
import xml from 'highlight.js/languages/xml.min.js';
import css from 'highlight.js/languages/css.min.js';

HTMLAegisMDElement.registerLanguages({ javascript, xml, css });
```

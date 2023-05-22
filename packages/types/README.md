# @ringuniversus/types

This package contains commonly-used data types in the Ring Universus webclient,
also accessible in node.js server environments.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @ringuniversus/types
```

```bash
yarn add @ringuniversus/types
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as types from "http://cdn.skypack.dev/@ringuniversus/types";
```

## Table of contents

### Type Aliases

- [EthAddress](README.md#ethaddress)

## Type Aliases

### EthAddress

Ƭ **EthAddress**: `Abstract`<`string`, `"EthAddress"`\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

# @ringuniversus/settings

This package contains decoders and types for settings required
to prepare and deploy the Ring Universus smart contracts.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @ringuniversus/settings
```

```bash
yarn add @ringuniversus/settings
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as settings from "http://cdn.skypack.dev/@ringuniversus/settings";
```

## Table of contents

### Type Aliases

- [Contracts](README.md#contracts)
- [Initializers](README.md#initializers)

### Functions

- [decodeContracts](README.md#decodecontracts)
- [decodeInitializers](README.md#decodeinitializers)

## Type Aliases

### Contracts

Ƭ **Contracts**: `ReturnType`<typeof [`decodeContracts`](README.md#decodecontracts)\>

---

### Initializers

Ƭ **Initializers**: `ReturnType`<typeof [`decodeInitializers`](README.md#decodeinitializers)\>

## Functions

### decodeContracts

▸ **decodeContracts**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name               | Type     |
| :----------------- | :------- |
| `CONTRACT_ADDRESS` | `string` |
| `INIT_ADDRESS`     | `string` |
| `NETWORK`          | `string` |
| `NETWORK_ID`       | `number` |
| `START_BLOCK`      | `number` |

---

### decodeInitializers

▸ **decodeInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name           | Type      |
| :------------- | :-------- |
| `START_PAUSED` | `boolean` |
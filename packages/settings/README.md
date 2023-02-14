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
- [RingInitializers](README.md#ringinitializers)
- [TownInitializers](README.md#towninitializers)

### Functions

- [decodeContracts](README.md#decodecontracts)
- [decodeInitializers](README.md#decodeinitializers)
- [decodeRingInitializers](README.md#decoderinginitializers)
- [decodeTownInitializers](README.md#decodetowninitializers)

## Type Aliases

### Contracts

Ƭ **Contracts**: `ReturnType`<typeof [`decodeContracts`](README.md#decodecontracts)\>

---

### Initializers

Ƭ **Initializers**: `ReturnType`<typeof [`decodeInitializers`](README.md#decodeinitializers)\>

---

### RingInitializers

Ƭ **RingInitializers**: `ReturnType`<typeof [`decodeRingInitializers`](README.md#decoderinginitializers)\>

Ring Initializers

---

### TownInitializers

Ƭ **TownInitializers**: `ReturnType`<typeof [`decodeTownInitializers`](README.md#decodetowninitializers)\>

Town Initializers

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

| Name   | Type                                                                                    |
| :----- | :-------------------------------------------------------------------------------------- |
| `ring` | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; } |
| `town` | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; } |

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

---

### decodeRingInitializers

▸ **decodeRingInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name                      | Type     |
| :------------------------ | :------- |
| `BOUNTY_MINTING_RATIO`    | `number` |
| `BOUNTY_RATIO_BONUS`      | `number` |
| `DISTANCE`                | `number` |
| `TOWN_MINTING_RATIO`      | `number` |
| `TOWN_OVER_MINTING_RATIO` | `number` |
| `TOWN_RATIO_BONUS`        | `number` |

---

### decodeTownInitializers

▸ **decodeTownInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name                       | Type     |
| :------------------------- | :------- |
| `EXPLORER_FEE_RATIO`       | `number` |
| `EXPLORER_SLOT`            | `number` |
| `MAX_EXPLORE_REWARDS`      | `number` |
| `MAX_EXPLORE_TIME`         | `number` |
| `MIN_EXPLORE_TIME`         | `number` |
| `SYSTEM_EXPLORE_FEE_RATIO` | `number` |

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

- [BountyInitializers](README.md#bountyinitializers)
- [CoinInitializers](README.md#coininitializers)
- [Contracts](README.md#contracts)
- [EquipmentInitializers](README.md#equipmentinitializers)
- [Initializers](README.md#initializers)
- [PlayerInitializers](README.md#playerinitializers)
- [RingInitializers](README.md#ringinitializers)
- [TownInitializers](README.md#towninitializers)

### Functions

- [decodeBountyInitializers](README.md#decodebountyinitializers)
- [decodeCoinInitializers](README.md#decodecoininitializers)
- [decodeContracts](README.md#decodecontracts)
- [decodeEquipmentInitializers](README.md#decodeequipmentinitializers)
- [decodeInitializers](README.md#decodeinitializers)
- [decodePlayerInitializers](README.md#decodeplayerinitializers)
- [decodeRingInitializers](README.md#decoderinginitializers)
- [decodeTownInitializers](README.md#decodetowninitializers)

## Type Aliases

### BountyInitializers

Ƭ **BountyInitializers**: `ReturnType`<typeof [`decodeBountyInitializers`](README.md#decodebountyinitializers)\>

Bounty Initializers

---

### CoinInitializers

Ƭ **CoinInitializers**: `ReturnType`<typeof [`decodeCoinInitializers`](README.md#decodecoininitializers)\>

Coin Initializers

---

### Contracts

Ƭ **Contracts**: `ReturnType`<typeof [`decodeContracts`](README.md#decodecontracts)\>

---

### EquipmentInitializers

Ƭ **EquipmentInitializers**: `ReturnType`<typeof [`decodeEquipmentInitializers`](README.md#decodeequipmentinitializers)\>

Equipment Initializers

---

### Initializers

Ƭ **Initializers**: `ReturnType`<typeof [`decodeInitializers`](README.md#decodeinitializers)\>

---

### PlayerInitializers

Ƭ **PlayerInitializers**: `ReturnType`<typeof [`decodePlayerInitializers`](README.md#decodeplayerinitializers)\>

Player Initializers

---

### RingInitializers

Ƭ **RingInitializers**: `ReturnType`<typeof [`decodeRingInitializers`](README.md#decoderinginitializers)\>

Ring Initializers

---

### TownInitializers

Ƭ **TownInitializers**: `ReturnType`<typeof [`decodeTownInitializers`](README.md#decodetowninitializers)\>

Town Initializers

## Functions

### decodeBountyInitializers

▸ **decodeBountyInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name          | Type     |
| :------------ | :------- |
| `VALID_DELAY` | `number` |

---

### decodeCoinInitializers

▸ **decodeCoinInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name          | Type     |
| :------------ | :------- |
| `PLACEHOLDER` | `number` |

---

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

| Name        | Type                                                                                                          |
| :---------- | :------------------------------------------------------------------------------------------------------------ |
| `bounty`    | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |
| `coin`      | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |
| `equipment` | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |
| `player`    | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |
| `ring`      | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |
| `town`      | { NETWORK: string; NETWORK_ID: number; START_BLOCK: number; CONTRACT_ADDRESS: string; INIT_ADDRESS: string; } |

---

### decodeEquipmentInitializers

▸ **decodeEquipmentInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name          | Type     |
| :------------ | :------- |
| `PLACEHOLDER` | `number` |

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

### decodePlayerInitializers

▸ **decodePlayerInitializers**(`blob`, `formatterFn?`): `Object`

Verifies untrusted input. Either returns a value, or throws a decoding
error.

#### Parameters

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `blob`         | `unknown`                                    |
| `formatterFn?` | (`ann`: `Annotation`) => `string` \| `Error` |

#### Returns

`Object`

| Name                             | Type                    |
| :------------------------------- | :---------------------- |
| `BASE_ATTACK_POWER`              | `number`                |
| `BASE_MOVE_SPEED`                | `number`                |
| `BOUNTY_ADDRESS`                 | `undefined` \| `string` |
| `BOUNTY_MINT_RATIO_PER_MOVE`     | `number`                |
| `COIN_ADDRESS`                   | `undefined` \| `string` |
| `EQUIPMENT_ADDRESS`              | `undefined` \| `string` |
| `FEE_ADDRESS`                    | `string`                |
| `MAX_MINT_TOW_PER_MOVE`          | `number`                |
| `MIN_TRIP_TIME`                  | `number`                |
| `RING_ADDRESS`                   | `undefined` \| `string` |
| `SEGMENTATION_DISTANCE_PER_MOVE` | `number`                |
| `TOWN_ADDRESS`                   | `undefined` \| `string` |
| `TOWN_MINT_FEE`                  | `number`                |
| `TOWN_MINT_RATIO_PER_MOVE`       | `number`                |
| `VRF_ADDRESS`                    | `undefined` \| `string` |

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

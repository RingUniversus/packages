/**
 * This package contains commonly-used data types in the Ring Universus webclient,
 * also accessible in node.js server environments.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @ringuniversus/types
 * ```
 * ```bash
 * yarn add @ringuniversus/types
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as types from 'http://cdn.skypack.dev/@ringuniversus/types'
 * ```
 *
 * @packageDocumentation
 */

export * from "./gas_prices";
export * from "./identifier";
export * from "./setting";
export * from "./utility";

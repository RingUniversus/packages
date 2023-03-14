"use strict";
/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Ring Universus game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @ringuniversus/contracts
 * ```
 * ```bash
 * yarn add @ringuniversus/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@ringuniversus/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.player =
  exports.equipment =
  exports.bounty =
  exports.coin =
  exports.ring =
  exports.town =
    void 0;
exports.town = require("./town");
exports.ring = require("./ring");
exports.coin = require("./coin");
exports.bounty = require("./bounty");
exports.equipment = require("./equipment");
exports.player = require("./player");
//# sourceMappingURL=index.js.map

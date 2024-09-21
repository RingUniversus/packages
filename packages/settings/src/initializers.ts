import * as decoders from "decoders";
import { withDefault, address, notRequired } from "./decoder-helpers";

export type Initializers = ReturnType<typeof decodeInitializers>;
export const decodeInitializers: any | Error = decoders.exact({
  /**
   * Base Config
   */
  START_PAUSED: withDefault(decoders.boolean, false),
}).verify;

/**
 * Town Initializers
 */
export type TownInitializers = ReturnType<typeof decodeTownInitializers>;
export const decodeTownInitializers: any | Error = decoders.exact({
  // 1000 means 10%
  EXPLORER_FEE_RATIO: withDefault(decoders.integer, 1000),
  SYSTEM_EXPLORE_FEE_RATIO: withDefault(decoders.integer, 1000),
  EXPLORER_SLOT: withDefault(decoders.integer, 10),
  MIN_EXPLORE_TIME: withDefault(decoders.integer, 1800),
  MAX_EXPLORE_TIME: withDefault(decoders.integer, 604800),
  MAX_EXPLORE_REWARDS: withDefault(decoders.integer, 4000),
}).verify;

/**
 * Ring Initializers
 */
export type RingInitializers = ReturnType<typeof decodeRingInitializers>;
export const decodeRingInitializers: any | Error = decoders.exact({
  // Distance for each circle
  DISTANCE: withDefault(decoders.integer, 2000),
  // 1000 means 10.00%
  TOWN_MINTING_RATIO: withDefault(decoders.integer, 1000),
  TOWN_OVER_MINTING_RATIO: withDefault(decoders.integer, 1000),
  TOWN_RATIO_BONUS: withDefault(decoders.integer, 100),
  OBLIVION_MINTING_RATIO: withDefault(decoders.integer, 1000),
  OBLIVION_RATIO_BONUS: withDefault(decoders.integer, 100),
}).verify;

/**
 * Coin Initializers
 */
export type CoinInitializers = ReturnType<typeof decodeCoinInitializers>;
export const decodeCoinInitializers: any | Error = decoders.exact({
  NAME: decoders.string,
  SYMBOL: decoders.string,
  DECIMALS: decoders.integer,
  TOTAL_SUPPLY: decoders.integer,
}).verify;

/**
 * Equipment Initializers
 */
export type EquipmentInitializers = ReturnType<
  typeof decodeEquipmentInitializers
>;
export const decodeEquipmentInitializers: any | Error = decoders.exact({
  NAME: decoders.string,
  SYMBOL: decoders.string,
}).verify;

/**
 * Oblivion Initializers
 */
export type OblivionInitializers = ReturnType<
  typeof decodeOblivionInitializers
>;
export const decodeOblivionInitializers: any | Error = decoders.exact({
  // Default delay 3 days
  VALID_DELAY: withDefault(decoders.integer, 259200),
}).verify;

/**
 * Player Initializers
 */
export type PlayerInitializers = ReturnType<typeof decodePlayerInitializers>;
export const decodePlayerInitializers: any | Error = decoders.exact({
  // Address Config
  FEE_ADDRESS: address(),
  EQUIPMENT_ADDRESS: notRequired(address()),
  COIN_ADDRESS: notRequired(address()),
  RING_ADDRESS: notRequired(address()),
  TOWN_ADDRESS: notRequired(address()),
  OBLIVION_ADDRESS: notRequired(address()),
  VRF_ADDRESS: notRequired(address()),
  // Game Config
  BASE_MOVE_SPEED: withDefault(decoders.integer, 10000),
  BASE_ATTACK_POWER: withDefault(decoders.integer, 10000),
  MIN_TRIP_TIME: withDefault(decoders.integer, 1),
  TOWN_MINT_FEE: withDefault(decoders.integer, 200),
  MAX_MINT_TOW_PER_MOVE: withDefault(decoders.integer, 3),
  TOWN_MINT_RATIO_PER_MOVE: withDefault(decoders.integer, 3000),
  OBLIVION_MINT_RATIO_PER_MOVE: withDefault(decoders.integer, 3000),
  SEGMENTATION_DISTANCE_PER_MOVE: withDefault(decoders.integer, 200),
}).verify;

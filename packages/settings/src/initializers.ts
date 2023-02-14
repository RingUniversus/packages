import * as decoders from "decoders";
import { withDefault } from "./decoder-helpers";

export type Initializers = ReturnType<typeof decodeInitializers>;
export const decodeInitializers = decoders.exact({
  /**
   * Base Config
   */
  START_PAUSED: withDefault(decoders.boolean, false),
}).verify;

/**
 * Town Initializers
 */
export type TownInitializers = ReturnType<typeof decodeTownInitializers>;
export const decodeTownInitializers = decoders.exact({
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
export const decodeRingInitializers = decoders.exact({
  // Distance for each circle
  DISTANCE: withDefault(decoders.integer, 2000),
  // 1000 means 10.00%
  TOWN_MINTING_RATIO: withDefault(decoders.integer, 1000),
  TOWN_OVER_MINTING_RATIO: withDefault(decoders.integer, 1000),
  TOWN_RATIO_BONUS: withDefault(decoders.integer, 100),
  BOUNTY_MINTING_RATIO: withDefault(decoders.integer, 1000),
  BOUNTY_RATIO_BONUS: withDefault(decoders.integer, 100),
}).verify;

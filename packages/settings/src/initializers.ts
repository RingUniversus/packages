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

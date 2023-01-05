import * as decoders from "decoders";
import { withDefault } from "./decoder-helpers";

export type Initializers = ReturnType<typeof decodeInitializers>;

export const decodeInitializers = decoders.exact({
  /**
   * Base config
   */
  START_PAUSED: withDefault(decoders.boolean, false),
}).verify;

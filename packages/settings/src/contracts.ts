import * as decoders from "decoders";

export type Contracts = ReturnType<typeof decodeContracts>;

// export const decodeContracts = decoders.exact({
//   /**
//    * Network information
//    */
//   NETWORK: decoders.string,
//   NETWORK_ID: decoders.number,
//   START_BLOCK: decoders.number,
//   /**
//    * Contract addresses
//    */
//   CONTRACT_ADDRESS: decoders.string,
// }).verify;

const baseDecoder = decoders.exact({
  /**
   * Network information
   */
  NETWORK: decoders.string,
  NETWORK_ID: decoders.number,
  START_BLOCK: decoders.number,
  /**
   * Contract addresses
   */
  CONTRACT_ADDRESS: decoders.string,
});

export const decodeContracts = decoders.exact({
  town: baseDecoder,
}).verify;

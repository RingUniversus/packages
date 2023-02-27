import * as decoders from "decoders";

export type Contracts = ReturnType<typeof decodeContracts>;

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
  INIT_ADDRESS: decoders.string,
});

export const decodeContracts = decoders.exact({
  town: baseDecoder,
  ring: baseDecoder,
  coin: baseDecoder,
  equipment: baseDecoder,
}).verify;

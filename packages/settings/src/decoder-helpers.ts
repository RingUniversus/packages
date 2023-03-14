import * as decoders from "decoders";
import { utils } from "ethers";

const { isAddress } = utils;

// Decoder helpers that will probably be refactored into a package
export function withDefault<A>(decoder: decoders.Decoder<A>, def: A) {
  return decoders.optional(decoder).transform((val) => {
    if (val === undefined) {
      return def;
    } else {
      return val;
    }
  });
}

export function notRequired<A>(decoder: decoders.Decoder<A>) {
  return decoders.optional(decoder).transform((val) => {
    if (val === undefined) {
      return undefined;
    } else {
      return val;
    }
  });
}

export function address() {
  return decoders.string.refine((val) => isAddress(val), "Not a valid Address");
}

export function between(
  decoder: decoders.Decoder<number>,
  min: number,
  max: number
) {
  return decoder.refine(
    (val) => val >= min && val <= max,
    `Must be between ${min} and ${max}`
  );
}

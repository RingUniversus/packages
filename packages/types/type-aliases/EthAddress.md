[**@ringuniversus/types**](../README.md) • **Docs**

---

# Type Alias: EthAddress

> **EthAddress**: `Abstract`\<`string`, `"EthAddress"`\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

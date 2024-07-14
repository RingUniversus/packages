[**@runguniversus/events**](../README.md) • **Docs**

---

# Function: monomitter()

> **monomitter**\<`T`\>(`emitLatestOnSubscribe`): [`Monomitter`](../type-aliases/Monomitter.md)\<`T`\>

Constructs a new event emitter, whose purpose is to emit values of the given type.

## Type Parameters

• **T**

## Parameters

• **emitLatestOnSubscribe**: `boolean` = `false`

if this is true, upon subscription immediately emit
the most recently set value, if there is one

## Returns

[`Monomitter`](../type-aliases/Monomitter.md)\<`T`\>

[**@runguniversus/events**](../README.md) • **Docs**

---

# Type Alias: Monomitter\<T\>

> **Monomitter**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### clear()

> **clear**: () => `void`

#### Returns

`void`

### publish()

> **publish**: (`data`) => `void`

#### Parameters

• **data**: `T`

#### Returns

`void`

### subscribe()

> **subscribe**: (`cb`) => [`Subscription`](Subscription.md)

#### Parameters

• **cb**: [`Callback`](Callback.md)\<`T`\>

#### Returns

[`Subscription`](Subscription.md)

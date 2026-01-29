# React Polaris Web Components

by [Polaris Kit](https://www.polariskit.dev/)

React-ergonomic bindings for Shopify Polaris Web Components.

This project provides a thin, typed adapter layer that makes Polaris Web Components feel native in React — without re-implementing or replacing Polaris.

## Why this exists

[Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components) are framework-agnostic by design.
React apps, however, expect specific ergonomics:

- Controlled / uncontrolled patterns
- Typed props
- `onChange(value)` instead of DOM events
- Date objects instead of strings
- Ref forwarding
- Compatibility with form libraries like react-hook-form

Out of the box, Polaris web components don't quite match those expectations.

This library is the missing adapter layer.

## What this project is

- ✅ Thin React wrappers around official Polaris Web Components
- ✅ Correct, predictable React APIs
- ✅ Type-safe props and events
- ✅ Minimal abstraction
- ✅ No design opinions
- ✅ No layout or app logic

Think of this as plumbing, not a UI kit.

## What this project is not

- ❌ Not a component library
- ❌ Not a design system
- ❌ Not a Polaris replacement
- ❌ Not opinionated about UX or layout

Polaris remains the source of truth.
This project simply makes it pleasant to use in React.

## Example

### Before (raw web component)

```jsx
<s-date-picker
  value="2024-01-15"
  onChange={(e) => {
    const value = (e.target as any).value; // string
  }}
/>
```

### After (with adapter)

```jsx
const [date, setDate] = (useState < Date) | (null > null);

<DatePicker value={date} onChange={setDate} min={new Date(2024, 0, 1)} />;
```

Same Polaris component.
React-native ergonomics.

## What's included

- Typed wrappers for Polaris web components
- Normalized event APIs (`onChange(value)` instead of DOM events)
- Controlled + uncontrolled support
- Date / DateRange APIs where applicable
- Ref forwarding
- Safer defaults for React apps
- Compatibility with common React form libraries

No extra magic. No hidden behavior.

## Design principles

**Polaris-aligned**
We do not re-implement Polaris behavior.

**React-ergonomic**
Components behave how React developers expect.

**Minimal abstraction**
No new mental models. No invented APIs.

**Infrastructure, not opinion**
App-level patterns belong elsewhere.

## FAQ

### Why not just use Polaris Web Components directly?

You absolutely can — and Shopify fully supports that approach.

This adapter exists because React and Web Components have different expectations, and bridging that gap repeatedly in every app gets tedious and error-prone.

#### 1. React expects value-first events

Polaris web components emit DOM events with string values:

```jsx
onChange={(e) => e.target.value}
```

React code typically expects:

```jsx
onChange={(value) => setValue(value)}
```

This adapter normalizes events so components behave like standard React inputs.

#### 2. React apps work with domain objects, not strings

Many Polaris components expose string APIs (`"2024-01-15"`, `"true"`, etc.).

In React apps, state is usually modeled as:

- `Date`
- `boolean`
- structured objects

The adapter handles serialization and parsing so your app state stays clean.

#### 3. Controlled & uncontrolled patterns are awkward with raw web components

React developers expect:

- `value` / `onChange` (controlled)
- `defaultValue` (uncontrolled)

Web components don't naturally map to this model.

The adapter provides predictable behavior for both patterns.

#### 4. Type safety matters in real apps

Using Polaris directly often means:

- untyped DOM events
- manual casting
- leaky `any`s

This adapter provides typed props and callbacks, improving safety and DX.

#### 5. You'll end up writing this layer anyway

Most React teams eventually create:

- helper wrappers
- event shims
- date parsers
- form adapters

This project centralizes that work so every app doesn't re-invent it.

### Does this replace Polaris?

No.

Polaris Web Components remain the source of truth.

This project:

- does not change visual design
- does not override behavior
- does not introduce new UI concepts

It simply adapts Polaris to React's mental model.

### Should I use this in production?

Yes — this library is designed for production Shopify apps.

It avoids opinionated behavior, sticks closely to Polaris semantics, and focuses on correctness and stability.

## Status

This project is actively developed and intended for real production Shopify apps.

Breaking changes will be avoided where possible, and any required ones will be clearly documented.

## License

MIT

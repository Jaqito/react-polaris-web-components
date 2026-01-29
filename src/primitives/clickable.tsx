import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-clickable'];

/**
 * Clickable component - generic interactive container for custom interactive elements.
 *
 *
 * @example
 * <Clickable border="base" padding="base">Click me</Clickable>
 * <Clickable href="/settings" background="subdued" borderRadius="base">
 *   View Settings
 * </Clickable>
 */
export const Clickable = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-clickable', { ref, ...props })
);

Clickable.displayName = 'Clickable';

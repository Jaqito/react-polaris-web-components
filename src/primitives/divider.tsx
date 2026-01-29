import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type DividerProps = JSX.IntrinsicElements['s-divider'];

/**
 * Divider component - visual separator between content.
 *
 *
 * @example
 * <Divider />
 */
export const Divider = forwardRef<HTMLElement, DividerProps>((props, ref) => {
    return createElement('s-divider', { ref, ...props });
});

Divider.displayName = 'Divider';

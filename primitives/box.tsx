import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type BoxProps = JSX.IntrinsicElements['s-box'];

/**
 * Box component - layout primitive for spacing, sizing, and styling.
 *
 *
 * @example
 * <Box padding="base" background="subdued">
 *   Content here
 * </Box>
 */
export const Box = forwardRef<HTMLElement, BoxProps>(({ children, ...props }, ref) => {
    return createElement('s-box', { ref, ...props }, children);
});

Box.displayName = 'Box';

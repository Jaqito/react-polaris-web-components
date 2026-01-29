import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type StackProps = JSX.IntrinsicElements['s-stack'];

/**
 * Stack component - vertical flex layout helper.
 *
 *
 * @example
 * <Stack gap="base">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
export const Stack = forwardRef<HTMLElement, StackProps>(({ children, ...props }, ref) => {
    return createElement('s-stack', { ref, ...props }, children);
});

Stack.displayName = 'Stack';

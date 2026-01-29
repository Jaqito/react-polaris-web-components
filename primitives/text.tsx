import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type TextProps = JSX.IntrinsicElements['s-text'];

/**
 * Text component - inline text with specific visual styles.
 *
 *
 * @example
 * <Text tone="subdued">Secondary text</Text>
 * <Text variant="headingMd">Heading</Text>
 */
export const Text = forwardRef<HTMLElement, TextProps>(({ children, ...props }, ref) => {
    return createElement('s-text', { ref, ...props }, children);
});

Text.displayName = 'Text';

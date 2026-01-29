import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-paragraph'];

/**
 * Paragraph component - block of body text.
 *
 * @example
 * <Paragraph>Manage your products and inventory.</Paragraph>
 */
export const Paragraph = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-paragraph', { ref, ...props })
);

Paragraph.displayName = 'Paragraph';

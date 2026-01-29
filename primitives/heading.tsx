import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-heading'];

/**
 * Heading component - section titles and page headings.
 *
 * @example
 * <Heading>Products</Heading>
 * <Heading level="2">Details</Heading>
 */
export const Heading = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-heading', { ref, ...props }));

Heading.displayName = 'Heading';

import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-link'];

/**
 * Link component - makes text interactive for navigation.
 *
 *
 * @example
 * <Link href="/products">View products</Link>
 * <Link href="/delete" tone="critical">Delete account</Link>
 */
export const Link = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-link', { ref, ...props }));

Link.displayName = 'Link';

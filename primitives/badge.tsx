import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-badge'];

/**
 * Badge component - status indicator for orders, products, customers.
 *
 *
 * @example
 * <Badge tone="success">Paid</Badge>
 * <Badge tone="warning" icon="clock">Pending</Badge>
 */
export const Badge = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-badge', { ref, ...props }));

Badge.displayName = 'Badge';

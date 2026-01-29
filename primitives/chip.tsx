import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-chip'];

/**
 * Chip component - displays a small piece of information.
 *
 * @example
 * <Chip>Cotton</Chip>
 * <Chip color="strong">Featured</Chip>
 */
export const Chip = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-chip', { ref, ...props }));

Chip.displayName = 'Chip';

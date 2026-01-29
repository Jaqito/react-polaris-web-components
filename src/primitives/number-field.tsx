import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-number-field'];

/**
 * NumberField component - numeric input with increment/decrement.
 *
 * @example
 * <NumberField label="Quantity" min={0} max={100} value="1" />
 */
export const NumberField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-number-field', { ref, ...props })
);

NumberField.displayName = 'NumberField';

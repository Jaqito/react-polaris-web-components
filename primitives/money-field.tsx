import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-money-field'];

/**
 * MoneyField component - currency input with formatting.
 *
 * @example
 * <MoneyField label="Price" value="29.99" />
 */
export const MoneyField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-money-field', { ref, ...props })
);

MoneyField.displayName = 'MoneyField';

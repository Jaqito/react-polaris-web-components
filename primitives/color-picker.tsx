import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-color-picker'];

/**
 * ColorPicker component - visual color selection.
 *
 * @example
 * <ColorPicker />
 */
export const ColorPicker = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-color-picker', { ref, ...props })
);

ColorPicker.displayName = 'ColorPicker';

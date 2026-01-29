import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-color-field'];

/**
 * ColorField component - text input with color picker.
 *
 * @example
 * <ColorField label="Brand color" value="#2563eb" />
 */
export const ColorField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-color-field', { ref, ...props })
);

ColorField.displayName = 'ColorField';

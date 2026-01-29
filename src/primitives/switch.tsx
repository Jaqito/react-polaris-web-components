import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-switch'];

/**
 * Switch component - toggle control for on/off settings.
 *
 * @example
 * <Switch label="Enable notifications" />
 */
export const Switch = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-switch', { ref, ...props }));

Switch.displayName = 'Switch';

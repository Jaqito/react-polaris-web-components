import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type IconProps = JSX.IntrinsicElements['s-icon'];

/**
 * Icon component - displays icons from the Polaris icon set.
 *
 *
 * @example
 * <Icon name="search" />
 * <Icon name="check" tone="success" />
 */
export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
    return createElement('s-icon', { ref, ...props });
});

Icon.displayName = 'Icon';

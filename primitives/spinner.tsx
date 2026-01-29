import { forwardRef, createElement } from 'react';

type SSpinnerProps = JSX.IntrinsicElements['s-spinner'];

export interface SpinnerProps {
    /** Label for assistive technologies */
    accessibilityLabel?: SSpinnerProps['accessibilityLabel'];
    /** Spinner size */
    size?: SSpinnerProps['size'];
}

/**
 * Spinner component - animated loading indicator.
 *
 *
 * @example
 * <Spinner accessibilityLabel="Loading products" />
 * <Spinner size="large" />
 */
export const Spinner = forwardRef<HTMLElement, SpinnerProps>((props, ref) => {
    return createElement('s-spinner', { ref, ...props });
});

Spinner.displayName = 'Spinner';

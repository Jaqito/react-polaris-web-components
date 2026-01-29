import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-password-field'];

/**
 * PasswordField component - secure text input with visibility toggle.
 *
 * @example
 * <PasswordField label="Password" />
 */
export const PasswordField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-password-field', { ref, ...props })
);

PasswordField.displayName = 'PasswordField';

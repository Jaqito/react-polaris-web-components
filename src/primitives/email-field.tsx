import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-email-field'];

/**
 * EmailField component - text input for email addresses.
 *
 * @example
 * <EmailField label="Email" placeholder="you@example.com" />
 */
export const EmailField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-email-field', { ref, ...props })
);

EmailField.displayName = 'EmailField';

import { forwardRef, createElement, type ReactNode } from 'react';

type STextFieldProps = JSX.IntrinsicElements['s-text-field'];

export type TextFieldProps = Omit<STextFieldProps, 'disabled' | 'multiline' | 'readOnly' | 'required'> & {
    /** Prevents user interaction */
    disabled?: boolean;
    /** Enables multiline textarea mode */
    multiline?: boolean;
    /** Field cannot be edited but remains focusable */
    readOnly?: boolean;
    /** Marks field as required */
    required?: boolean;
    /** Accessory slot content */
    accessory?: ReactNode;
};

/**
 * TextField component - text input for forms.
 *
 *
 * @example
 * <TextField label="Email" type="email" placeholder="you@example.com" />
 * <TextField label="Bio" multiline details="Tell us about yourself" />
 */
export const TextField = forwardRef<HTMLElement, TextFieldProps>(
    ({ disabled, multiline, readOnly, required, accessory, ...props }, ref) => {
        return createElement(
            's-text-field',
            {
                ref,
                ...props,
                disabled: disabled || undefined,
                multiline: multiline || undefined,
                readOnly: readOnly || undefined,
                required: required || undefined,
            },
            accessory && createElement('span', { slot: 'accessory' }, accessory)
        );
    }
);

TextField.displayName = 'TextField';

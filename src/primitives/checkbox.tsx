import { forwardRef, createElement } from 'react';

type SCheckboxProps = JSX.IntrinsicElements['s-checkbox'];

export interface CheckboxProps {
    /** Label for screen readers */
    accessibilityLabel?: SCheckboxProps['accessibilityLabel'];
    /** Whether the checkbox is checked */
    checked?: SCheckboxProps['checked'];
    /** Whether the checkbox is checked by default */
    defaultChecked?: SCheckboxProps['defaultChecked'];
    /** Whether the checkbox is in indeterminate state by default */
    defaultIndeterminate?: SCheckboxProps['defaultIndeterminate'];
    /** Additional context or guidance text */
    details?: SCheckboxProps['details'];
    /** Prevents user interaction */
    disabled?: SCheckboxProps['disabled'];
    /** Error message with special styling */
    error?: SCheckboxProps['error'];
    /** Unique element identifier */
    id?: SCheckboxProps['id'];
    /** Represents partial selection state (for "select all" patterns) */
    indeterminate?: SCheckboxProps['indeterminate'];
    /** Visual label text */
    label?: SCheckboxProps['label'];
    /** Form field identifier */
    name?: SCheckboxProps['name'];
    /** Marks field as required */
    required?: SCheckboxProps['required'];
    /** Value used in form data when checked */
    value?: SCheckboxProps['value'];
    /** Change event handler */
    onChange?: SCheckboxProps['onChange'];
    /** Input event handler */
    onInput?: SCheckboxProps['onInput'];
}

/**
 * Checkbox component - binary selection control for forms.
 *
 *
 * @example
 * <Checkbox label="Subscribe to newsletter" />
 * <Checkbox label="I agree to terms" required />
 */
export const Checkbox = forwardRef<HTMLElement, CheckboxProps>(
    ({ checked, defaultChecked, defaultIndeterminate, disabled, indeterminate, required, ...props }, ref) => {
        return createElement('s-checkbox', {
            ref,
            ...props,
            checked: checked || undefined,
            defaultChecked: defaultChecked || undefined,
            defaultIndeterminate: defaultIndeterminate || undefined,
            disabled: disabled || undefined,
            indeterminate: indeterminate || undefined,
            required: required || undefined,
        });
    }
);

Checkbox.displayName = 'Checkbox';

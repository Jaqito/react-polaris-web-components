import { forwardRef, createElement, useCallback, type ReactNode } from 'react';

type SSelectProps = JSX.IntrinsicElements['s-select'];
type SOptionProps = JSX.IntrinsicElements['s-option'];
type SOptionGroupProps = JSX.IntrinsicElements['s-option-group'];

export interface SelectProps extends Omit<SSelectProps, 'disabled' | 'required' | 'onChange' | 'onBlur'> {
    /** Prevents user interaction */
    disabled?: boolean;
    /** Marks field as required */
    required?: boolean;
    /** Value-first change handler — receives the selected value string, not a DOM event */
    onChange?: (value: string) => void;
    /** Blur handler for form library integration */
    onBlur?: () => void;
    /** Option elements */
    children?: ReactNode;
}

/**
 * Select component - dropdown selection for forms.
 *
 * Enhanced with value-first onChange for clean React/form-library integration.
 *
 *
 * @example
 * <Select label="Country" value={country} onChange={setCountry}>
 *   <Option value="us">United States</Option>
 *   <Option value="ca">Canada</Option>
 * </Select>
 */
export const Select = forwardRef<HTMLElement, SelectProps>(
    ({ disabled, required, onChange, onBlur, children, ...props }, ref) => {
        const handleChange = useCallback(
            (e: Event) => {
                if (!onChange) return;
                const el = e.currentTarget as HTMLElement & { value?: string };
                onChange(el.value ?? '');
            },
            [onChange]
        );

        const handleBlur = useCallback(
            (_e: Event) => {
                onBlur?.();
            },
            [onBlur]
        );

        return createElement(
            's-select',
            {
                ref,
                ...props,
                disabled: disabled || undefined,
                required: required || undefined,
                onChange: onChange ? handleChange : undefined,
                onBlur: onBlur ? handleBlur : undefined,
            },
            children
        );
    }
);

Select.displayName = 'Select';

export interface OptionProps {
    /** Option value for form submission */
    value?: SOptionProps['value'];
    /** Prevents selection */
    disabled?: SOptionProps['disabled'];
    /** Whether the option is currently selected */
    selected?: SOptionProps['selected'];
    /** Whether the option is selected by default */
    defaultSelected?: SOptionProps['defaultSelected'];
    /** Option label content */
    children?: ReactNode;
}

/**
 * Option component - individual selectable item within Select.
 */
export const Option = forwardRef<HTMLElement, OptionProps>(
    ({ disabled, selected, defaultSelected, children, ...props }, ref) => {
        return createElement(
            's-option',
            {
                ref,
                ...props,
                disabled: disabled || undefined,
                selected: selected || undefined,
                defaultSelected: defaultSelected || undefined,
            },
            children
        );
    }
);

Option.displayName = 'Option';

export interface OptionGroupProps {
    /** Group label */
    label?: SOptionGroupProps['label'];
    /** Prevents selection of all options in group */
    disabled?: SOptionGroupProps['disabled'];
    /** Option elements */
    children?: ReactNode;
}

/**
 * OptionGroup component - groups related options within Select.
 */
export const OptionGroup = forwardRef<HTMLElement, OptionGroupProps>(({ disabled, children, ...props }, ref) => {
    return createElement(
        's-option-group',
        {
            ref,
            ...props,
            disabled: disabled || undefined,
        },
        children
    );
});

OptionGroup.displayName = 'OptionGroup';

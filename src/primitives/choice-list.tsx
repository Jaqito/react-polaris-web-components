import { forwardRef, createElement, useCallback, type ReactNode } from 'react';

type SChoiceListProps = JSX.IntrinsicElements['s-choice-list'];
type SChoiceProps = JSX.IntrinsicElements['s-choice'];

export type ChoiceListProps = Omit<SChoiceListProps, 'values' | 'multiple' | 'disabled' | 'onChange'> & {
    /** Prevents user interaction */
    disabled?: boolean;
    /** Allows selecting multiple choices (checkbox mode vs radio mode) */
    multiple?: boolean;
    /** Array of selected option values */
    values?: string[];
    /** Value-first change handler — receives the selected values array, not a DOM event */
    onChange?: (values: string[]) => void;
    /** Choice elements */
    children?: ReactNode;
};

/**
 * ChoiceList component - group of radio buttons or checkboxes.
 *
 * Enhanced with value-first onChange for clean React/form-library integration.
 *
 *
 * @example
 * <ChoiceList label="Shipping method" name="shipping" values={methods} onChange={setMethods}>
 *   <Choice value="standard">Standard shipping</Choice>
 *   <Choice value="express">Express shipping</Choice>
 * </ChoiceList>
 */
export const ChoiceList = forwardRef<HTMLElement, ChoiceListProps>(
    ({ disabled, multiple, values, onChange, children, ...props }, ref) => {
        const handleChange = useCallback(
            (e: Event) => {
                if (!onChange) return;
                const el = e.currentTarget as HTMLElement & { values?: string };
                try {
                    onChange(el.values ? JSON.parse(el.values) : []);
                } catch {
                    onChange([]);
                }
            },
            [onChange]
        );

        return createElement(
            's-choice-list',
            {
                ref,
                ...props,
                disabled: disabled || undefined,
                multiple: multiple || undefined,
                values: values ? JSON.stringify(values) : undefined,
                onChange: onChange ? handleChange : undefined,
            },
            children
        );
    }
);

ChoiceList.displayName = 'ChoiceList';

export type ChoiceProps = Omit<SChoiceProps, 'defaultSelected' | 'disabled' | 'selected'> & {
    /** Whether the choice is selected by default */
    defaultSelected?: boolean;
    /** Prevents selection of this choice */
    disabled?: boolean;
    /** Whether the choice is currently selected */
    selected?: boolean;
    /** Choice label content */
    children?: ReactNode;
    /** Details slot content */
    details?: ReactNode;
};

/**
 * Choice component - individual option within ChoiceList.
 */
export const Choice = forwardRef<HTMLElement, ChoiceProps>(
    ({ defaultSelected, disabled, selected, children, details, ...props }, ref) => {
        return createElement(
            's-choice',
            {
                ref,
                ...props,
                defaultSelected: defaultSelected || undefined,
                disabled: disabled || undefined,
                selected: selected || undefined,
            },
            children,
            details && createElement('span', { slot: 'details' }, details)
        );
    }
);

Choice.displayName = 'Choice';

import { forwardRef, createElement, useCallback } from 'react';
import { formatISO, parseISO, buildAllowRange } from '../internal/date';

type SDateFieldProps = JSX.IntrinsicElements['s-date-field'];

export type DateFieldProps = Omit<
    SDateFieldProps,
    'value' | 'defaultValue' | 'allow' | 'disallow' | 'disabled' | 'readOnly' | 'required' | 'onChange' | 'onBlur'
> & {
    /** Controlled value. If provided, defaultValue is ignored. */
    value?: Date | null;
    /** Uncontrolled initial value. Ignored when value is provided. */
    defaultValue?: Date | null;
    /** Earliest selectable date */
    min?: Date;
    /** Latest selectable date */
    max?: Date;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    onChange?: (date: Date | null) => void;
    onBlur?: () => void;
};

/**
 * DateField — text input with date picker and Date object API.
 *
 * Converts React Date objects to/from YYYY-MM-DD strings.
 * Supports label, error, and react-hook-form via Controller.
 *
 *
 * @example Basic
 * const [date, setDate] = useState<Date | null>(null);
 * <DateField label="Start date" value={date} onChange={setDate} />
 *
 * @example react-hook-form
 * <Controller
 *   name="startDate"
 *   control={control}
 *   render={({ field, fieldState }) => (
 *     <DateField {...field} error={fieldState.error?.message} />
 *   )}
 * />
 */
export const DateField = forwardRef<HTMLElement, DateFieldProps>(
    ({ value, defaultValue, min, max, disabled, readOnly, required, onChange, onBlur, ...props }, ref) => {
        const isControlled = value !== undefined;

        // null = controlled empty, undefined = uncontrolled
        const stringValue = value ? formatISO(value) : value === null ? '' : undefined;
        const stringDefault = !isControlled && defaultValue ? formatISO(defaultValue) : undefined;

        const allow = buildAllowRange(min, max);

        const handleChange = useCallback(
            (e: Event) => {
                if (!onChange) return;
                type DateFieldElement = HTMLElement & { value?: string };
                const raw = (e.currentTarget as DateFieldElement).value ?? '';
                onChange(raw ? parseISO(raw) : null);
            },
            [onChange]
        );

        const handleBlur = useCallback(
            (_e: Event) => {
                onBlur?.();
            },
            [onBlur]
        );

        // NOTE: s-date-field emits `invalid` events for malformed input.
        // We intentionally rely on its internal validation + `error` prop
        // rather than surfacing a separate callback.
        return createElement('s-date-field', {
            ref,
            ...props,
            value: stringValue,
            defaultValue: stringDefault,
            allow,
            disabled: disabled || undefined,
            readOnly: readOnly || undefined,
            required: required || undefined,
            onChange: onChange ? handleChange : undefined,
            onBlur: onBlur ? handleBlur : undefined,
        });
    }
);

DateField.displayName = 'DateField';

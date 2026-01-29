import { forwardRef, createElement, useCallback } from 'react';
import { formatISO, parseISO, buildAllowRange } from '../internal/date';

type SDatePickerProps = JSX.IntrinsicElements['s-date-picker'];

// --- Single mode ---

export type DatePickerSingleProps = Omit<
    SDatePickerProps,
    'value' | 'defaultValue' | 'allow' | 'disallow' | 'disabled' | 'type' | 'onChange'
> & {
    type?: 'single';
    /** Controlled value. If provided, defaultValue is ignored. */
    value?: Date | null;
    /** Uncontrolled initial value. Ignored when value is provided. */
    defaultValue?: Date | null;
    /** Earliest selectable date */
    min?: Date;
    /** Latest selectable date */
    max?: Date;
    disabled?: boolean;
    onChange?: (date: Date | null) => void;
};

// --- Range mode ---

export type DateRange = {
    start: Date | null;
    end: Date | null;
};

export type DatePickerRangeProps = Omit<
    SDatePickerProps,
    'value' | 'defaultValue' | 'allow' | 'disallow' | 'disabled' | 'type' | 'onChange'
> & {
    type: 'range';
    /** Controlled range value. If provided, defaultValue is ignored. */
    value?: DateRange;
    /** Uncontrolled initial range. Ignored when value is provided. */
    defaultValue?: DateRange;
    /** Earliest selectable date */
    min?: Date;
    /** Latest selectable date */
    max?: Date;
    disabled?: boolean;
    onChange?: (range: DateRange) => void;
};

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

/**
 * DatePicker — calendar date selection with Date object API.
 *
 * Converts React Date objects to/from the YYYY-MM-DD strings
 * the web component expects. Supports single and range modes.
 *
 *
 * @example Single
 * const [date, setDate] = useState<Date | null>(null);
 * <DatePicker value={date} onChange={setDate} min={new Date(2024, 0, 1)} />
 *
 * @example Range
 * const [range, setRange] = useState<DateRange>({ start: null, end: null });
 * <DatePicker type="range" value={range} onChange={setRange} />
 */
export const DatePicker = forwardRef<HTMLElement, DatePickerProps>(
    ({ value, defaultValue, min, max, disabled, onChange, type, ...props }, ref) => {
        const isRange = type === 'range';

        const isControlled = value !== undefined;

        // Serialize value: null = controlled empty, undefined = uncontrolled
        let stringValue: string | undefined;
        if (isRange) {
            const rv = value as DateRange | undefined;
            if (rv) {
                const s = rv.start ? formatISO(rv.start) : '';
                const e = rv.end ? formatISO(rv.end) : '';
                // Only set value when at least one side of the range is defined
                stringValue = s || e ? `${s}--${e}` : '';
            }
        } else {
            const sv = value as Date | null | undefined;
            if (sv === null) stringValue = '';
            else if (sv) stringValue = formatISO(sv);
        }

        // Serialize defaultValue (only relevant when uncontrolled)
        let stringDefault: string | undefined;
        if (!isControlled) {
            if (isRange) {
                const rd = defaultValue as DateRange | undefined;
                if (rd) {
                    const s = rd.start ? formatISO(rd.start) : '';
                    const e = rd.end ? formatISO(rd.end) : '';
                    stringDefault = s || e ? `${s}--${e}` : undefined;
                }
            } else {
                const sd = defaultValue as Date | null | undefined;
                stringDefault = sd ? formatISO(sd) : undefined;
            }
        }

        const allow = buildAllowRange(min, max);

        const handleChange = useCallback(
            (e: Event) => {
                if (!onChange) return;
                type DatePickerElement = HTMLElement & { value?: string };
                const raw = (e.currentTarget as DatePickerElement).value ?? '';

                if (isRange) {
                    const cb = onChange as (range: DateRange) => void;
                    if (!raw) {
                        cb({ start: null, end: null });
                    } else {
                        const [s, e] = raw.split('--');
                        cb({ start: parseISO(s), end: parseISO(e) });
                    }
                } else {
                    const cb = onChange as (date: Date | null) => void;
                    cb(raw ? parseISO(raw) : null);
                }
            },
            [onChange, isRange]
        );

        return createElement('s-date-picker', {
            ref,
            ...props,
            type: isRange ? 'range' : undefined,
            value: stringValue,
            defaultValue: stringDefault,
            allow,
            disabled: disabled || undefined,
            onChange: onChange ? handleChange : undefined,
        });
    }
);

DatePicker.displayName = 'DatePicker';

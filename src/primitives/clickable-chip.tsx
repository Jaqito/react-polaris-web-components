import { forwardRef, createElement, useEffect, useRef, useImperativeHandle, type ReactNode } from 'react';

type SClickableChipProps = JSX.IntrinsicElements['s-clickable-chip'];

export type ClickableChipProps = Omit<SClickableChipProps, 'disabled' | 'hidden' | 'removable'> & {
    /** Prevents user interaction */
    disabled?: boolean;
    /** Controls visibility; works with removable chips */
    hidden?: boolean;
    /** Enables remove button functionality */
    removable?: boolean;
    /** Content of the chip */
    children?: ReactNode;
    /** Graphic slot content (icon) */
    graphic?: ReactNode;
    /** Remove handler (fires when chip is removed) */
    onRemove?: (event: CustomEvent) => void;
};

/**
 * ClickableChip component - interactive button to categorize or highlight content.
 *
 *
 * @example
 * <ClickableChip>Tag</ClickableChip>
 * <ClickableChip color="strong" removable>Removable</ClickableChip>
 */
export const ClickableChip = forwardRef<HTMLElement, ClickableChipProps>(
    ({ disabled, hidden, removable, children, graphic, onRemove, ...props }, ref) => {
        // Internal ref for DOM access + event listener
        const innerRef = useRef<HTMLElement | null>(null);

        // Expose internal ref to parent via forwarded ref
        useImperativeHandle(ref, () => innerRef.current!);

        // Handle remove event via DOM event listener
        useEffect(() => {
            if (!onRemove) return;

            const element = innerRef.current;
            if (!element) return;

            const handler = (e: Event) => onRemove(e as CustomEvent);
            element.addEventListener('remove', handler);
            return () => element.removeEventListener('remove', handler);
        }, [onRemove]);

        return createElement(
            's-clickable-chip',
            {
                ref: innerRef,
                ...props,
                disabled: disabled || undefined,
                hidden: hidden || undefined,
                removable: removable || undefined,
            },
            graphic && createElement('span', { slot: 'graphic' }, graphic),
            children
        );
    }
);

ClickableChip.displayName = 'ClickableChip';

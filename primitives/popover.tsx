import {
    forwardRef,
    createElement,
    useEffect,
    useRef,
    useImperativeHandle,
    useId,
    cloneElement,
    isValidElement,
    type ReactNode,
    type ReactElement,
} from 'react';

type SPopoverProps = JSX.IntrinsicElements['s-popover'];

export type PopoverProps = Omit<
    SPopoverProps,
    'children' | 'onShow' | 'onHide' | 'onToggle' | 'onAfterShow' | 'onAfterHide' | 'onAfterToggle'
> & {
    /** Optional trigger element — auto-wired to open the popover */
    trigger?: ReactElement;
    /** Popover content */
    children?: ReactNode;
    /** Fires when show is triggered */
    onShow?: (e: CustomEvent) => void;
    /** Fires when hide is triggered */
    onHide?: (e: CustomEvent) => void;
    /** Fires when toggle is triggered */
    onToggle?: (e: CustomEvent) => void;
    /** Fires after popover shows */
    onAfterShow?: (e: CustomEvent) => void;
    /** Fires after popover hides */
    onAfterHide?: (e: CustomEvent) => void;
    /** Fires after toggle */
    onAfterToggle?: (e: CustomEvent) => void;
};

/**
 * Popover component - floating content container.
 *
 *
 * @example With trigger (recommended)
 * <Popover trigger={<Button>Show info</Button>}>
 *   <p>Additional information here</p>
 * </Popover>
 *
 * @example Manual wiring
 * <Button open="my-popover">Show info</Button>
 * <Popover id="my-popover">
 *   <p>Additional information here</p>
 * </Popover>
 */
export const Popover = forwardRef<HTMLElement, PopoverProps>(
    (
        {
            trigger,
            children,
            id: providedId,
            onShow,
            onHide,
            onToggle,
            onAfterShow,
            onAfterHide,
            onAfterToggle,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const id = trigger ? (providedId ?? `popover-${generatedId}`) : providedId;

        const wiredTrigger =
            trigger && isValidElement(trigger) ? cloneElement(trigger, { open: id } as object) : trigger;

        // Internal ref for DOM access + event listeners
        const innerRef = useRef<HTMLElement | null>(null);

        // Expose internal ref to parent via forwarded ref
        useImperativeHandle(ref, () => innerRef.current!);

        // Attach DOM event listeners for overlay lifecycle events
        useEffect(() => {
            const element = innerRef.current;
            if (!element) return;

            const eventMap: Record<string, ((e: CustomEvent) => void) | undefined> = {
                show: onShow,
                hide: onHide,
                toggle: onToggle,
                'after-show': onAfterShow,
                'after-hide': onAfterHide,
                'after-toggle': onAfterToggle,
            };

            const handlers: Array<[string, EventListener]> = [];

            for (const [event, handler] of Object.entries(eventMap)) {
                if (handler) {
                    const listener = (e: Event) => handler(e as CustomEvent);
                    element.addEventListener(event, listener);
                    handlers.push([event, listener]);
                }
            }

            return () => {
                for (const [event, listener] of handlers) {
                    element.removeEventListener(event, listener);
                }
            };
        }, [onShow, onHide, onToggle, onAfterShow, onAfterHide, onAfterToggle]);

        return (
            <>
                {wiredTrigger}
                {createElement('s-popover', { ref: innerRef, ...props, id }, children)}
            </>
        );
    }
);

Popover.displayName = 'Popover';

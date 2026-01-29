import {
    forwardRef,
    createElement,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
    useImperativeHandle,
    type ReactNode,
    type ReactElement,
} from 'react';

type SModalProps = JSX.IntrinsicElements['s-modal'];

export type ModalProps = Omit<SModalProps, 'children' | 'onShow' | 'onHide' | 'onAfterShow' | 'onAfterHide'> & {
    /** Modal content */
    children?: ReactNode;
    /** Primary action button (primary variant only) */
    primaryAction?: ReactElement;
    /** Secondary action buttons (secondary/auto variants, max 2) */
    secondaryActions?: ReactElement | ReactElement[];
    /** Fires when show is triggered */
    onShow?: (e: CustomEvent) => void;
    /** Fires when hide is triggered */
    onHide?: (e: CustomEvent) => void;
    /** Fires after modal displays */
    onAfterShow?: (e: CustomEvent) => void;
    /** Fires after modal closes */
    onAfterHide?: (e: CustomEvent) => void;
};

/**
 * Modal component - overlay dialog for focused tasks.
 *
 * Use `showOverlay()`, `hideOverlay()`, or `toggleOverlay()` methods via ref.
 *
 *
 * @example
 * <Button open="my-modal">Open Modal</Button>
 * <Modal id="my-modal" heading="Edit product">
 *   <p>Modal content here</p>
 * </Modal>
 */
export const Modal = forwardRef<HTMLElement, ModalProps>(
    ({ children, primaryAction, secondaryActions, onShow, onHide, onAfterShow, onAfterHide, ...props }, ref) => {
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
                'after-show': onAfterShow,
                'after-hide': onAfterHide,
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
        }, [onShow, onHide, onAfterShow, onAfterHide]);

        // Inject slot attribute directly on action elements
        const slottedPrimaryAction =
            primaryAction && isValidElement(primaryAction)
                ? cloneElement(primaryAction, { slot: 'primary-action' } as object)
                : primaryAction;

        const slottedSecondaryActions = secondaryActions
            ? Array.isArray(secondaryActions)
                ? secondaryActions.map((action, i) =>
                      isValidElement(action)
                          ? cloneElement(action, { slot: 'secondary-actions', key: i } as object)
                          : action
                  )
                : isValidElement(secondaryActions)
                  ? cloneElement(secondaryActions, { slot: 'secondary-actions' } as object)
                  : secondaryActions
            : null;

        return createElement(
            's-modal',
            { ref: innerRef, ...props },
            children,
            slottedPrimaryAction,
            slottedSecondaryActions
        );
    }
);

Modal.displayName = 'Modal';

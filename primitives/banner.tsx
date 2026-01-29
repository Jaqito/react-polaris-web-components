import { forwardRef, createElement, useEffect, useRef, useImperativeHandle, type ReactNode } from 'react';

type SBannerProps = JSX.IntrinsicElements['s-banner'];

export type BannerProps = Omit<SBannerProps, 'dismissible' | 'hidden' | 'onDismiss' | 'onAfterHide'> & {
    /** Whether the close button is present */
    dismissible?: boolean;
    /** Whether the banner is hidden */
    hidden?: boolean;
    /** Banner content */
    children?: ReactNode;
    /** Secondary action buttons (max 2, secondary/auto variants) */
    secondaryActions?: ReactNode;
    /** Fires when close button is pressed */
    onDismiss?: (event: CustomEvent) => void;
    /** Fires after dismissal animation completes */
    onAfterHide?: (event: CustomEvent) => void;
};

/**
 * Banner component - highlights important information or required actions.
 *
 *
 * @example
 * <Banner tone="warning" heading="Your trial ends soon">
 *   Upgrade to continue using all features.
 * </Banner>
 */
export const Banner = forwardRef<HTMLElement, BannerProps>(
    ({ dismissible, hidden, children, secondaryActions, onDismiss, onAfterHide, ...props }, ref) => {
        // Internal ref for DOM access + event listeners
        const innerRef = useRef<HTMLElement | null>(null);

        // Expose internal ref to parent via forwarded ref
        useImperativeHandle(ref, () => innerRef.current!);

        // Handle dismiss event via DOM event listener
        useEffect(() => {
            if (!onDismiss) return;

            const element = innerRef.current;
            if (!element) return;

            const handler = (e: Event) => onDismiss(e as CustomEvent);
            element.addEventListener('dismiss', handler);
            return () => element.removeEventListener('dismiss', handler);
        }, [onDismiss]);

        // Handle afterhide event via DOM event listener
        useEffect(() => {
            if (!onAfterHide) return;

            const element = innerRef.current;
            if (!element) return;

            const handler = (e: Event) => onAfterHide(e as CustomEvent);
            element.addEventListener('afterhide', handler);
            return () => element.removeEventListener('afterhide', handler);
        }, [onAfterHide]);

        return createElement(
            's-banner',
            {
                ref: innerRef,
                ...props,
                dismissible: dismissible || undefined,
                hidden: hidden || undefined,
            },
            children,
            secondaryActions && createElement('span', { slot: 'secondary-actions' }, secondaryActions)
        );
    }
);

Banner.displayName = 'Banner';

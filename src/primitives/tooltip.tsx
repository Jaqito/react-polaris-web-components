import { forwardRef, createElement, type ReactNode } from 'react';

type STooltipProps = JSX.IntrinsicElements['s-tooltip'];

export interface TooltipProps {
    /** Unique identifier - referenced by trigger's interestFor attribute */
    id: STooltipProps['id'];
    /** Tooltip content (Text, Paragraph, or raw text) */
    children?: ReactNode;
}

/**
 * Tooltip component - displays helpful information on hover/focus.
 *
 * Connect to a trigger via `interestFor` attribute on the trigger element.
 *
 *
 * @example
 * <Tooltip id="help-tooltip">Click to learn more</Tooltip>
 * <Button interestFor="help-tooltip" icon="info" />
 */
export const Tooltip = forwardRef<HTMLElement, TooltipProps>(({ children, ...props }, ref) => {
    return createElement('s-tooltip', { ref, ...props }, children);
});

Tooltip.displayName = 'Tooltip';

import { forwardRef, createElement, Children, isValidElement, cloneElement, type ReactNode } from 'react';

type SButtonGroupProps = JSX.IntrinsicElements['s-button-group'];

export type ButtonGroupProps = Omit<SButtonGroupProps, 'children'> & {
    children?: ReactNode;
};

/**
 * ButtonGroup component - groups related actions.
 *
 * Automatically assigns slots based on position:
 * - Last child → `primary-action` slot
 * - Other children → `secondary-actions` slot
 *
 *
 * @example
 * <ButtonGroup>
 *   <Button>Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </ButtonGroup>
 */
export const ButtonGroup = forwardRef<HTMLElement, ButtonGroupProps>(({ children, ...props }, ref) => {
    const buttons = Children.toArray(children);

    const slottedChildren = buttons.map((child, index) => {
        if (!isValidElement<{ slot?: string }>(child)) return child;

        // Respect explicit slot if provided
        if (child.props.slot) return child;

        const isLast = index === buttons.length - 1;
        const slot = isLast ? 'primary-action' : 'secondary-actions';

        return cloneElement(child, { slot });
    });

    return createElement('s-button-group', { ref, ...props }, slottedChildren);
});

ButtonGroup.displayName = 'ButtonGroup';

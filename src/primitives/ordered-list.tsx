import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-ordered-list'];

/**
 * OrderedList component - numbered list of items.
 *
 * @example
 * <OrderedList>
 *   <ListItem>First step</ListItem>
 *   <ListItem>Second step</ListItem>
 * </OrderedList>
 */
export const OrderedList = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-ordered-list', { ref, ...props })
);

OrderedList.displayName = 'OrderedList';

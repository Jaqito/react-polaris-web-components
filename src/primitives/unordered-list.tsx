import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-unordered-list'];

/**
 * UnorderedList component - bulleted list of items.
 *
 * @example
 * <UnorderedList>
 *   <ListItem>Free shipping</ListItem>
 *   <ListItem>30-day returns</ListItem>
 * </UnorderedList>
 */
export const UnorderedList = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-unordered-list', { ref, ...props })
);

UnorderedList.displayName = 'UnorderedList';

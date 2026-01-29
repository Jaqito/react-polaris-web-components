import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-list-item'];

/**
 * ListItem component - item within OrderedList or UnorderedList.
 *
 * @example
 * <UnorderedList>
 *   <ListItem>First item</ListItem>
 *   <ListItem>Second item</ListItem>
 * </UnorderedList>
 */
export const ListItem = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-list-item', { ref, ...props }));

ListItem.displayName = 'ListItem';

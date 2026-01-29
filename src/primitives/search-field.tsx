import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-search-field'];

/**
 * SearchField component - text input with search icon.
 *
 * @example
 * <SearchField label="Search" placeholder="Search products..." />
 */
export const SearchField = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-search-field', { ref, ...props })
);

SearchField.displayName = 'SearchField';

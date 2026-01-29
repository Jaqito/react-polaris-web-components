import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-url-field'];

/**
 * UrlField component - text input for URLs.
 *
 * @example
 * <UrlField label="Website" placeholder="https://example.com" />
 */
export const UrlField = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-url-field', { ref, ...props }));

UrlField.displayName = 'UrlField';

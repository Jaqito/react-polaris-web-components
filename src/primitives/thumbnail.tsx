import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type ThumbnailProps = JSX.IntrinsicElements['s-thumbnail'];

/**
 * Thumbnail component - small image preview.
 *
 *
 * @example
 * <Thumbnail src="/product.jpg" alt="Product image" />
 */
export const Thumbnail = forwardRef<HTMLElement, ThumbnailProps>((props, ref) => {
    return createElement('s-thumbnail', { ref, ...props });
});

Thumbnail.displayName = 'Thumbnail';

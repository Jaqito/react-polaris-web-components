import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-image'];

/**
 * Image component - displays images with aspect ratio control.
 *
 * @example
 * <Image src="/product.jpg" alt="Product photo" aspectRatio="16/9" />
 */
export const Image = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-image', { ref, ...props }));

Image.displayName = 'Image';

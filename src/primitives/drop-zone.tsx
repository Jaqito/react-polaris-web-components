import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-drop-zone'];

/**
 * DropZone component - file upload via drag and drop or click.
 *
 * @example
 * <DropZone accept="image/*">Drop images here</DropZone>
 */
export const DropZone = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-drop-zone', { ref, ...props }));

DropZone.displayName = 'DropZone';

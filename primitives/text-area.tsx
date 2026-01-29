import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-text-area'];

/**
 * TextArea component - multi-line text input.
 *
 * @example
 * <TextArea label="Description" placeholder="Enter a description" rows={4} />
 */
export const TextArea = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-text-area', { ref, ...props }));

TextArea.displayName = 'TextArea';

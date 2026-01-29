import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-avatar'];

/**
 * Avatar component - displays a user or entity image.
 *
 * @example
 * <Avatar initials="JD" />
 * <Avatar src="/profile.jpg" initials="JD" />
 */
export const Avatar = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-avatar', { ref, ...props }));

Avatar.displayName = 'Avatar';

import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-query-container'];

/**
 * QueryContainer component - enables CSS container queries for responsive children.
 *
 * @example
 * <QueryContainer>
 *   <Box padding="base">Responsive content</Box>
 * </QueryContainer>
 */
export const QueryContainer = forwardRef<HTMLElement, Props>((props, ref) =>
    createElement('s-query-container', { ref, ...props })
);

QueryContainer.displayName = 'QueryContainer';

import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type GridProps = JSX.IntrinsicElements['s-grid'];

/**
 * Grid component - CSS grid layout helper.
 *
 *
 * @example
 * <Grid columns="2">
 *   <div>Column 1</div>
 *   <div>Column 2</div>
 * </Grid>
 */
export const Grid = forwardRef<HTMLElement, GridProps>(({ children, ...props }, ref) => {
    return createElement('s-grid', { ref, ...props }, children);
});

Grid.displayName = 'Grid';

import { forwardRef, createElement } from 'react';

type Props = JSX.IntrinsicElements['s-grid-item'];

/**
 * GridItem component - child element within a Grid.
 *
 * @example
 * <Grid gridTemplateColumns="1fr 1fr">
 *   <GridItem>Column 1</GridItem>
 *   <GridItem>Column 2</GridItem>
 * </Grid>
 */
export const GridItem = forwardRef<HTMLElement, Props>((props, ref) => createElement('s-grid-item', { ref, ...props }));

GridItem.displayName = 'GridItem';

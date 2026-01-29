import { forwardRef, createElement } from 'react';

/**
 * Table components - semantic table structure for data display.
 *
 * @example
 * <Table>
 *   <TableHeader>
 *     <TableHeaderRow>
 *       <TableCell>Product</TableCell>
 *       <TableCell>Price</TableCell>
 *     </TableHeaderRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>T-Shirt</TableCell>
 *       <TableCell>$29.99</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */

type TableProps = JSX.IntrinsicElements['s-table'];

export const Table = forwardRef<HTMLElement, TableProps>((props, ref) => createElement('s-table', { ref, ...props }));
Table.displayName = 'Table';

type TableHeaderProps = JSX.IntrinsicElements['s-table-header'];

export const TableHeader = forwardRef<HTMLElement, TableHeaderProps>((props, ref) =>
    createElement('s-table-header', { ref, ...props })
);
TableHeader.displayName = 'TableHeader';

type TableHeaderRowProps = JSX.IntrinsicElements['s-table-header-row'];

export const TableHeaderRow = forwardRef<HTMLElement, TableHeaderRowProps>((props, ref) =>
    createElement('s-table-header-row', { ref, ...props })
);
TableHeaderRow.displayName = 'TableHeaderRow';

type TableBodyProps = JSX.IntrinsicElements['s-table-body'];

export const TableBody = forwardRef<HTMLElement, TableBodyProps>((props, ref) =>
    createElement('s-table-body', { ref, ...props })
);
TableBody.displayName = 'TableBody';

type TableRowProps = JSX.IntrinsicElements['s-table-row'];

export const TableRow = forwardRef<HTMLElement, TableRowProps>((props, ref) =>
    createElement('s-table-row', { ref, ...props })
);
TableRow.displayName = 'TableRow';

type TableCellProps = JSX.IntrinsicElements['s-table-cell'];

export const TableCell = forwardRef<HTMLElement, TableCellProps>((props, ref) =>
    createElement('s-table-cell', { ref, ...props })
);
TableCell.displayName = 'TableCell';

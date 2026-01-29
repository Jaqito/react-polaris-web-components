import { forwardRef, createElement, type ReactNode } from 'react';

type SButtonProps = JSX.IntrinsicElements['s-button'];

export type ButtonProps = Omit<SButtonProps, 'disabled' | 'loading' | 'command' | 'commandFor'> & {
    /** Prevents clicking or receiving focus */
    disabled?: boolean;
    /** Shows loading indicator and disables button */
    loading?: boolean;
    /** Content of the button */
    children?: ReactNode;
    /** Opens the modal/popover/menu with this id */
    open?: string;
    /** Closes the modal/popover/menu with this id */
    close?: string;
    /** Toggles the modal/popover/menu with this id */
    toggle?: string;
};

/**
 * Button component - triggers actions or events.
 *
 *
 * @example
 * // Basic usage
 * <Button variant="primary">Save</Button>
 * <Button variant="secondary" tone="critical">Delete</Button>
 *
 * @example
 * // Opening a modal
 * <Button open="edit-modal">Edit</Button>
 * <Modal id="edit-modal" heading="Edit product">...</Modal>
 *
 * @example
 * // Toggle a popover
 * <Button toggle="options-popover">Options</Button>
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
    ({ children, disabled, loading, open, close, toggle, ...props }, ref) => {
        // Map intent props to underlying command/commandFor attributes
        let command: string | undefined;
        let commandFor: string | undefined;

        if (open) {
            command = '--show';
            commandFor = open;
        } else if (close) {
            command = '--hide';
            commandFor = close;
        } else if (toggle) {
            command = '--toggle';
            commandFor = toggle;
        }

        return createElement(
            's-button',
            {
                ref,
                ...props,
                command,
                commandFor,
                disabled: disabled || undefined,
                loading: loading || undefined,
            },
            children
        );
    }
);

Button.displayName = 'Button';

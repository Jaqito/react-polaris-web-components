import {
    forwardRef,
    createElement,
    useId,
    cloneElement,
    isValidElement,
    type ReactNode,
    type ReactElement,
} from 'react';

type SMenuProps = JSX.IntrinsicElements['s-menu'];

export type MenuProps = SMenuProps & {
    /** Optional trigger element — auto-wired to open the menu */
    trigger?: ReactElement;
    children?: ReactNode;
};

/**
 * Menu component - displays a list of actions for a resource.
 *
 * Use `<Section>` to group related actions within the menu.
 *
 *
 * @example With trigger (recommended)
 * <Menu trigger={<Button>Actions</Button>} accessibilityLabel="Customer actions">
 *   <Button>Edit</Button>
 *   <Button>Duplicate</Button>
 * </Menu>
 *
 * @example Manual wiring
 * <Button open="menu-1">Actions</Button>
 * <Menu id="menu-1" accessibilityLabel="Customer actions">
 *   <Button>Edit</Button>
 * </Menu>
 */
export const Menu = forwardRef<HTMLElement, MenuProps>(({ trigger, children, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = trigger ? (providedId ?? `menu-${generatedId}`) : providedId;

    const wiredTrigger = trigger && isValidElement(trigger) ? cloneElement(trigger, { open: id } as object) : trigger;

    return (
        <>
            {wiredTrigger}
            {createElement('s-menu', { ref, ...props, id }, children)}
        </>
    );
});

Menu.displayName = 'Menu';

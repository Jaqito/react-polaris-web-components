import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type PageProps = JSX.IntrinsicElements['s-page'];

/**
 * Page component - top-level layout wrapper for admin pages.
 *
 *
 * @example
 * <Page title="Products">
 *   <Section>Content here</Section>
 * </Page>
 */
export const Page = forwardRef<HTMLElement, PageProps>(({ children, ...props }, ref) => {
    return createElement('s-page', { ref, ...props }, children);
});

Page.displayName = 'Page';

import { forwardRef, createElement } from 'react';
import type { JSX } from 'react';

export type SectionProps = JSX.IntrinsicElements['s-section'];

/**
 * Section component - groups related content within a page.
 *
 *
 * @example
 * <Section heading="Details">
 *   Content here
 * </Section>
 */
export const Section = forwardRef<HTMLElement, SectionProps>(({ children, ...props }, ref) => {
    return createElement('s-section', { ref, ...props }, children);
});

Section.displayName = 'Section';

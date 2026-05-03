---
version: 1
repo: react-polaris-web-components
language: typescript
package_manager: npm
---

## Validation
- npm run build
- npm run lint
- npm run typecheck

## Areas
### polaris-react-wrappers
- paths: src
- pattern: React forwardRef wrappers and internal utilities for every Shopify Polaris web component, exported from a single index.

### primitives
- paths: src/primitives
- pattern: One file per Polaris web component providing a typed React wrapper via createElement and forwardRef.

### internal-utils
- paths: src/internal
- pattern: Shared internal helpers (e.g. date formatting/parsing utilities) used by the primitive wrappers.

## Provider mappings
### polaris
- s-avatar → src/primitives/avatar.tsx
- s-badge → src/primitives/badge.tsx
- s-banner → src/primitives/banner.tsx
- s-box → src/primitives/box.tsx
- s-button → src/primitives/button.tsx
- s-button-group → src/primitives/button-group.tsx
- s-checkbox → src/primitives/checkbox.tsx
- s-chip → src/primitives/chip.tsx
- s-choice → src/primitives/choice-list.tsx
- s-choice-list → src/primitives/choice-list.tsx
- s-clickable → src/primitives/clickable.tsx
- s-clickable-chip → src/primitives/clickable-chip.tsx
- s-color-field → src/primitives/color-field.tsx
- s-color-picker → src/primitives/color-picker.tsx
- s-date-field → src/primitives/date-field.tsx
- s-date-picker → src/primitives/date-picker.tsx
- s-divider → src/primitives/divider.tsx
- s-drop-zone → src/primitives/drop-zone.tsx
- s-email-field → src/primitives/email-field.tsx
- s-grid → src/primitives/grid.tsx
- s-grid-item → src/primitives/grid-item.tsx
- s-heading → src/primitives/heading.tsx
- s-icon → src/primitives/icon.tsx
- s-image → src/primitives/image.tsx
- s-link → src/primitives/link.tsx
- s-list-item → src/primitives/list-item.tsx
- s-menu → src/primitives/menu.tsx
- s-modal → src/primitives/modal.tsx
- s-money-field → src/primitives/money-field.tsx
- s-number-field → src/primitives/number-field.tsx
- s-option → src/primitives/select.tsx
- s-option-group → src/primitives/select.tsx
- s-ordered-list → src/primitives/ordered-list.tsx
- s-page → src/primitives/page.tsx
- s-paragraph → src/primitives/paragraph.tsx
- s-password-field → src/primitives/password-field.tsx
- s-popover → src/primitives/popover.tsx
- s-query-container → src/primitives/query-container.tsx
- s-search-field → src/primitives/search-field.tsx
- s-section → src/primitives/section.tsx
- s-select → src/primitives/select.tsx
- s-spinner → src/primitives/spinner.tsx
- s-stack → src/primitives/stack.tsx
- s-switch → src/primitives/switch.tsx
- s-table → src/primitives/table.tsx
- s-table-body → src/primitives/table.tsx
- s-table-cell → src/primitives/table.tsx
- s-table-header → src/primitives/table.tsx
- s-table-header-row → src/primitives/table.tsx
- s-table-row → src/primitives/table.tsx
- s-text → src/primitives/text.tsx
- s-text-area → src/primitives/text-area.tsx
- s-text-field → src/primitives/text-field.tsx
- s-thumbnail → src/primitives/thumbnail.tsx
- s-tooltip → src/primitives/tooltip.tsx
- s-unordered-list → src/primitives/unordered-list.tsx
- s-url-field → src/primitives/url-field.tsx

## Patch policy
- addition: require_review
- behavior_change: require_review
- deprecation: require_review
- new_default: require_review
- removal: require_review
- rename: require_review
- signature_change: require_review

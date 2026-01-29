/** Format a Date to YYYY-MM-DD */
export function formatISO(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/** Parse YYYY-MM-DD to Date, or null. Rejects partial/malformed strings. */
export function parseISO(str: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(str)) return null;
    const d = new Date(`${str}T00:00:00`);
    return isNaN(d.getTime()) ? null : d;
}

/** Build a Polaris `allow` range string from min/max Dates */
export function buildAllowRange(min?: Date, max?: Date): string | undefined {
    if (!min && !max) return undefined;
    const start = min ? formatISO(min) : '';
    const end = max ? formatISO(max) : '';
    return `${start}--${end}`;
}

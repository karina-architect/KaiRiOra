/**
 * The services lists in all 7 locale dictionaries are authored in one canonical
 * order (payroll first, AI last). The site presents them AI-first to lead with
 * Data & AI, so that display order lives here and is shared by the home grid
 * and the footer column.
 *
 * Keeping it here rather than resequencing the dictionaries means the seven
 * translated files stay untouched and cannot drift out of order relative to
 * each other, and the two surfaces can never disagree about the order.
 *
 * Values are indexes into the canonical list:
 *   0 Payroll Administration      4 Relocation & Mobility
 *   1 Contractor Management       5 Data & AI Consulting
 *   2 Recruitment & Staff Aug.    6 AI Training & Workshops
 *   3 Employer of Record
 */
const AI_FIRST_SERVICE_ORDER: number[] = [5, 6, 0, 1, 2, 3, 4]

/**
 * Reorders a canonical services list to lead with the AI offerings.
 *
 * Entries not named in the order above — an eighth service added later — are
 * appended in their original order, so a new service still renders instead of
 * silently disappearing.
 */
export function aiFirst<T>(items: readonly T[]): T[] {
  const promoted = AI_FIRST_SERVICE_ORDER.filter((i) => i < items.length).map((i) => items[i])
  const rest = items.filter((_, i) => !AI_FIRST_SERVICE_ORDER.includes(i))
  return [...promoted, ...rest]
}

/**
 * Domain-specific knowledge for the agent loop.
 * Single source of truth — shared between server (managed API, MCP)
 * and extension (via import at build time).
 */
interface DomainEntry {
    domain: string;
    antiBot?: boolean;
    /** ISO date (YYYY-MM-DD) the golden tasks last passed. */
    lastVerified?: string | null;
    /** Path (relative to server/) to the YAML of golden tasks for this domain. */
    goldenTasks?: string | null;
    skill: string;
}
export type { DomainEntry };
/**
 * Look up domain knowledge for a URL.
 * Returns the first matching entry, or null.
 */
export declare function getDomainSkill(url: string): DomainEntry | null;
/**
 * Get all domain skills. Used by extension to import the full list.
 */
export declare function getAllDomainSkills(): DomainEntry[];

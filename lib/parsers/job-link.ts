/**
 * SEEK / LinkedIn job URL → structured draft job (MVP mock).
 * TODO: Implementar depois — scrape / official APIs where permitted.
 */
export function parseJobUrlMock(url: string): {
  title: string;
  description: string;
  source: "seek" | "linkedin" | "unknown";
} {
  const u = url.toLowerCase();
  const source = u.includes("seek") ? "seek" : u.includes("linkedin") ? "linkedin" : "unknown";
  return {
    title: "Imported role (mock)",
    description: `Parsed from ${source}. Replace with real parser. URL: ${url.slice(0, 80)}`,
    source,
  };
}

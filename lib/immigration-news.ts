export type ImmigrationNewsItem = {
  title: string;
  link: string;
  pubDate?: string;
  source: string;
};

const MOCK_NEWS: ImmigrationNewsItem[] = [
  {
    title: "Skilled migration program updates — invitation rounds",
    link: "https://www.homeaffairs.gov.au/",
    pubDate: new Date().toISOString(),
    source: "Department of Home Affairs",
  },
  {
    title: "Work rights and visa conditions: what employers must know",
    link: "https://www.sbs.com.au/news/topic/immigration",
    pubDate: new Date().toISOString(),
    source: "SBS News",
  },
  {
    title: "Regional pathways and post-study work extensions",
    link: "https://www.homeaffairs.gov.au/",
    pubDate: new Date().toISOString(),
    source: "Department of Home Affairs",
  },
];

function parseRssItems(xml: string, source: string, limit = 5): ImmigrationNewsItem[] {
  const items: ImmigrationNewsItem[] = [];
  const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = itemRegex.exec(xml)) !== null && items.length < limit) {
    const block = m[1];
    const titleMatch = /<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i.exec(
      block,
    );
    const linkMatch = /<link[^>]*>([\s\S]*?)<\/link>/i.exec(block);
    const dateMatch = /<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i.exec(block);
    const title = titleMatch?.[1]?.trim().replace(/<!\[CDATA\[|\]\]>/g, "").trim();
    const link = linkMatch?.[1]?.trim();
    if (title && link) {
      items.push({
        title,
        link,
        pubDate: dateMatch?.[1]?.trim(),
        source,
      });
    }
  }
  return items;
}

/** RSS feeds for landing “Últimas notícias”. Falls back to mock data if fetch/parse fails. */
export async function getImmigrationNews(): Promise<ImmigrationNewsItem[]> {
  const results: ImmigrationNewsItem[] = [];

  try {
    const doha = await fetch(
      "https://www.homeaffairs.gov.au/rss/latest-news.xml",
      { next: { revalidate: 3600 } },
    );
    if (doha.ok) {
      const xml = await doha.text();
      results.push(...parseRssItems(xml, "Department of Home Affairs", 4));
    }
  } catch {
    // TODO: Implementar depois — retry, structured logging, alternate feeds
  }

  try {
    const sbs = await fetch("https://www.sbs.com.au/news/topic/immigration/feed", {
      next: { revalidate: 3600 },
    });
    if (sbs.ok) {
      const xml = await sbs.text();
      results.push(...parseRssItems(xml, "SBS News", 4));
    }
  } catch {
    // TODO: Implementar depois — feed URL rotation
  }

  if (results.length === 0) return MOCK_NEWS;

  return results.slice(0, 8);
}

export const siteUrl = "https://bishalb.com";
export const siteName = "Bishal Bashyal Portfolio";

export const defaultBlogImage = `${siteUrl}/assets/personart.png`;

const publicationDates = {
  "wearable-biomarkers-ecg-ppg": "2026-11-18",
  "wearable-signal-filtering": "2026-10-23",
  "ppg-to-ecg": "2026-09-24",
  "hospital-to-smartwatch-ecg": "2026-08-20",
  "biosignal-device-shortcuts": "2026-07-09",
  "ppg-cadence-foundation-model": "2026-05-21",
  "biosignal-window-length": "2026-03-26",
  "agent-hallucination": "2025-12-04",
  "multi-agent-systems": "2025-09-18",
  "distributed-rag": "2025-06-26",
  "llm-lora-tuning": "2025-04-03",
  "claim-audit": "2025-01-09",
  "medical-summary": "2024-09-26",
  "nepali-mt-pipeline": "2024-06-20",
};

const publicationDateFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export function formatPublicationDate(date) {
  return publicationDateFormat.format(new Date(date));
}

export function getBlogMetadata(markdown, folder) {
  const lines = markdown.split(/\r?\n/);
  const title = lines.find(line => line.startsWith("# "))?.slice(2).trim() || folder.replace(/-/g, " ");
  const excerpt = lines.find(line => line.trim() && !/^(#|!\[)/.test(line.trim()))?.trim().slice(0, 160)
    || "Read this article by Bishal Bashyal.";
  const image = markdown.match(/!\[.*?\]\((.*?)\)/)?.[1];
  const thumbnail = image
    ? new URL(image, `${siteUrl}/markdowns/${encodeURIComponent(folder)}/`).href
    : defaultBlogImage;

  const prose = markdown
    .replace(/^```[^\n]*\n[\s\S]*?^```[ \t]*$/gm, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  const wordCount = prose.match(/[\p{L}\p{N}]+(?:['’–-][\p{L}\p{N}]+)*/gu)?.length ?? 0;

  return {
    title,
    excerpt,
    thumbnail,
    publishedDate: publicationDates[folder],
    readingMinutes: Math.max(1, Math.ceil(wordCount / 200)),
  };
}

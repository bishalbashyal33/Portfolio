export const siteUrl = "https://bishalb.com";
export const siteName = "Bishal Bashyal Portfolio";

export const defaultBlogImage = `${siteUrl}/assets/personart.png`;

export function getBlogMetadata(markdown, folder) {
  const lines = markdown.split(/\r?\n/);
  const title = lines.find(line => line.startsWith("# "))?.slice(2).trim() || folder.replace(/-/g, " ");
  const excerpt = lines.find(line => line.trim() && !/^(#|!\[)/.test(line.trim()))?.trim().slice(0, 160)
    || "Read this article by Bishal Bashyal.";
  const image = markdown.match(/!\[.*?\]\((.*?)\)/)?.[1];
  const thumbnail = image
    ? new URL(image, `${siteUrl}/markdowns/${encodeURIComponent(folder)}/`).href
    : defaultBlogImage;

  return { title, excerpt, thumbnail };
}

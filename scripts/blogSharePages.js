import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { defaultBlogImage, getBlogMetadata, siteName, siteUrl } from "../src/utils/blogMetadata.js";

const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const escapeHtml = value => value.replace(/[&<>"]/g, character => htmlEntities[character]);

export default function blogSharePages() {
  let publicDir;

  return {
    name: "blog-share-pages",
    apply: "build",
    configResolved(config) {
      publicDir = config.publicDir;
    },
    generateBundle: {
      order: "post",
      async handler(_, bundle) {
        const template = bundle["index.html"].source;
        const markdownDir = join(publicDir, "markdowns");
        const folders = await readdir(markdownDir, { withFileTypes: true });

        for (const folder of folders.filter(entry => entry.isDirectory()).map(entry => entry.name)) {
          const markdown = await readFile(join(markdownDir, folder, "mapreduce.md"), "utf8").catch(error => {
            if (error.code === "ENOENT") return null;
            throw error;
          });
          if (markdown === null) continue;

          const { title, excerpt, thumbnail, publishedDate } = getBlogMetadata(markdown, folder);
          const fullTitle = `${title} | ${siteName}`;
          const url = `${siteUrl}/blog/${encodeURIComponent(folder)}`;
          const imageUrl = new URL(thumbnail);
          const image = imageUrl.origin === siteUrl &&
            !existsSync(join(publicDir, decodeURIComponent(imageUrl.pathname)))
            ? defaultBlogImage
            : thumbnail;
          const socialFields = { url, title: fullTitle, description: excerpt, image };
          const meta = (attribute, name, content) =>
            `<meta data-rh="true" ${attribute}="${name}" content="${escapeHtml(content)}" />`;
          const tags = [
            `<title data-rh="true">${escapeHtml(fullTitle)}</title>`,
            meta("name", "description", excerpt),
            `<link data-rh="true" rel="canonical" href="${escapeHtml(url)}" />`,
            meta("property", "og:type", "article"),
            ...(publishedDate ? [meta("property", "article:published_time", publishedDate)] : []),
            meta("property", "og:site_name", siteName),
            meta("name", "twitter:card", "summary_large_image"),
            ...Object.entries(socialFields).flatMap(([name, value]) => [
              meta("property", `og:${name}`, value),
              meta("name", `twitter:${name}`, value),
            ]),
          ];

          this.emitFile({
            type: "asset",
            fileName: `blog/${folder}.html`,
            source: template.replace(/<!-- Primary Meta Tags -->[\s\S]*?<!-- End Primary Meta Tags -->/, () => `${tags.join("\n  ")}\n`),
          });
        }
      },
    },
  };
}

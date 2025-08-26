import fs from "fs";
import path from "path";
import matter from "gray-matter";

const folder = path.resolve("src/tips");

export interface getTipsRet {
  slug: string;
  data: { [key: string]: any };
  content: string;
}

export const getTips = (): getTipsRet[] =>
  fs
    .readdirSync(folder)
    .filter((slug) => fs.existsSync(path.join(folder, slug, "index.md")))
    .map((slug) => {
      const filePath = path.join(folder, slug, "index.md");
      const buf = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(buf);
      return { slug, data, content };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));

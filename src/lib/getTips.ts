import fs from "fs";
import path from "path";
import matter from "gray-matter";

const re = new RegExp("^[a-z]/[a-z][a-z]/(.+)/index.md$");
const tipsFolder = path.resolve("src/tips");
const contentFolder = path.resolve("src/content");

export interface getTipsRet {
  slug: string;
  data: { [key: string]: any };
  content: string;
}

export const getTips = (): getTipsRet[] => {
  if (fs.existsSync(contentFolder)) {
    return fs
      .readdirSync(contentFolder, { recursive: true })
      .filter((entry) => {
        return !!re.exec(entry as string);
      })
      .map((entry) => {
        const m = re.exec(entry as string);
        if (!m) return { slug: "", data: {}, content: "" }; // never happens because of the previous filter()
        // m[0] = p/py/python-subprocess/index.md
        // m[1] = python-subprocess
        const filePath = path.join(contentFolder, m[0]);
        const slug = m[1];
        const data = { title: slug };
        const content = fs.readFileSync(filePath, "utf-8");
        return { slug, data, content };
      })
      .sort((a, b) => a.slug.localeCompare(b.slug));
  }
  return fs
    .readdirSync(tipsFolder)
    .filter((slug) => fs.existsSync(path.join(tipsFolder, slug, "index.md")))
    .map((slug) => {
      const filePath = path.join(tipsFolder, slug, "index.md");
      const buf = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(buf);
      return { slug, data, content };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
};

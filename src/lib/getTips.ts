import fs from "fs";
import path from "path";

const cmsFolder = (): string => {
  const flist = [
    path.resolve(path.join("src", "cms")),
    path.resolve(path.join("..", "cms")),
  ].filter((f) => fs.existsSync(f));
  if (flist.length < 1) throw "cmsFolder(): cannot find valid CMS folder";
  return flist[0];
};

export interface getTipListRet {
  link: string;
  title: string;
}

export const getTipList = (): getTipListRet[] => {
  const folder = cmsFolder();
  const fname = path.join(folder, "public", "index.json");
  const buf = fs.readFileSync(fname, "utf8");
  const js = JSON.parse(buf);
  if (!js.pages) throw "getTipList(): cannot find pages attribute";
  return js.pages.filter((p: getTipListRet) => p.title !== "");
};

export const getTip = (slug: string): string => {
  const folder = cmsFolder();
  const fname = path.join(folder, "public", "tips", slug, "index.html");
  if (!fs.existsSync(fname)) throw "getTip(): cannot find " + slug;
  return fs.readFileSync(fname, "utf-8");
};

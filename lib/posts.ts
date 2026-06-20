import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkBreaks from "remark-breaks";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostCategory = "literature" | "research";
const CATEGORIES: PostCategory[] = ["literature", "research"];

export interface PostMeta {
  slug: string;
  category: PostCategory;
  title: string;
  date: string;
}

function categoryDir(category: PostCategory) {
  return path.join(postsDirectory, category);
}

export function getAllPosts(category?: PostCategory): PostMeta[] {
  const categories = category ? [category] : CATEGORIES;

  const posts = categories.flatMap((cat) => {
    const dir = categoryDir(cat);
    if (!fs.existsSync(dir)) return [];
    const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        category: cat,
        title: data.title || slug,
        date: data.date || "",
      };
    });
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(category: PostCategory, slug: string) {
  const fullPath = path.join(categoryDir(category), `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkBreaks).use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    category,
    title: data.title || slug,
    date: data.date || "",
    contentHtml,
  };
}

export function getAllSlugs(): { category: PostCategory; slug: string }[] {
  return CATEGORIES.flatMap((cat) => {
    const dir = categoryDir(cat);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ category: cat, slug: f.replace(/\.md$/, "") }));
  });
}

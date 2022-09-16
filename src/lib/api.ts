import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { EpisodeType } from "../types";
import { compareAsc, compareDesc } from "date-fns";

const postsDirectory = join(process.cwd(), "src/episodes");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = []
): EpisodeType {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    date: string;
    [key: string]: string;
  };

  const items: Items = {
    date: data.date ? data.date.toString() : new Date().toString(),
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): EpisodeType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      compareDesc(new Date(post1.date), new Date(post2.date))
    );
  return posts;
}

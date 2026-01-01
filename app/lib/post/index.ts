import { Post } from "_types/post";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const posts = [
  {
    id: "post-1",
    author: "author-1",
    title: "title-1",
    excerpt: "excerpt-1",
    content: "content-1",
    createdAt: "2026-01-01",
  },
  {
    id: "post-2",
    author: "author-2",
    title: "title-2",
    excerpt: "excerpt-2",
    content: "content-2",
    createdAt: "2026-01-01",
  },
  {
    id: "post-3",
    author: "author-3",
    title: "title-3",
    excerpt: "excerpt-3",
    content: "content-3",
    createdAt: "2026-01-01",
  },
];

export async function getPosts(): Promise<Post[]> {
  await sleep(1000);
  return posts;
}

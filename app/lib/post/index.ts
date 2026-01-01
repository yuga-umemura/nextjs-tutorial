import { Post } from "_types/post";
import { posts } from "./constants";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getPosts(): Promise<Post[]> {
  await sleep(1000);
  return posts;
}

import Link from "next/link";
import { getPosts } from "@/lib/post";

export default async function Post() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="underline text-blue-500">
          <Link href={`/blog/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

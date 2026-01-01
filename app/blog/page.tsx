import { getPosts } from "@/lib/post";
import Post from "@/ui/Post";

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} />
      ))}
    </ul>
  );
}

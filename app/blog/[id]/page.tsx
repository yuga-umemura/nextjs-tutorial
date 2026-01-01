import { getPosts } from "@/lib/post";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ id: post.id }));
}

export default async function Page(props: PageProps<"/blog/[id]">) {
  const { id } = await props.params;

  return <h1>Blog post: {id}</h1>;
}

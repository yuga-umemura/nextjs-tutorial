import { getPost } from "@/lib/post";
import LikeButton from "@/ui/client/LikeButton";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        <div className="py-4">
          <LikeButton likes={post.likes} />
        </div>
      </main>
    </div>
  );
}

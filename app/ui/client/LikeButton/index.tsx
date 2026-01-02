"use client";
import { useState } from "react";

export default function LikeButton({ likes }: { likes: number }) {
  const [count, setCount] = useState(likes);

  const handleClick = () => setCount(count + 1);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-sm hover:underline inline-flex items-center border border-gray-300 rounded-full px-3 py-1 text-gray-700 gap-1"
    >
      👍 {count}
    </button>
  );
}

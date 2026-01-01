export default function LoadingSkeleton() {
  return (
    <article className="animate-pulse space-y-4">
      {/* title */}
      <div className="h-8 w-3/4 rounded bg-gray-200" />

      {/* meta */}
      <div className="h-4 w-1/4 rounded bg-gray-200" />

      {/* content lines */}
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-4/6 rounded bg-gray-200" />
      </div>
    </article>
  );
}

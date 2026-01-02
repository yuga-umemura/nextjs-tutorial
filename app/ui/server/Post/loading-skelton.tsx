type Props = {
  count?: number;
};

export default function LoadingSkeleton({ count = 3 }: Props) {
  return (
    <ul className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <div
            className="
              h-5
              w-48
              rounded
              bg-gray-200
              animate-pulse
            "
          />
        </li>
      ))}
    </ul>
  );
}

"use client";

import { useState } from "react";
import { Carousel } from "acme-carousel";

const items = [
  { src: "/images/dog.jpg", alt: "dog" },
  { src: "/images/cat.jpg", alt: "cat" },
  { src: "/images/duck.jpg", alt: "duck" },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>
      {/* Works, since Carousel is used withih a Client Component */}
      {isOpen && <Carousel items={items} />}
    </div>
  );
}

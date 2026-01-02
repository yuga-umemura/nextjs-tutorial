"use client";

import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Modal(Client Component)</h1>
      {children}
    </div>
  );
}

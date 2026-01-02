"use client";

import { ThemeContext } from "./context";
import React from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}

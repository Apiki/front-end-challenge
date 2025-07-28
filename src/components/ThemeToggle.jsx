"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MyButton from "./MyButton";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <MyButton
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </MyButton>
  );
}

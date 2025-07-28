"use client";

import Image from "next/image";
import logoDark from "@/../public/logoDark.svg";
import logoLight from "@/../public/logoLight.png";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LogoTheme() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const logoSrc = currentTheme === "dark" ? logoDark : logoLight;

  return (
    <Image
      priority
      loading="eager"
      width={100}
      src={logoSrc}
      title="logo do blog da Apiki"
      alt="logo do blog da Apiki"
    />
  );
}

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ModeButton from "./ModeButton";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" font-sans text-sm z-100 gap-x-1 ring rounded dark:ring-blackColor px-1 flex">
      <ModeButton
        disabled={theme === "dark"}
        moodValue="dark"
        onClick={toggle}
      />
      <ModeButton
        disabled={theme === "light"}
        moodValue="light"
        onClick={toggle}
      />
    </div>
  );
}

"use client";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import ModeButton from "./ModeButton";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [LightDisabled, setLightDisabled] = useState<boolean>(false);
  const [DarkDisabled, setDarkDisabled] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      setLightDisabled(false);
      setDarkDisabled(true);
    } else {
      setLightDisabled(true);
      setDarkDisabled(false);
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div className="font-sans text-sm z-100 gap-x-1 ring rounded dark:ring-blackColor px-1 flex">
      <ModeButton disabled={DarkDisabled} moodValue="dark" onClick={toggle} />
      <ModeButton disabled={LightDisabled} moodValue="light" onClick={toggle} />
    </div>
  );
}

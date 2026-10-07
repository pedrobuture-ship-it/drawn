import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const systemQuery = "(prefers-color-scheme: dark)";
const isTheme = (value: unknown): value is Theme => value === "light" || value === "dark";

function savedTheme(): Theme | null {
  try {
    const value = localStorage.getItem("theme");
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const manual = useRef(savedTheme() !== null);

  useEffect(() => {
    const media = window.matchMedia(systemQuery);
    const followSystem = () => {
      if (!manual.current) setTheme(media.matches ? "dark" : "light");
    };
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== "theme" && event.key !== null) return;
      manual.current = isTheme(event.newValue);
      setTheme(isTheme(event.newValue) ? event.newValue : media.matches ? "dark" : "light");
    };
    media.addEventListener("change", followSystem);
    window.addEventListener("storage", syncStorage);
    followSystem();
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#050B10" : "#f2efe8",
    );
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    manual.current = true;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Keep the visitor's choice for this page even when persistence is blocked.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}

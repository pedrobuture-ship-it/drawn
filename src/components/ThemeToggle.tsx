import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Alternar tema"
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Tema escuro — mudar para claro" : "Tema claro — mudar para escuro"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </button>
  );
}

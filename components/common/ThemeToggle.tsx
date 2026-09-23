"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Eclipse-style light/dark toggle. Persists to localStorage; pairs with the
 *  no-flash script in the layout so there's no white flash on load. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`focus-ring relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-medical-blue transition-colors hover:bg-brand-bg dark:text-accent-blue ${className}`}
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}

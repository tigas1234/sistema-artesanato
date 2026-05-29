"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export default function TopbarMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-20">
      <h1 className="text-4xl font-extrabold">
        <Link href="/">
          Cassis Uniformes
        </Link>
      </h1>

      <nav className="flex items-center gap-4">
        <Link href="/plans">
          Planos
        </Link>

        <Link href="/resources">
          Recursos
        </Link>

        <Link
          href="/login"
          className="border px-4 py-2 rounded-md"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Cadastro
        </Link>

        <Button
          variant="outline"
          size="icon"
          onClick={handleToggleTheme}
        >
          <Sun className="h-5 w-5 dark:hidden" />

          <Moon className="hidden dark:block h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
}
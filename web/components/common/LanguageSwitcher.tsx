"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppShell } from "@/context/AppShellContext";
import type { AppLanguage } from "@/context/app-shell-storage";
import { apiFetch, apiUrl } from "@/lib/api";

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export function LanguageSwitcher({
  compact = false,
  className = "",
}: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const { language, setLanguage } = useAppShell();

  const changeLanguage = (next: AppLanguage) => {
    if (next === language) return;
    setLanguage(next);
    void apiFetch(apiUrl("/api/v1/settings/ui"), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: next }),
      skipAuthRedirect: true,
    }).catch(() => {
      // The browser preference remains useful when the backend is offline.
    });
  };

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => changeLanguage(language === "zh" ? "en" : "zh")}
        title={t("Switch language") as string}
        aria-label={t("Switch language") as string}
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-colors hover:bg-[var(--background)]/60 hover:text-[var(--foreground)] ${className}`}
      >
        <Languages size={16} strokeWidth={1.7} />
      </button>
    );
  }

  return (
    <div className={`flex items-center justify-between gap-3 px-3 py-1.5 ${className}`}>
      <span className="flex min-w-0 items-center gap-2 text-[11.5px] text-[var(--muted-foreground)]">
        <Languages size={14} strokeWidth={1.7} />
        <span>{t("Language")}</span>
      </span>
      <div
        className="flex shrink-0 rounded-md bg-[var(--background)]/45 p-0.5"
        role="group"
        aria-label={t("Interface language") as string}
      >
        {(["en", "zh"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => changeLanguage(value)}
            aria-pressed={language === value}
            className={`rounded px-2 py-1 text-[10px] font-medium transition-colors ${
              language === value
                ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {value === "en" ? "EN" : "中"}
          </button>
        ))}
      </div>
    </div>
  );
}

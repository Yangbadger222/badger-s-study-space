import { BookOpenCheck } from "lucide-react";

interface BadgerMarkProps {
  compact?: boolean;
  className?: string;
}

/** The product mark used across the study workspace shell. */
export function BadgerMark({ compact = false, className = "" }: BadgerMarkProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm ${
          compact ? "h-9 w-9" : "h-8 w-8"
        }`}
      >
        <BookOpenCheck size={compact ? 19 : 17} strokeWidth={1.8} />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[12px] font-semibold tracking-[0.16em] text-[var(--foreground)]">
            BADGER
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.14em] text-[var(--muted-foreground)]">
            STUDY DESK
          </span>
        </span>
      )}
    </span>
  );
}

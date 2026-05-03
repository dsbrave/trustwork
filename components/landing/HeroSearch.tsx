"use client";

import { Search } from "lucide-react";
import { useRouter } from "@/navigation";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  tabJobs: string;
  tabTalent: string;
  placeholderJobs: string;
  placeholderTalent: string;
  search: string;
  /** Light abstract hero: soft borders, muted greens/teals */
  variant?: "default" | "immersive";
};

export function HeroSearch({
  tabJobs,
  tabTalent,
  placeholderJobs,
  placeholderTalent,
  search,
  variant = "default",
}: Props) {
  const [mode, setMode] = useState<"jobs" | "talent">("jobs");
  const [q, setQ] = useState("");
  const router = useRouter();

  const placeholder = mode === "jobs" ? placeholderJobs : placeholderTalent;

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (q.trim()) params.set("q", q.trim());
      params.set("mode", mode);
      router.push(`/jobs?${params.toString()}`);
    },
    [q, mode, router],
  );

  const immersive = variant === "immersive";

  return (
    <div className={cn("w-full", immersive ? "max-w-none" : "max-w-3xl")}>
      <div
        className={cn(
          "mb-3 inline-flex max-w-full rounded-full p-1 sm:mb-4",
          immersive
            ? "border border-slate-200/90 bg-white/60 shadow-sm backdrop-blur-sm"
            : "rounded-upwork border border-black/[0.08] bg-white p-1 shadow-search",
        )}
        role="tablist"
        aria-label="Search mode"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "jobs"}
          onClick={() => setMode("jobs")}
          className={cn(
            "min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition sm:px-4 sm:text-sm",
            immersive
              ? mode === "jobs"
                ? "bg-white text-[#1c2620] shadow-sm ring-1 ring-slate-200/80"
                : "text-[#475569] hover:bg-white/70"
              : mode === "jobs"
                ? "bg-[#1c2620] text-white"
                : "text-[#001e00]/70 hover:bg-black/[0.04]",
          )}
        >
          {tabJobs}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "talent"}
          onClick={() => setMode("talent")}
          className={cn(
            "min-h-[44px] min-w-0 shrink whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition sm:px-4 sm:text-sm",
            immersive
              ? mode === "talent"
                ? "bg-white text-[#1c2620] shadow-sm ring-1 ring-slate-200/80"
                : "text-[#475569] hover:bg-white/70"
              : mode === "talent"
                ? "bg-[#1c2620] text-white"
                : "text-[#001e00]/70 hover:bg-black/[0.04]",
          )}
        >
          {tabTalent}
        </button>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-3"
      >
        <div className={cn("relative min-h-[48px] flex-1 sm:min-h-[52px]", immersive && "sm:min-w-0")}>
          {!immersive && (
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#001e00]/40"
              aria-hidden
            />
          )}
          <input
            type="search"
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(
              "h-full min-h-[48px] w-full text-[15px] outline-none transition sm:min-h-[52px]",
              immersive
                ? "rounded-full border border-slate-200/90 bg-white px-4 text-[#1c2620] shadow-inner ring-1 ring-white placeholder:text-slate-400 focus:border-teal-600/25 focus:ring-2 focus:ring-teal-600/20 sm:pl-5"
                : "rounded-upwork border border-black/[0.12] bg-white pl-12 pr-4 text-[#001e00] shadow-search ring-au-gum/30 placeholder:text-[#5e6d64]/80 focus:border-au-gumbright focus:ring-2",
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 sm:min-h-[52px] sm:px-8",
            immersive
              ? "bg-[#157f3c] text-white shadow-sm hover:bg-[#136e34] focus-visible:ring-teal-700/40 focus-visible:ring-offset-[#f4f6f5]"
              : "rounded-upwork bg-au-gumbright text-white shadow-sm hover:bg-[#0e7700] focus-visible:ring-au-gum focus-visible:ring-offset-2",
          )}
        >
          <Search
            className={cn("h-[1.125rem] w-[1.125rem] opacity-90 sm:h-5 sm:w-5", !immersive && "hidden")}
            aria-hidden
          />
          <span>{search}</span>
        </button>
      </form>
    </div>
  );
}

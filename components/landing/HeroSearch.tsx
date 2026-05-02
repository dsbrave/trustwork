"use client";

import { Search } from "lucide-react";
import { useRouter } from "@/navigation";
import { useCallback, useState } from "react";

type Props = {
  tabJobs: string;
  tabTalent: string;
  placeholderJobs: string;
  placeholderTalent: string;
  search: string;
};

export function HeroSearch({
  tabJobs,
  tabTalent,
  placeholderJobs,
  placeholderTalent,
  search,
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

  return (
    <div className="w-full max-w-3xl">
      <div
        className="mb-3 inline-flex rounded-upwork border border-black/[0.08] bg-white p-1 shadow-search"
        role="tablist"
        aria-label="Search mode"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "jobs"}
          onClick={() => setMode("jobs")}
          className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            mode === "jobs"
              ? "bg-[#001e00] text-white"
              : "text-[#001e00]/70 hover:bg-black/[0.04]"
          }`}
        >
          {tabJobs}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "talent"}
          onClick={() => setMode("talent")}
          className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
            mode === "talent"
              ? "bg-[#001e00] text-white"
              : "text-[#001e00]/70 hover:bg-black/[0.04]"
          }`}
        >
          {tabTalent}
        </button>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#001e00]/40"
            aria-hidden
          />
          <input
            type="search"
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            autoComplete="off"
            className="h-[52px] w-full rounded-upwork border border-black/[0.12] bg-white pl-12 pr-4 text-[15px] text-[#001e00] shadow-search outline-none ring-au-gum/30 placeholder:text-[#5e6d64] focus:border-au-gumbright focus:ring-2"
          />
        </div>
        <button
          type="submit"
          className="h-[52px] shrink-0 rounded-upwork bg-au-gumbright px-10 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0e7700] focus-visible:outline focus-visible:ring-2 focus-visible:ring-au-gum focus-visible:ring-offset-2"
        >
          {search}
        </button>
      </form>
    </div>
  );
}

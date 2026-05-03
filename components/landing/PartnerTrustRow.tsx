import { cn } from "@/lib/utils";

type Variant = "hero" | "section";

/**
 * Partner strip matching the TrustWork layout: text row + TAFE pill + NATI underline + exchange line.
 * Uses markup instead of rasterised logos so the UI matches design without relying on cached SVG assets.
 */
export function PartnerTrustRow({
  label,
  exchangeLine,
  variant = "hero",
  className,
}: {
  label: string;
  exchangeLine: string;
  variant?: Variant;
  className?: string;
}) {
  const isSection = variant === "section";

  return (
    <div className={cn(className)}>
      <p
        className={cn(
          "font-bold uppercase tracking-[0.18em] text-slate-400",
          isSection ? "text-[11px] sm:text-center" : "text-[10px]",
        )}
      >
        {label}
      </p>
      <div
        className={cn(
          "mt-3 flex flex-wrap items-center gap-x-2 gap-y-2.5 sm:gap-x-3",
          isSection && "sm:justify-center",
        )}
      >
        <a
          href="https://www.lumx.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-semibold lowercase tracking-tight text-slate-900 transition hover:text-slate-700 sm:text-base"
        >
          lumx
        </a>

        <span className="select-none text-slate-300 sm:text-sm" aria-hidden>
          ·
        </span>

        <a
          href="https://www.tafensw.edu.au"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md bg-[#374151] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm transition hover:bg-slate-800 sm:text-[11px]"
        >
          TAFE
        </a>

        <span className="select-none text-slate-300 sm:text-sm" aria-hidden>
          ·
        </span>

        <a
          href="https://www.nsw.gov.au/education-and-training"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-[3px] border-slate-700 pb-0.5 text-[13px] font-extrabold uppercase tracking-tight text-slate-800 transition hover:border-slate-900 hover:text-slate-950 sm:text-sm"
        >
          NATI
        </a>

        <span className="select-none text-slate-300 sm:text-sm" aria-hidden>
          ·
        </span>

        <a
          href="https://www.studyinaustralia.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-[min(100%,20rem)] items-center gap-2 text-left text-[11px] leading-snug text-slate-500 transition hover:text-slate-700 sm:max-w-none sm:text-xs"
        >
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-400 text-[12px] font-light text-slate-500"
            aria-hidden
          >
            +
          </span>
          <span>{exchangeLine}</span>
        </a>
      </div>
    </div>
  );
}

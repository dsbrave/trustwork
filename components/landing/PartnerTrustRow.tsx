import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "hero" | "section";

export type PartnerLogoAlts = {
  lumx: string;
  tafe: string;
  naati: string;
  /** Alt text for `/partners/student-exchange.webp` (not shown as visible copy). */
  exchange: string;
};

/**
 * Partner strip with official raster logos from `/public/partners/*.png|webp`.
 */
export function PartnerTrustRow({
  label,
  variant = "hero",
  className,
  logoAlts,
}: {
  label: string;
  variant?: Variant;
  className?: string;
  logoAlts: PartnerLogoAlts;
}) {
  const isSection = variant === "section";

  /** Knocks out baked-in white boxes on raster logos when placed on light grey surfaces. */
  const blend = "mix-blend-multiply";

  const imgWrap =
    "inline-flex min-h-[2.75rem] shrink-0 items-center justify-center opacity-[0.94] transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:min-h-[3.25rem]";

  /** Wordmarks / horizontal marks — slightly taller target height. */
  const clsWide = cn(
    "h-11 w-auto max-h-12 max-w-[min(52vw,16rem)] object-contain object-center sm:h-12 sm:max-h-[3.35rem] sm:max-w-[17rem]",
    blend,
  );

  /** Circular / seal marks — a touch shorter so they don’t dominate the row. */
  const clsSeal = cn(
    "h-10 w-auto max-h-11 max-w-[min(40vw,11rem)] object-contain object-center sm:h-11 sm:max-h-12 sm:max-w-[12rem]",
    blend,
  );

  const rowClass = cn(
    "flex flex-wrap items-center gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-3.5",
    isSection && "sm:justify-center",
  );

  const logos = (
    <>
      <a
        href="https://www.lumx.io"
        target="_blank"
        rel="noopener noreferrer"
        className={imgWrap}
      >
        <Image
          src="/partners/lumx.png"
          alt={logoAlts.lumx}
          width={180}
          height={44}
          className={clsWide}
        />
      </a>

      <span className="select-none text-slate-300 sm:text-base" aria-hidden>
        ·
      </span>

      <a
        href="https://www.tafensw.edu.au"
        target="_blank"
        rel="noopener noreferrer"
        className={imgWrap}
      >
        <Image
          src="/partners/tafe.png"
          alt={logoAlts.tafe}
          width={160}
          height={48}
          className={clsSeal}
        />
      </a>

      <span className="select-none text-slate-300 sm:text-base" aria-hidden>
        ·
      </span>

      <a
        href="https://www.naati.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={imgWrap}
      >
        <Image
          src="/partners/naati.png"
          alt={logoAlts.naati}
          width={160}
          height={48}
          className={clsSeal}
        />
      </a>

      <span className="select-none text-slate-300 sm:text-base" aria-hidden>
        ·
      </span>

      <a
        href="https://www.studyinaustralia.gov.au"
        target="_blank"
        rel="noopener noreferrer"
        className={imgWrap}
      >
        <Image
          src="/partners/student-exchange.webp"
          alt={logoAlts.exchange}
          width={200}
          height={48}
          className={clsWide}
        />
      </a>
    </>
  );

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
      {isSection ? (
        <div className={cn("mt-3", rowClass)}>{logos}</div>
      ) : (
        <div className="mt-3 rounded-xl bg-[#eff1ee] px-3 py-3 ring-1 ring-slate-200/45 sm:px-4 sm:py-3.5">
          <div className={rowClass}>{logos}</div>
        </div>
      )}
    </div>
  );
}

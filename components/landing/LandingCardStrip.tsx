"use client";

import {
  createContext,
  useContext,
  useId,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Cols = 2 | 3 | 4 | 5 | 10;

type StripLayout = "scroll" | "grid";

const StripLayoutContext = createContext<StripLayout>("scroll");

const desktopGrid: Record<Cols, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-3 lg:grid-cols-5",
  10: "md:grid-cols-3 lg:grid-cols-5",
};

const scrollShell = (desktopCols: Cols) =>
  cn(
    "flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-3 [-webkit-overflow-scrolling:touch] touch-pan-x",
    "motion-reduce:snap-none motion-reduce:scroll-auto",
    "scroll-pl-1 scroll-pr-8 sm:scroll-pr-10",
    "md:grid md:gap-5 md:overflow-visible md:pb-0 md:snap-none md:touch-auto md:scroll-pl-0 md:scroll-pr-0",
    desktopGrid[desktopCols],
  );

/** Full grid from smallest breakpoint (e.g. job categories on mobile). */
const gridShellAll = (desktopCols: Cols): string => {
  switch (desktopCols) {
    case 10:
      return "grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:grid-cols-5 lg:gap-4";
    case 4:
      return "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5";
    case 5:
      return "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5";
    case 3:
      return "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5";
    case 2:
      return "grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5";
    default:
      return scrollShell(desktopCols);
  }
};

const shellFor = (desktopCols: Cols, mobileLayout: StripLayout) =>
  mobileLayout === "grid" ? gridShellAll(desktopCols) : scrollShell(desktopCols);

export type LandingCardStripProps = {
  ariaLabel: string;
  hint: string;
  desktopCols: Cols;
  /** Small screens: horizontal strip (default) or grid like the earlier landing layout. */
  mobileLayout?: StripLayout;
  /** Semantic list — use with `<LandingCardStripItem as="li">` children */
  asList?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function LandingCardStrip({
  ariaLabel,
  hint,
  desktopCols,
  mobileLayout = "scroll",
  asList = false,
  className,
  innerClassName,
  children,
}: LandingCardStripProps) {
  const hintId = useId();
  const shell = cn(shellFor(desktopCols, mobileLayout), innerClassName);

  const interactiveClasses = cn(
    shell,
    mobileLayout === "grid"
      ? "outline-none focus-visible:ring-2 focus-visible:ring-[#00843D] focus-visible:ring-offset-2 rounded-md"
      : "outline-none focus-visible:ring-2 focus-visible:ring-[#00843D] focus-visible:ring-offset-2 rounded-md md:rounded-none md:focus-visible:ring-0",
  );

  return (
    <StripLayoutContext.Provider value={mobileLayout}>
      <div className={cn("relative", className)}>
        <p id={hintId} className="sr-only">
          {hint}
        </p>
        {asList ? (
          <ul
            aria-label={ariaLabel}
            aria-describedby={hintId}
            tabIndex={0}
            className={cn(interactiveClasses, "m-0 list-none p-0")}
          >
            {children}
          </ul>
        ) : (
          <div
            role="region"
            aria-label={ariaLabel}
            aria-describedby={hintId}
            tabIndex={0}
            className={interactiveClasses}
          >
            {children}
          </div>
        )}
      </div>
    </StripLayoutContext.Provider>
  );
}

type ItemProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function LandingCardStripItem({ as: Tag = "div", className, children }: ItemProps) {
  const mobileLayout = useContext(StripLayoutContext);
  return (
    <Tag
      className={cn(
        mobileLayout === "grid"
          ? "min-w-0"
          : "min-w-0 snap-start shrink-0 basis-[min(88vw,380px)] md:basis-auto md:shrink md:snap-none",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

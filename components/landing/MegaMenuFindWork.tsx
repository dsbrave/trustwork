"use client";

import { ChevronDown } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROFESSION_MEGA_MENU } from "@/lib/mega-menu-professions";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export function MegaMenuFindWork() {
  const t = useTranslations("MegaMenu");
  const tLanding = useTranslations("Landing");
  const messages = useMessages();
  const mm = messages.MegaMenu as Record<string, string>;
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    window.dispatchEvent(new CustomEvent("landing-megamenu-open", { detail: { source: "find" } }));
    setOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 90);
  }, []);

  const closeNow = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
  }, []);

  useEffect(() => {
    const onPeerOpen = (evt: Event) => {
      const detail = (evt as CustomEvent<{ source?: string }>).detail;
      if (detail?.source !== "find") {
        closeNow();
      }
    };
    window.addEventListener("landing-megamenu-open", onPeerOpen as EventListener);
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      window.removeEventListener("landing-megamenu-open", onPeerOpen as EventListener);
    };
  }, [closeNow]);

  return (
    <>
      {/* Mobile: flat link (mega menu is desktop-first) */}
      <Link
        href="/jobs"
        className="rounded-md px-2 py-2 text-[14px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00] lg:hidden"
      >
        {tLanding("navFindWork")}
      </Link>

      {/* Desktop: mega menu — single hover zone (fixes clipped dropdown + gap crossing) */}
      <div
        className="relative z-[110] hidden lg:block"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onFocus={openMenu}
          className={cn(
            "flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium transition-colors xl:gap-1 xl:px-2.5 xl:text-[14px]",
            open
              ? "text-au-gumbright"
              : "text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]",
          )}
        >
          {tLanding("navFindWork")}
          <ChevronDown
            className={cn("h-4 w-4 shrink-0 transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>

        {open && (
          <>
            {/* Wide invisible bridge so cursor can reach panel without closing */}
            <div className="absolute left-0 top-full z-[200] h-10 w-full min-w-[200px]" aria-hidden />
            <div className="absolute left-0 top-full z-[201] pt-2">
              <div
                className="w-[min(calc(100vw-3rem),920px)] rounded-lg border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(0,30,0,0.12)]"
                role="menu"
              >
                <div className="grid grid-cols-4 gap-x-10 gap-y-10 p-8 lg:gap-x-8">
                  {PROFESSION_MEGA_MENU.map((column, ci) => (
                    <div key={ci} className="flex flex-col gap-10">
                      {column.groups.map((group) => (
                        <div key={group.titleKey}>
                          <h3 className="text-[15px] font-semibold text-[#001e00]">
                            {mm[group.titleKey] ?? group.titleKey}
                          </h3>
                          <ul className="mt-3 space-y-2.5">
                            {group.links.map((link) => (
                              <li key={link.labelKey}>
                                <Link
                                  href={`/jobs?q=${encodeURIComponent(link.q)}`}
                                  className="block text-[14px] leading-snug text-[#001e00]/85 transition hover:text-au-gumbright"
                                  onClick={() => setOpen(false)}
                                >
                                  {mm[link.labelKey] ?? link.labelKey}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black/[0.06] px-8 py-4">
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-1 text-[14px] font-semibold text-au-gumbright hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {t("exploreAll")}
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/auth/signup?role=employer"
                    className="inline-flex items-center gap-1 text-[14px] font-semibold text-au-gumbright hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {t("postShift")}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

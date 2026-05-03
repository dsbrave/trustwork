import {
  Accessibility,
  ArrowRight,
  Baby,
  Briefcase,
  Check,
  ChefHat,
  CircleDollarSign,
  Globe2,
  HardHat,
  HeartHandshake,
  Laptop,
  Layers,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wallet,
  Warehouse,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LogoText } from "@/components/brand/LogoText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ImmigrationNewsItem } from "@/lib/immigration-news";
import { Link } from "@/navigation";
import { HeroAbstractBackdrop } from "./HeroAbstractBackdrop";
import { HeroSearch } from "./HeroSearch";
import { HighlightsSection } from "./HighlightsSection";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MegaMenuFindWork } from "./MegaMenuFindWork";
import { MegaMenuPostJob } from "./MegaMenuPostJob";
import { PartnerTrustRow } from "./PartnerTrustRow";

const newsCats = ["newsCategoryVisas", "newsCategoryWork", "newsCategoryRights"] as const;
const newsCatIcons = [Globe2, Briefcase, Scale] as const;
const pricingStarterFeatures = ["pricingPlanStarterF1", "pricingPlanStarterF2", "pricingPlanStarterF3"] as const;
const pricingPlusFeatures = ["pricingPlanPlusF1", "pricingPlanPlusF2", "pricingPlanPlusF3"] as const;

export async function LandingView({ news }: { news: ImmigrationNewsItem[] }) {
  const t = await getTranslations("Landing");
  const year = new Date().getFullYear();

  const categories = [
    { key: "catHospitality", slug: "hospitality", Icon: ChefHat },
    { key: "catConstruction", slug: "construction", Icon: HardHat },
    { key: "catCleaning", slug: "cleaning", Icon: Sparkles },
    { key: "catAgedcare", slug: "agedcare", Icon: HeartHandshake },
    { key: "catIt", slug: "it", Icon: Laptop },
    { key: "catRetail", slug: "retail", Icon: ShoppingBag },
    { key: "catWarehouse", slug: "warehouse", Icon: Warehouse },
    { key: "catDisability", slug: "disability", Icon: Accessibility },
    { key: "catChildcare", slug: "childcare", Icon: Baby },
    { key: "catSecurity", slug: "security", Icon: ShieldCheck },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      {/* ——— Top bar ——— */}
      <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
        <div className="mx-auto flex max-w-content items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 lg:gap-4 lg:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 lg:gap-5">
            <LogoText href="/" className="min-w-0 shrink-0" />
            <nav
              className="hidden min-w-0 items-center lg:flex"
              aria-label="Primary"
            >
              {/* overflow-visible so mega-menu dropdowns are not clipped */}
              <div className="flex flex-nowrap items-center gap-0.5 overflow-visible pr-0.5 xl:gap-1">
                <MegaMenuFindWork />
                <MegaMenuPostJob />
                <a
                  href="#loop"
                  className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium text-[#334155] hover:bg-slate-100 hover:text-[#1c2620] xl:px-2.5 xl:text-[14px]"
                >
                  {t("navWhy")}
                </a>
                <Link
                  href="/community"
                  className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium text-[#334155] hover:bg-slate-100 hover:text-[#1c2620] xl:px-2.5 xl:text-[14px]"
                >
                  {t("navCommunity")}
                </Link>
              </div>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <Link
              href="/auth/login"
              className="hidden whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-semibold text-au-ocean hover:underline sm:inline xl:text-[14px]"
            >
              {t("navLogin")}
            </Link>
            <Button variant="nav" size="sm" className="!h-9 shrink-0 px-3 text-[13px] sm:!h-10 sm:px-4 sm:text-[14px]" asChild>
              <Link href="/auth/signup">{t("navSignup")}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile link strip */}
        <div className="scrollbar-hide flex gap-1 overflow-x-auto border-t border-slate-100 bg-slate-50/90 px-3 py-2.5 [-webkit-overflow-scrolling:touch] lg:hidden">
          <Link href="/jobs" className="whitespace-nowrap rounded-md px-1.5 py-1 text-[13px] font-semibold text-[#0f766e] active:bg-slate-200/80">
            {t("navFindWork")}
          </Link>
          <span className="shrink-0 text-slate-300">·</span>
          <Link
            href="/auth/signup?role=employer"
            className="whitespace-nowrap rounded-md px-1.5 py-1 text-[13px] font-semibold text-[#0f766e] active:bg-slate-200/80"
          >
            {t("navPostJob")}
          </Link>
          <span className="shrink-0 text-slate-300">·</span>
          <a href="#loop" className="whitespace-nowrap rounded-md px-1.5 py-1 text-[13px] font-semibold text-[#0f766e] active:bg-slate-200/80">
            {t("navWhy")}
          </a>
          <span className="shrink-0 text-slate-300">·</span>
          <Link href="/community" className="whitespace-nowrap rounded-md px-1.5 py-1 text-[13px] font-semibold text-[#0f766e] active:bg-slate-200/80">
            {t("navCommunity")}
          </Link>
        </div>
      </header>

      <main>
        {/* ——— Hero (abstract, clean) ——— */}
        <section className="border-b border-slate-200/80 bg-[#fafafa]">
          <div className="mx-auto max-w-content px-4 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-6 lg:px-6 lg:pb-6 lg:pt-8">
            <div className="relative min-h-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.05)] sm:rounded-[1.75rem] lg:rounded-[2rem]">
              <HeroAbstractBackdrop />
              <div className="relative z-10 flex flex-col gap-8 px-5 py-10 sm:gap-10 sm:px-7 sm:py-12 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-10 lg:py-14 xl:gap-16 xl:px-14">
                <div className="max-w-xl flex-1 lg:max-w-[min(36rem,42%)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-800/75 sm:text-[11px]">
                    {t("heroEyebrow")}
                  </p>
                  <h1 className="mt-3 text-balance text-[28px] font-semibold leading-[1.12] tracking-tight text-[#1c2620] sm:mt-4 sm:text-[36px] lg:text-[44px] xl:text-[48px]">
                    {t("heroTitle")}
                  </h1>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:mt-5 sm:text-[16px] lg:text-[17px]">
                    {t("heroImmersiveLead")}
                  </p>
                </div>

                <div className="w-full max-w-full rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-md sm:p-6 lg:min-w-0 lg:flex-1 lg:max-w-none lg:shadow-md xl:p-7">
                  <HeroSearch
                    variant="immersive"
                    tabJobs={t("heroTabJobs")}
                    tabTalent={t("heroTabTalent")}
                    placeholderJobs={t("heroPlaceholderJobs")}
                    placeholderTalent={t("heroPlaceholderTalent")}
                    search={t("heroSearch")}
                  />
                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <PartnerTrustRow
                      variant="hero"
                      label={t("heroPartnersLabel")}
                      exchangeLine={t("heroPartnerExchangeLine")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-content px-4 pb-12 pt-8 sm:pb-14 sm:pt-10 lg:px-6 lg:pb-20 lg:pt-12">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f5f6f4] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-teal-400/12 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl"
                aria-hidden
              />
              <h2 className="relative font-[family-name:var(--font-outfit)] text-[24px] font-semibold tracking-tight text-[#001e00] sm:text-[28px] lg:text-[30px]">
                {t("trendingTitle")}
              </h2>
              <p className="relative mt-2 max-w-2xl text-[15px] leading-relaxed text-[#5e6d64]">{t("trendingSubtitle")}</p>
              <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {categories.map(({ key, slug, Icon }) => (
                  <Link
                    key={slug}
                    href={`/jobs?category=${slug}`}
                    className={cn(
                      "group flex min-h-[116px] flex-col justify-between rounded-[11px] border border-slate-200/95 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-200",
                      "hover:border-[#157f3c] hover:shadow-[0_8px_24px_rgba(21,127,60,0.08)]",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#157f3c]",
                    )}
                  >
                    <Icon
                      className="h-7 w-7 shrink-0 text-[#157f3c] opacity-[0.92] transition group-hover:opacity-100"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span className="text-left text-[14px] font-semibold leading-snug tracking-tight text-[#001e00] sm:text-[15px]">
                      {t(key)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HighlightsSection />

        {/* ——— Trust loop (fund → prove → pay) ——— */}
        <section
          id="loop"
          className="scroll-mt-24 border-b border-black/[0.06] bg-white py-14 lg:py-16"
        >
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-au-reef">{t("stackEyebrow")}</p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-[26px] font-semibold tracking-tight text-[#001e00] sm:text-[30px]">
                {t("stackTitle")}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5e6d64] sm:text-[16px]">{t("stackSubtitle")}</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {(
                [
                  { step: "01", titleKey: "stack1Title", descKey: "stack1Desc", Icon: Wallet },
                  { step: "02", titleKey: "stack2Title", descKey: "stack2Desc", Icon: Layers },
                  { step: "03", titleKey: "stack3Title", descKey: "stack3Desc", Icon: MapPin },
                  { step: "04", titleKey: "stack4Title", descKey: "stack4Desc", Icon: CircleDollarSign },
                ] as const
              ).map(({ step, titleKey, descKey, Icon }) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-black/[0.07] bg-[#fafafa] p-6 shadow-sm transition hover:border-au-gum/25 hover:shadow-md"
                >
                  <span className="font-[family-name:var(--font-outfit)] text-[11px] font-bold tabular-nums text-au-gumbright">
                    {step}
                  </span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-au-ocean ring-1 ring-black/[0.06]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-[16px] font-semibold text-[#001e00]">
                    {t(titleKey)}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5e6d64]">{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Employer plans (Upwork-style tiers, TrustWork benefits) ——— */}
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-emerald-50/50 via-white to-white py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <h2 className="text-center font-[family-name:var(--font-outfit)] text-[24px] font-semibold tracking-tight text-[#001e00] sm:text-[28px] lg:text-[30px]">
              {t("pricingSectionTitle")}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[15px] leading-relaxed text-[#5e6d64]">
              {t("pricingSectionSubtitle")}
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
              <div className="flex min-h-0 flex-col rounded-2xl border border-slate-200/95 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-10">
                <h3 className="text-[20px] font-semibold text-[#001e00] sm:text-[22px]">{t("pricingPlanStarterName")}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#5e6d64]">{t("pricingPlanStarterTagline")}</p>
                <p className="mt-6 text-[17px] font-semibold leading-snug text-[#001e00]">{t("pricingPlanStarterFee")}</p>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-[#001e00]">
                  {t("pricingPlanStarterListIntro")}
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {pricingStarterFeatures.map((key) => (
                    <li key={key} className="flex gap-3 text-[14px] leading-snug text-[#5e6d64]">
                      <Check className="h-5 w-5 shrink-0 text-[#157f3c]" strokeWidth={2} aria-hidden />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-8 w-full border-[#157f3c] text-[#157f3c] hover:bg-emerald-50 hover:text-[#0f5c2e] sm:w-auto"
                  asChild
                >
                  <Link href="/auth/signup?role=employer" className="gap-2">
                    {t("pricingCtaStarter")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative flex min-h-0 flex-col rounded-2xl border-2 border-[#157f3c]/30 bg-white p-8 shadow-[0_8px_32px_rgba(21,127,60,0.12)] sm:p-10">
                <span className="absolute right-4 top-4 rounded-full bg-[#157f3c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:right-5 sm:top-5">
                  {t("pricingPopularBadge")}
                </span>
                <h3 className="pr-20 text-[20px] font-semibold text-[#001e00] sm:text-[22px]">{t("pricingPlanPlusName")}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#5e6d64]">{t("pricingPlanPlusTagline")}</p>
                <p className="mt-6 text-[17px] font-semibold leading-snug text-[#001e00]">{t("pricingPlanPlusFee")}</p>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-[#001e00]">
                  {t("pricingPlanPlusListIntro")}
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {pricingPlusFeatures.map((key) => (
                    <li key={key} className="flex gap-3 text-[14px] leading-snug text-[#5e6d64]">
                      <Check className="h-5 w-5 shrink-0 text-[#157f3c]" strokeWidth={2} aria-hidden />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="green" className="mt-8 w-full sm:w-auto" asChild>
                  <Link href="/auth/signup?role=employer" className="gap-2">
                    {t("pricingCtaPlus")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="mt-8 text-center text-[14px] leading-relaxed text-[#5e6d64]">{t("pricingWorkerNote")}</p>
            <p className="mt-4 text-center">
              <Link
                href="/faq"
                className="text-[14px] font-semibold text-[#157f3c] underline-offset-4 hover:underline"
              >
                {t("pricingCompareAll")}
              </Link>
            </p>
          </div>
        </section>

        {/* ——— Stats ——— */}
        <section className="border-b border-black/[0.06] bg-white py-14">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <h2 className="text-center text-[24px] font-semibold text-[#001e00] sm:text-[28px]">{t("statsTitle")}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[15px] text-[#5e6d64]">{t("statsSubtitle")}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { v: "stat1Value", l: "stat1Label" },
                { v: "stat2Value", l: "stat2Label" },
                { v: "stat3Value", l: "stat3Label" },
              ].map(({ v, l }) => (
                <div key={v} className="rounded-lg border border-black/[0.06] bg-[#fafafa] px-6 py-8 text-center">
                  <p className="text-[36px] font-semibold tabular-nums text-au-ocean">{t(v)}</p>
                  <p className="mt-1 text-[14px] font-medium text-[#5e6d64]">{t(l)}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[12px] leading-relaxed text-[#8a9590]">{t("statsFootnote")}</p>
          </div>
        </section>

        {/* ——— Community teaser ——— */}
        <section className="border-b border-black/[0.06] bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="flex flex-col gap-6 rounded-2xl border border-au-gum/25 bg-gradient-to-r from-au-mist/50 via-white to-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:p-8">
              <div className="flex min-w-0 gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-au-gum/15 text-au-gum">
                  <MessageCircle className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-au-ocean">
                    {t("communityTeaserBadge")}
                  </span>
                  <h2 className="mt-1 font-[family-name:var(--font-outfit)] text-[20px] font-semibold text-[#001e00] sm:text-[22px]">
                    {t("communityTeaserTitle")}
                  </h2>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#5e6d64]">{t("communityTeaserDesc")}</p>
                </div>
              </div>
              <Button variant="outline" className="shrink-0 border-au-gum text-au-gum hover:bg-au-mist" asChild>
                <Link href="/community" className="gap-2">
                  {t("communityTeaserCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ——— Testimonials ——— */}
        <section className="border-b border-black/[0.06] bg-[#f0f4f2] py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <h2 className="text-center text-[28px] font-semibold text-[#001e00]">{t("testimonialsTitle")}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[15px] text-[#5e6d64]">{t("testimonialsSubtitle")}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { quote: "tWorker1Quote", name: "tWorker1Name" },
                { quote: "tWorker2Quote", name: "tWorker2Name" },
                { quote: "tEmployerQuote", name: "tEmployerName" },
              ].map(({ quote, name }) => (
                <blockquote
                  key={quote}
                  className="rounded-lg border border-black/[0.06] bg-white p-6 shadow-card"
                >
                  <p className="text-[15px] leading-relaxed text-[#001e00]">&ldquo;{t(quote)}&rdquo;</p>
                  <footer className="mt-4 text-[13px] font-semibold text-au-gum">{t(name)}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Partners ——— */}
        <section className="border-b border-black/[0.06] bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7a8a82]">{t("partnersEyebrow")}</p>
              <h2 className="mt-2 font-[family-name:var(--font-outfit)] text-[24px] font-semibold text-[#001e00] sm:text-[26px]">
                {t("partnersTitle")}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-[14px] text-[#5e6d64]">{t("partnersSubtitle")}</p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-black/[0.06] bg-[#fafafa] px-5 py-6 shadow-sm sm:px-8 sm:py-7">
              <PartnerTrustRow
                variant="section"
                label={t("heroPartnersLabel")}
                exchangeLine={t("heroPartnerExchangeLine")}
              />
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-[#8a9a92]">
              {t("partnersDisclaimer")}
            </p>
          </div>
        </section>

        {/* ——— News (aligned with sector cards + community teaser) ——— */}
        <section id="news" className="scroll-mt-24 border-b border-slate-200/80 bg-[#f5f6f4] py-14 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-emerald-300/8 blur-3xl"
                aria-hidden
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-900/75">
                    {t("newsEyebrow")}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-outfit)] text-[24px] font-semibold tracking-tight text-[#001e00] sm:text-[26px] lg:text-[28px]">
                    {t("newsTitle")}
                  </h2>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#5e6d64]">{t("newsSubtitle")}</p>
                </div>
                <Button
                  variant="outline"
                  className="relative shrink-0 border-[#157f3c] text-[#157f3c] hover:bg-emerald-50 hover:text-[#0f5c2e]"
                  asChild
                >
                  <Link href="/jobs" className="gap-2">
                    {t("footerBrowseJobs")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <ul className="relative mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {news.length === 0 ? (
                  <li className="col-span-full rounded-[11px] border border-dashed border-slate-300/90 bg-[#fafafa] px-6 py-10 text-center text-[15px] text-[#5e6d64]">
                    {t("newsEmpty")}
                  </li>
                ) : (
                  news.slice(0, 6).map((item, i) => {
                    const catKey = newsCats[i % newsCats.length];
                    const CatIcon = newsCatIcons[i % newsCatIcons.length];
                    return (
                      <li key={`${item.link}-${i}`}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "group flex h-full min-h-[148px] flex-col rounded-[11px] border border-slate-200/95 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-200",
                            "hover:border-[#157f3c] hover:shadow-[0_8px_24px_rgba(21,127,60,0.08)]",
                            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#157f3c]",
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="inline-flex w-fit items-center rounded-md bg-[#157f3c]/8 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#0f5c2e]">
                              {t(catKey)}
                            </span>
                            <CatIcon
                              className="h-7 w-7 shrink-0 text-[#157f3c] opacity-90 transition group-hover:opacity-100"
                              strokeWidth={1.5}
                              aria-hidden
                            />
                          </div>
                          <h3 className="mt-3 flex-1 text-left text-[15px] font-semibold leading-snug tracking-tight text-[#001e00]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-left text-[13px] text-[#5e6d64]">{item.source}</p>
                          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#157f3c] group-hover:underline">
                            {t("newsReadMore")}
                            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                          </span>
                        </a>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* ——— Footer (Upwork-like columns) ——— */}
      <footer className="border-t border-black/[0.08] bg-[#001e00] text-white">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:px-6">
          <div className="lg:col-span-2">
            <LogoText href="/" variant="footer" />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70">
              {t("footerTagline")}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerDiscover")}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/jobs" className="text-white/90 hover:text-white hover:underline">
                  {t("footerBrowseJobs")}
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white/90 hover:text-white hover:underline">
                  {t("footerCommunity")}
                </Link>
              </li>
              <li>
                <Link href="/auth/signup?role=employer" className="text-white/90 hover:text-white hover:underline">
                  {t("footerPostJob")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:underline">
                  {t("footerPricing")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerTrustTitle")}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/faq" className="text-white/90 hover:text-white hover:underline">
                  {t("footerVerification")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white hover:underline">
                  {t("footerDisputes")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerResourcesTitle")}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/faq" className="text-white/90 hover:text-white hover:underline">
                  {t("footerFaq")}
                </Link>
              </li>
              <li>
                <a href="#news" className="text-white/90 hover:text-white hover:underline">
                  {t("footerNews")}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerCompanyTitle")}</p>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white hover:underline">
                  {t("footerAbout")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white hover:underline">
                  {t("footerContact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-white hover:underline">
                {t("footerPrivacy")}
              </Link>
              <Link href="/terms" className="hover:text-white hover:underline">
                {t("footerTerms")}
              </Link>
            </div>
            <p>{t("footerRights", { year })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

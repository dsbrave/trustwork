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
import { HeroSearch } from "./HeroSearch";
import { HighlightsSection } from "./HighlightsSection";
import { LandingCardStrip, LandingCardStripItem } from "./LandingCardStrip";
import { LandingMobileMenu } from "./LandingMobileMenu";
import { LanguageSwitcherDesktop, LanguageSwitcherMobile } from "./LanguageSwitcher";
import { MegaMenuFindWork } from "./MegaMenuFindWork";
import { MegaMenuPostJob } from "./MegaMenuPostJob";

const newsCats = ["newsCategoryVisas", "newsCategoryWork", "newsCategoryRights"] as const;
const newsCatIcons = [Globe2, Briefcase, Scale] as const;
const pricingStarterFeatures = ["pricingPlanStarterF1", "pricingPlanStarterF2", "pricingPlanStarterF3"] as const;
const pricingPlusFeatures = ["pricingPlanPlusF1", "pricingPlanPlusF2", "pricingPlanPlusF3"] as const;

/** Visual accents for Trust Loop steps — cohesive AU greens, slight variation per step */
const TRUST_LOOP_CARD_THEMES = [
  {
    bar: "from-[#00843D] via-emerald-500 to-teal-600",
    surface:
      "bg-gradient-to-b from-white via-white to-emerald-50/55",
    iconSurface: "bg-gradient-to-br from-emerald-50 to-white",
  },
  {
    bar: "from-teal-600 via-[#00843D] to-emerald-600",
    surface: "bg-gradient-to-b from-white via-teal-50/25 to-teal-50/45",
    iconSurface: "bg-gradient-to-br from-teal-50 to-white",
  },
  {
    bar: "from-emerald-600 via-teal-600 to-[#0f766e]",
    surface: "bg-gradient-to-b from-white via-cyan-50/20 to-emerald-50/40",
    iconSurface: "bg-gradient-to-br from-cyan-50/90 to-white",
  },
  {
    bar: "from-[#059669] via-[#00843D] to-[#047857]",
    surface: "bg-gradient-to-b from-white via-emerald-50/40 to-teal-50/35",
    iconSurface: "bg-gradient-to-br from-emerald-100/90 to-white",
  },
] as const;

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
        <div className="relative mx-auto flex min-h-[3.25rem] max-w-content items-center px-3 py-2.5 sm:min-h-14 sm:px-4 sm:py-3 lg:px-6">
          {/* One bar: burger + centered logo (small screens) | desktop: logo + mega nav */}
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:gap-5">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <div className="landing-header-burger">
                <LandingMobileMenu />
              </div>
              <LanguageSwitcherMobile />
            </div>
            <div className="landing-header-nav-desktop text-[13px] xl:text-[14px]">
              <LogoText href="/" className="min-w-0 shrink-0" />
              <nav className="flex min-w-0 flex-1 items-center" aria-label="Primary">
                <div className="flex flex-nowrap items-center gap-0.5 overflow-visible pr-0.5 xl:gap-1">
                  <MegaMenuFindWork />
                  <MegaMenuPostJob />
                  <a
                    href="#loop"
                    className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 font-medium text-[#334155] hover:bg-slate-100 hover:text-[#1c2620] xl:px-2.5"
                  >
                    {t("navWhy")}
                  </a>
                  <Link
                    href="/community"
                    className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 font-medium text-[#334155] hover:bg-slate-100 hover:text-[#1c2620] xl:px-2.5"
                  >
                    {t("navCommunity")}
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className="landing-header-logo-mobile">
            <LogoText href="/" className="min-w-0 max-w-full [&>span]:items-center" />
          </div>

          <div className="landing-header-actions">
            <LanguageSwitcherDesktop />
            <Link
              href="/auth/login"
              className="inline-flex shrink-0 whitespace-nowrap rounded-md px-1 py-2 text-[11px] font-semibold text-au-ocean hover:underline min-[400px]:px-1.5 min-[400px]:text-[12px] sm:text-[13px] lg:px-2 lg:text-[13px] xl:text-[14px]"
            >
              {t("navLogin")}
            </Link>
            <Button
              variant="nav"
              size="sm"
              className="!h-9 shrink-0 px-2.5 text-[12px] sm:!h-10 sm:px-3 sm:text-[13px] lg:!h-10 lg:px-4 lg:text-[14px]"
              asChild
            >
              <Link href="/auth/signup">{t("navSignup")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* ——— Hero (video background, readable overlays) ——— */}
        <section className="border-b border-slate-200/80 bg-[#fafafa]">
          <div className="mx-auto max-w-content px-4 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-6 lg:px-6 lg:pb-6 lg:pt-8">
            <div className="relative h-[25rem] overflow-hidden rounded-2xl border border-slate-200/70 bg-[#0f1720] shadow-[0_16px_48px_rgba(15,23,42,0.12)] sm:h-[27rem] sm:rounded-[1.75rem] lg:h-[28rem] lg:rounded-[2rem] xl:h-[30rem]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/hero-loop.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(95deg,rgba(8,15,20,0.74)_0%,rgba(8,15,20,0.56)_38%,rgba(8,15,20,0.34)_62%,rgba(8,15,20,0.42)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.09)_0%,transparent_44%)]"
                aria-hidden
              />
              <div className="relative z-10 flex flex-col gap-8 px-5 py-9 sm:gap-10 sm:px-7 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-10 xl:gap-14 xl:px-12 xl:py-12">
                <div className="max-w-xl flex-1 lg:max-w-[min(36rem,42%)]">
                  <h1 className="mt-1 text-balance text-[28px] font-semibold leading-[1.12] tracking-tight text-white sm:mt-2 sm:text-[36px] lg:text-[44px] xl:text-[48px]">
                    {t("heroTitle")}
                  </h1>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/90 sm:mt-5 sm:text-[16px] lg:text-[17px]">
                    {t("heroImmersiveLead")}
                  </p>
                </div>

                <div className="w-full max-w-full p-1 sm:p-2 lg:min-w-0 lg:flex-1 lg:max-w-none">
                  <HeroSearch
                    variant="immersive"
                    tabJobs={t("heroTabJobs")}
                    tabTalent={t("heroTabTalent")}
                    placeholderJobs={t("heroPlaceholderJobs")}
                    placeholderTalent={t("heroPlaceholderTalent")}
                    search={t("heroSearch")}
                  />
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
              {/* Compact square tiles: 2 cols on phones, 3 from sm, 5 on large desktop. */}
              <div className="relative mt-8">
                <p id="a11y-landing-categories-hint" className="sr-only">
                  {t("a11yCategoryGridHint")}
                </p>
                <div
                  role="region"
                  aria-label={t("a11yRegionCategories")}
                  aria-describedby="a11y-landing-categories-hint"
                  tabIndex={0}
                  className={cn(
                    "grid w-full min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:grid-cols-5 lg:gap-4",
                    "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#00843D] focus-visible:ring-offset-2",
                  )}
                >
                  {categories.map(({ key, slug, Icon }) => (
                    <div key={slug} className="min-w-0">
                      <Link
                        href={`/jobs?category=${slug}`}
                        className={cn(
                          "group flex aspect-square min-h-0 w-full flex-col items-center justify-center gap-1.5 rounded-[10px] border border-slate-200/95 bg-white p-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-200",
                          "sm:gap-2 sm:rounded-[11px] sm:p-2.5",
                          "hover:border-au-gum hover:shadow-[0_8px_24px_rgba(0,132,61,0.08)]",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00843D]",
                        )}
                      >
                        <Icon
                          className="h-7 w-7 shrink-0 text-[#00843D] opacity-[0.92] transition group-hover:opacity-100 sm:h-8 sm:w-8"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                        <span className="line-clamp-2 text-center text-[12px] font-semibold leading-tight tracking-tight text-[#001e00] sm:text-[13px] md:text-[14px] lg:text-[14px]">
                          {t(key)}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HighlightsSection />

        {/* ——— Trust loop (fund → prove → pay) ——— */}
        <section
          id="loop"
          className="scroll-mt-24 border-b border-black/[0.06] bg-gradient-to-b from-white via-[#f8faf8] to-white py-14 lg:py-16"
        >
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-au-reef">{t("stackEyebrow")}</p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-[26px] font-semibold tracking-tight text-[#001e00] sm:text-[30px]">
                {t("stackTitle")}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5e6d64] sm:text-[16px]">{t("stackSubtitle")}</p>
            </div>

            <figure className="mx-auto mt-10 max-w-3xl px-0">
              <div className="aspect-video overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.04] shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <video
                  className="h-full w-full object-cover object-center"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={t("stackVideoAriaLabel")}
                >
                  <source src="/videos/trust-loop-intro.mp4" type="video/mp4" />
                  <p className="p-4 text-center text-[14px] text-[#5e6d64]">{t("stackVideoFallback")}</p>
                </video>
              </div>
              <figcaption className="mt-3 text-center text-[13px] leading-snug text-[#5e6d64]">
                {t("stackVideoCaption")}
              </figcaption>
            </figure>

            <LandingCardStrip
              ariaLabel={t("a11yRegionTrustLoop")}
              hint={t("a11yHorizontalScrollHint")}
              desktopCols={4}
              className="mt-12"
            >
              {(
                [
                  { step: "01", titleKey: "stack1Title", descKey: "stack1Desc", Icon: Wallet },
                  { step: "02", titleKey: "stack2Title", descKey: "stack2Desc", Icon: Layers },
                  { step: "03", titleKey: "stack3Title", descKey: "stack3Desc", Icon: MapPin },
                  { step: "04", titleKey: "stack4Title", descKey: "stack4Desc", Icon: CircleDollarSign },
                ] as const
              ).map(({ step, titleKey, descKey, Icon }, i) => {
                const theme = TRUST_LOOP_CARD_THEMES[i] ?? TRUST_LOOP_CARD_THEMES[0];
                return (
                  <LandingCardStripItem key={step}>
                    <div
                      className={cn(
                        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 p-6 shadow-[0_4px_28px_rgba(15,23,42,0.07)] transition-all duration-300",
                        "hover:-translate-y-1 hover:border-au-gum/30 hover:shadow-[0_18px_50px_rgba(0,132,61,0.13)]",
                        theme.surface,
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-[0.92]",
                          theme.bar,
                        )}
                        aria-hidden
                      />
                      <div className="flex items-start justify-between gap-3">
                        <span className="inline-flex h-9 min-w-[2.75rem] items-center justify-center rounded-full bg-[#00843D] px-3 text-[12px] font-bold tabular-nums tracking-wide text-white shadow-md ring-2 ring-white/90">
                          {step}
                        </span>
                        <div
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#00843D] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-emerald-200/75",
                            theme.iconSurface,
                          )}
                        >
                          <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden />
                        </div>
                      </div>
                      <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-[17px] font-semibold leading-snug tracking-tight text-[#001e00]">
                        {t(titleKey)}
                      </h3>
                      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#4d5f56]">{t(descKey)}</p>
                    </div>
                  </LandingCardStripItem>
                );
              })}
            </LandingCardStrip>
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

            <LandingCardStrip
              ariaLabel={t("a11yRegionPricing")}
              hint={t("a11yHorizontalScrollHint")}
              desktopCols={2}
              className="mt-10"
              innerClassName="lg:items-stretch"
            >
              <LandingCardStripItem className="basis-[min(92vw,440px)] md:basis-auto">
              <div className="flex h-full min-h-0 flex-col rounded-2xl border border-slate-200/95 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-10">
                <h3 className="text-[20px] font-semibold text-[#001e00] sm:text-[22px]">{t("pricingPlanStarterName")}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#5e6d64]">{t("pricingPlanStarterTagline")}</p>
                <p className="mt-6 text-[17px] font-semibold leading-snug text-[#001e00]">{t("pricingPlanStarterFee")}</p>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-[#001e00]">
                  {t("pricingPlanStarterListIntro")}
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {pricingStarterFeatures.map((key) => (
                    <li key={key} className="flex gap-3 text-[14px] leading-snug text-[#5e6d64]">
                      <Check className="h-5 w-5 shrink-0 text-au-gum" strokeWidth={2} aria-hidden />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-8 w-full border-au-gum text-au-gum hover:bg-emerald-50 hover:text-au-gumbright sm:w-auto"
                  asChild
                >
                  <Link href="/auth/signup?role=employer" className="gap-2">
                    {t("pricingCtaStarter")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              </LandingCardStripItem>

              <LandingCardStripItem className="basis-[min(92vw,440px)] md:basis-auto">
              <div className="relative flex h-full min-h-0 flex-col rounded-2xl border-2 border-[#00843D]/35 bg-white p-8 shadow-[0_8px_32px_rgba(0,132,61,0.12)] sm:p-10">
                <span className="absolute right-4 top-4 rounded-full bg-[#00843D] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:right-5 sm:top-5">
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
                      <Check className="h-5 w-5 shrink-0 text-au-gum" strokeWidth={2} aria-hidden />
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
              </LandingCardStripItem>
            </LandingCardStrip>

            <p className="mt-8 text-center text-[14px] leading-relaxed text-[#5e6d64]">{t("pricingWorkerNote")}</p>
            <p className="mt-4 text-center">
              <Link
                href="/faq"
                className="text-[14px] font-semibold text-[#00843D] underline-offset-4 hover:underline"
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
            <LandingCardStrip
              ariaLabel={t("a11yRegionStats")}
              hint={t("a11yHorizontalScrollHint")}
              desktopCols={3}
              className="mt-10"
            >
              {[
                { v: "stat1Value", l: "stat1Label" },
                { v: "stat2Value", l: "stat2Label" },
                { v: "stat3Value", l: "stat3Label" },
              ].map(({ v, l }) => (
                <LandingCardStripItem key={v}>
                  <div className="h-full rounded-2xl border border-black/[0.07] bg-[#fafafa] px-6 py-8 text-center shadow-sm">
                    <p className="text-[36px] font-semibold tabular-nums text-au-ocean">{t(v)}</p>
                    <p className="mt-1 text-[14px] font-medium text-[#5e6d64]">{t(l)}</p>
                  </div>
                </LandingCardStripItem>
              ))}
            </LandingCardStrip>
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

        {/* ——— Testimonials (aligned with Trust Loop cards) ——— */}
        <section className="border-b border-slate-200/80 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-au-reef">{t("testimonialsEyebrow")}</p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-[26px] font-semibold tracking-tight text-[#001e00] sm:text-[28px]">
                {t("testimonialsTitle")}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5e6d64] sm:text-[16px]">{t("testimonialsSubtitle")}</p>
            </div>
            <LandingCardStrip
              ariaLabel={t("a11yRegionTestimonials")}
              hint={t("a11yHorizontalScrollHint")}
              desktopCols={3}
              className="mt-10"
            >
              {[
                { quote: "tWorker1Quote", name: "tWorker1Name" },
                { quote: "tWorker2Quote", name: "tWorker2Name" },
                { quote: "tEmployerQuote", name: "tEmployerName" },
              ].map(({ quote, name }) => (
                <LandingCardStripItem key={quote}>
                  <blockquote className="flex h-full flex-col rounded-2xl border border-black/[0.07] bg-[#fafafa] p-6 shadow-sm">
                    <p className="text-[15px] leading-relaxed text-[#001e00]">&ldquo;{t(quote)}&rdquo;</p>
                    <footer className="mt-4 text-[13px] font-semibold text-[#00843D]">{t(name)}</footer>
                  </blockquote>
                </LandingCardStripItem>
              ))}
            </LandingCardStrip>
          </div>
        </section>

        {/* ——— News (same voice as Trust Loop + horizontal strip on mobile) ——— */}
        <section id="news" className="scroll-mt-24 border-b border-slate-200/80 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="rounded-2xl border border-black/[0.07] bg-[#fafafa] p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-au-reef">{t("newsEyebrow")}</p>
                  <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-[26px] font-semibold tracking-tight text-[#001e00] sm:text-[28px]">
                    {t("newsTitle")}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5e6d64] sm:text-[16px]">{t("newsSubtitle")}</p>
                </div>
                <Button
                  variant="outline"
                  className="relative shrink-0 self-center border-[#00843D] text-[#00843D] hover:bg-emerald-50 hover:text-[#006631] lg:self-start"
                  asChild
                >
                  <Link href="/jobs" className="gap-2">
                    {t("footerBrowseJobs")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {news.length === 0 ? (
                <p className="relative mt-10 rounded-2xl border border-dashed border-slate-300/90 bg-white px-6 py-10 text-center text-[15px] text-[#5e6d64]">
                  {t("newsEmpty")}
                </p>
              ) : (
                <LandingCardStrip
                  asList
                  ariaLabel={t("a11yRegionNews")}
                  hint={t("a11yHorizontalScrollHint")}
                  desktopCols={3}
                  className="relative mt-10"
                >
                  {news.slice(0, 6).map((item, i) => {
                    const catKey = newsCats[i % newsCats.length];
                    const CatIcon = newsCatIcons[i % newsCatIcons.length];
                    return (
                      <LandingCardStripItem as="li" key={`${item.link}-${i}`}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "group flex h-full min-h-[148px] flex-col rounded-2xl border border-black/[0.07] bg-white p-4 shadow-sm transition-all duration-200",
                            "hover:border-[#00843D]/40 hover:shadow-md",
                            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00843D]",
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="inline-flex w-fit items-center rounded-md bg-[#00843D]/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#006631]">
                              {t(catKey)}
                            </span>
                            <CatIcon
                              className="h-7 w-7 shrink-0 text-[#00843D] opacity-90 transition group-hover:opacity-100"
                              strokeWidth={1.5}
                              aria-hidden
                            />
                          </div>
                          <h3 className="mt-3 flex-1 text-left text-[15px] font-semibold leading-snug tracking-tight text-[#001e00]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-left text-[13px] text-[#5e6d64]">{item.source}</p>
                          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#00843D] group-hover:underline">
                            {t("newsReadMore")}
                            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                          </span>
                        </a>
                      </LandingCardStripItem>
                    );
                  })}
                </LandingCardStrip>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ——— Footer (Upwork-like columns) ——— */}
      <footer className="border-t border-[#e8c547]/35 bg-[#0b1f14] text-white">
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
                <Link href="/jobs" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerBrowseJobs")}
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerCommunity")}
                </Link>
              </li>
              <li>
                <Link href="/auth/signup?role=employer" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerPostJob")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerPricing")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerTrustTitle")}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/faq" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerVerification")}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerDisputes")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerResourcesTitle")}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <Link href="/faq" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerFaq")}
                </Link>
              </li>
              <li>
                <a href="#news" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerNews")}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-wider text-white/50">{t("footerCompanyTitle")}</p>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/about" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerAbout")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-[#f5e7a3] hover:underline">
                  {t("footerContact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e8c547]/25">
          <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-white/70 hover:text-[#f5e7a3] hover:underline">
                {t("footerPrivacy")}
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-[#f5e7a3] hover:underline">
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

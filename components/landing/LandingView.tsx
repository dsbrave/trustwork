import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CreditCard,
  Layers,
  MapPin,
  Newspaper,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import type { ImmigrationNewsItem } from "@/lib/immigration-news";
import { Link } from "@/navigation";
import { HeroSearch } from "./HeroSearch";
import { LanguageSwitcher } from "./LanguageSwitcher";

const newsCats = ["newsCategoryVisas", "newsCategoryWork", "newsCategoryRights"] as const;

export async function LandingView({ news }: { news: ImmigrationNewsItem[] }) {
  const t = await getTranslations("Landing");
  const year = new Date().getFullYear();

  const categories = [
    { key: "catHospitality", slug: "hospitality" },
    { key: "catConstruction", slug: "construction" },
    { key: "catCleaning", slug: "cleaning" },
    { key: "catAgedcare", slug: "agedcare" },
    { key: "catIt", slug: "it" },
    { key: "catRetail", slug: "retail" },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7]">
      {/* ——— Top bar (Upwork-style) ——— */}
      <header className="sticky top-0 z-[100] border-b border-black/[0.08] bg-white shadow-nav">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3 lg:gap-8">
            <Link href="/" className="flex items-center gap-2 text-[22px] font-semibold tracking-tight text-[#001e00]">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-au-ocean text-lg font-bold text-white">
                T
              </span>
              <span className="hidden sm:inline">{t("navBrand")}</span>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              <Link
                href="/jobs"
                className="rounded-md px-3 py-2 text-[15px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]"
              >
                {t("navFindWork")}
              </Link>
              <Link
                href="/auth/signup?role=employer"
                className="rounded-md px-3 py-2 text-[15px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]"
              >
                {t("navPostJob")}
              </Link>
              <a
                href="#why"
                className="rounded-md px-3 py-2 text-[15px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]"
              >
                {t("navWhy")}
              </a>
              <a
                href="#trust"
                className="rounded-md px-3 py-2 text-[15px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]"
              >
                {t("navTrust")}
              </a>
              <a
                href="#news"
                className="rounded-md px-3 py-2 text-[15px] font-medium text-[#001e00]/80 hover:bg-black/[0.04] hover:text-[#001e00]"
              >
                {t("navResources")}
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link
              href="/auth/login"
              className="hidden rounded-md px-3 py-2 text-[15px] font-semibold text-au-ocean hover:underline sm:inline"
            >
              {t("navLogin")}
            </Link>
            <Button variant="nav" size="sm" className="!h-10 shrink-0 px-4 text-[14px]" asChild>
              <Link href="/auth/signup">{t("navSignup")}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile link strip */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto border-t border-black/[0.06] bg-[#fafafa] px-4 py-2 lg:hidden">
          <Link href="/jobs" className="whitespace-nowrap text-[13px] font-medium text-au-ocean">
            {t("navFindWork")}
          </Link>
          <span className="text-[#ccc]">|</span>
          <Link href="/auth/signup?role=employer" className="whitespace-nowrap text-[13px] font-medium text-au-ocean">
            {t("navPostJob")}
          </Link>
          <span className="text-[#ccc]">|</span>
          <a href="#why" className="whitespace-nowrap text-[13px] font-medium text-au-ocean">
            {t("navWhy")}
          </a>
        </div>
      </header>

      <main>
        {/* ——— Hero (light, Upwork-like) ——— */}
        <section className="border-b border-black/[0.06] bg-white">
          <div className="mx-auto max-w-content px-4 pb-16 pt-10 lg:px-6 lg:pb-20 lg:pt-14">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-au-reef">{t("heroEyebrow")}</p>
            <h1 className="mt-3 max-w-[680px] text-[36px] font-semibold leading-[1.15] tracking-tight text-[#001e00] sm:text-[44px] lg:text-[52px]">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 max-w-[640px] text-[18px] leading-relaxed text-[#5e6d64]">{t("heroSubtitle")}</p>

            <div className="mt-10">
              <HeroSearch
                tabJobs={t("heroTabJobs")}
                tabTalent={t("heroTabTalent")}
                placeholderJobs={t("heroPlaceholderJobs")}
                placeholderTalent={t("heroPlaceholderTalent")}
                search={t("heroSearch")}
              />
            </div>

            <p className="mt-6 text-[14px] text-[#5e6d64]">{t("heroTrustLine")}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-black/[0.08] bg-[#fafafa] px-3 py-1.5 text-[13px] font-medium text-[#001e00]/80">
                <Shield className="h-3.5 w-3.5 text-au-gum" aria-hidden />
                {t("badgeEscrow")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-black/[0.08] bg-[#fafafa] px-3 py-1.5 text-[13px] font-medium text-[#001e00]/80">
                <BadgeCheck className="h-3.5 w-3.5 text-au-ocean" aria-hidden />
                {t("badgeVerified")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-black/[0.08] bg-[#fafafa] px-3 py-1.5 text-[13px] font-medium text-[#001e00]/80">
                <MapPin className="h-3.5 w-3.5 text-au-reef" aria-hidden />
                {t("badgeGPS")}
              </span>
            </div>
          </div>
        </section>

        {/* ——— Trending categories ——— */}
        <section className="border-b border-black/[0.06] bg-[#fafafa] py-8">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <p className="text-[15px] font-semibold text-[#001e00]">{t("trendingTitle")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(({ key, slug }) => (
                <Link
                  key={slug}
                  href={`/jobs?category=${slug}`}
                  className="rounded-pill border border-black/[0.1] bg-white px-4 py-2 text-[14px] font-medium text-[#001e00] shadow-sm transition hover:border-au-gumbright hover:text-au-gumbright"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Two paths (For workers / For business) ——— */}
        <section className="border-b border-black/[0.06] bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-content gap-6 px-4 lg:grid-cols-2 lg:gap-8 lg:px-6">
            <div className="flex flex-col rounded-lg border border-black/[0.08] bg-gradient-to-br from-au-mist/40 to-white p-8 shadow-card lg:p-10">
              <Users className="h-10 w-10 text-au-gum" strokeWidth={1.5} />
              <h2 className="mt-6 text-[22px] font-semibold text-[#001e00]">{t("splitWorkersTitle")}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5e6d64]">{t("splitWorkersDesc")}</p>
              <Button variant="outline" className="mt-8 w-fit border-au-gum text-au-gum hover:bg-au-mist" asChild>
                <Link href="/auth/signup?role=worker" className="gap-2">
                  {t("splitWorkersCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col rounded-lg border border-black/[0.08] bg-gradient-to-br from-blue-50/80 to-white p-8 shadow-card lg:p-10">
              <Briefcase className="h-10 w-10 text-au-ocean" strokeWidth={1.5} />
              <h2 className="mt-6 text-[22px] font-semibold text-[#001e00]">{t("splitBizTitle")}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5e6d64]">{t("splitBizDesc")}</p>
              <Button variant="primary" className="mt-8 w-fit" asChild>
                <Link href="/auth/signup?role=employer" className="gap-2">
                  {t("splitBizCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ——— How it works ——— */}
        <section id="why" className="scroll-mt-24 border-b border-black/[0.06] bg-[#fafafa] py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 text-center lg:px-6">
            <h2 className="text-[28px] font-semibold text-[#001e00] sm:text-[32px]">{t("stepsTitle")}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-[16px] text-[#5e6d64]">{t("stepsSubtitle")}</p>
            <div className="mt-12 grid gap-8 text-left md:grid-cols-3 md:gap-6">
              {[
                { n: 1, titleKey: "step1Title", descKey: "step1Desc", Icon: Sparkles },
                { n: 2, titleKey: "step2Title", descKey: "step2Desc", Icon: MapPin },
                { n: 3, titleKey: "step3Title", descKey: "step3Desc", Icon: Shield },
              ].map(({ n, titleKey, descKey, Icon }) => (
                <div key={n} className="rounded-lg border border-black/[0.06] bg-white p-6 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#001e00] text-sm font-bold text-white">
                    {n}
                  </div>
                  <Icon className="mt-4 h-8 w-8 text-au-ocean" strokeWidth={1.5} />
                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-[#5e6d64]">
                    {t("stepMarker", { n })}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold text-[#001e00]">{t(titleKey)}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5e6d64]">{t(descKey)}</p>
                </div>
              ))}
            </div>
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
          </div>
        </section>

        {/* ——— Why TrustWork ——— */}
        <section id="trust" className="scroll-mt-24 border-b border-black/[0.06] bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <h2 className="text-center text-[28px] font-semibold text-[#001e00] sm:text-[32px]">{t("whyTitle")}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[#5e6d64]">{t("whySubtitle")}</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { titleKey: "diffCardTitle", descKey: "diffCardDesc", Icon: CreditCard },
                { titleKey: "diffMultiTitle", descKey: "diffMultiDesc", Icon: Layers },
                { titleKey: "diffPayTitle", descKey: "diffPayDesc", Icon: Shield },
              ].map(({ titleKey, descKey, Icon }) => (
                <div key={titleKey} className="rounded-lg border border-black/[0.08] p-6 shadow-card">
                  <Icon className="h-9 w-9 text-au-gum" strokeWidth={1.5} />
                  <h3 className="mt-4 text-[17px] font-semibold text-[#001e00]">{t(titleKey)}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5e6d64]">{t(descKey)}</p>
                </div>
              ))}
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
        <section className="border-b border-black/[0.06] bg-white py-12">
          <div className="mx-auto max-w-content px-4 text-center lg:px-6">
            <Building2 className="mx-auto h-9 w-9 text-[#5e6d64]" strokeWidth={1.25} />
            <h2 className="mt-4 text-[22px] font-semibold text-[#001e00]">{t("partnersTitle")}</h2>
            <p className="mt-1 text-[14px] text-[#5e6d64]">{t("partnersSubtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {(["partnerLumx", "partnerNati", "partnerTafe", "partnerAgencies"] as const).map((k) => (
                <span
                  key={k}
                  className="rounded-md border border-black/[0.08] bg-[#fafafa] px-6 py-3 text-[14px] font-semibold text-[#001e00]/90"
                >
                  {t(k)}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ——— News ——— */}
        <section id="news" className="scroll-mt-24 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-content px-4 lg:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Newspaper className="h-8 w-8 text-au-ocean" strokeWidth={1.5} />
                <h2 className="mt-3 text-[28px] font-semibold text-[#001e00]">{t("newsTitle")}</h2>
                <p className="mt-1 max-w-xl text-[15px] text-[#5e6d64]">{t("newsSubtitle")}</p>
              </div>
              <Link href="/jobs" className="text-[14px] font-semibold text-au-ocean hover:underline">
                {t("footerBrowseJobs")} →
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {news.length === 0 ? (
                <li className="col-span-full rounded-lg border border-dashed border-black/[0.12] p-8 text-center text-[#5e6d64]">
                  {t("newsEmpty")}
                </li>
              ) : (
                news.slice(0, 6).map((item, i) => {
                  const catKey = newsCats[i % newsCats.length];
                  return (
                    <li key={`${item.link}-${i}`}>
                      <article className="flex h-full flex-col rounded-lg border border-black/[0.08] bg-[#fafafa] p-5 transition hover:shadow-lift">
                        <span className="w-fit rounded bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-au-ocean">
                          {t(catKey)}
                        </span>
                        <h3 className="mt-3 flex-1 text-[15px] font-semibold leading-snug text-[#001e00]">{item.title}</h3>
                        <p className="mt-2 text-[12px] text-[#5e6d64]">{item.source}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-au-gumbright hover:underline"
                        >
                          {t("newsReadMore")}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </article>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </section>
      </main>

      {/* ——— Footer (Upwork-like columns) ——— */}
      <footer className="border-t border-black/[0.08] bg-[#001e00] text-white">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:px-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-[20px] font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-au-ocean">T</span>
              TrustWork Australia
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70">
              {t("heroSubtitle")}
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
                <a href="#trust" className="text-white/90 hover:text-white hover:underline">
                  {t("footerVerification")}
                </a>
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

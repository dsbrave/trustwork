import { LogoText } from "@/components/brand/LogoText";

/** Minimal top bar with wordmark for inner pages (no full landing nav). */
export function SimpleHeader() {
  return (
    <header className="border-b border-black/[0.08] bg-white shadow-nav">
      <div className="mx-auto flex max-w-content items-center px-4 py-3.5 lg:px-6">
        <LogoText href="/" />
      </div>
    </header>
  );
}

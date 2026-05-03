import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Link } from "@/navigation";

export default function PrivacyPage() {
  return (
    <>
      <SimpleHeader />
      <div className="mx-auto max-w-2xl px-4 py-16">
        <Link href="/" className="text-sm font-semibold text-au-ocean hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-[#001e00]">Privacy policy</h1>
        <p className="mt-4 text-[#5e6d64]">
          {/* TODO: Implementar depois — texto legal traduzido (6 idiomas) */}
          Full privacy policy text will be provided here for all supported locales.
        </p>
      </div>
    </>
  );
}

import { Link } from "@/navigation";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Privacy policy</h1>
      <p className="mt-4 text-slate-600">
        {/* TODO: Implementar depois — texto legal traduzido (6 idiomas) */}
        Full privacy policy text will be provided here for all supported locales.
      </p>
    </div>
  );
}

import { Link } from "@/navigation";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Terms of use</h1>
      <p className="mt-4 text-slate-600">
        {/* TODO: Implementar depois — termos traduzidos */}
        Terms of use — full legal copy will ship with i18n legal documents.
      </p>
    </div>
  );
}

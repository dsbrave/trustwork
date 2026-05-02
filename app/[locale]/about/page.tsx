import { Link } from "@/navigation";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">About TrustWork</h1>
      <p className="mt-4 text-slate-600">
        {/* TODO: Implementar depois — conteúdo institucional completo */}
        Platform overview and team — coming in the next iteration.
      </p>
    </div>
  );
}

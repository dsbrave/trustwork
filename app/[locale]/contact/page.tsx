import { Link } from "@/navigation";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-4 text-slate-600">
        {/* TODO: Implementar depois — formulário + suporte */}
        Contact form and support channels — coming soon.
      </p>
    </div>
  );
}

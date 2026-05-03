import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Link } from "@/navigation";

export default function ContactPage() {
  return (
    <>
      <SimpleHeader />
      <div className="mx-auto max-w-2xl px-4 py-16">
        <Link href="/" className="text-sm font-semibold text-au-ocean hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-[#001e00]">Contact</h1>
        <p className="mt-4 text-[#5e6d64]">
          {/* TODO: Implementar depois — formulário + suporte */}
          Contact form and support channels — coming soon.
        </p>
      </div>
    </>
  );
}

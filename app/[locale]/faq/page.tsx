import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Link } from "@/navigation";

export default function FaqPage() {
  return (
    <>
      <SimpleHeader />
      <div className="mx-auto max-w-2xl px-4 py-16">
        <Link href="/" className="text-sm font-semibold text-au-ocean hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-[#001e00]">FAQ</h1>
        <p className="mt-4 text-[#5e6d64]">
          {/* TODO: Implementar depois — perguntas frequentes por idioma */}
          Frequently asked questions — coming soon.
        </p>
      </div>
    </>
  );
}

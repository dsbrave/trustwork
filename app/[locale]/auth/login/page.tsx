import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Link } from "@/navigation";

export default function LoginPage() {
  return (
    <>
      <SimpleHeader />
      <div className="mx-auto max-w-md px-4 py-20">
        <h1 className="text-2xl font-bold text-[#001e00]">Log in</h1>
        <p className="mt-2 text-[#5e6d64]">
          {/* TODO: Implementar depois — NextAuth credentials + Google */}
          Authentication will be wired in Commit 2 (NextAuth).
        </p>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold text-au-ocean hover:underline">
          ← Back to home
        </Link>
      </div>
    </>
  );
}

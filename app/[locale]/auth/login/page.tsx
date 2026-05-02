import { Link } from "@/navigation";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-2xl font-bold text-slate-900">Log in</h1>
      <p className="mt-2 text-slate-600">
        {/* TODO: Implementar depois — NextAuth credentials + Google */}
        Authentication will be wired in Commit 2 (NextAuth).
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-brand-blue hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}

import { Link } from "@/navigation";

type Props = {
  searchParams: { role?: string | string[] };
};

export default function SignupPage({ searchParams }: Props) {
  const raw = searchParams.role;
  const role = typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : undefined;

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-2xl font-bold text-slate-900">Sign up</h1>
      <p className="mt-2 text-slate-600">
        Role hint: <span className="font-mono text-brand-blue">{role ?? "—"}</span>
      </p>
      <p className="mt-4 text-slate-600">
        {/* TODO: Implementar depois — formulário worker/employer + OAuth + termos */}
        Registration flow — NextAuth + profile fields in Commit 2.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-brand-blue hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}

import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { Link } from "@/navigation";

type Props = {
  searchParams: { role?: string | string[]; lookingFor?: string | string[] };
};

function firstParam(v: string | string[] | undefined) {
  return typeof v === "string" ? v : Array.isArray(v) ? v[0] : undefined;
}

export default function SignupPage({ searchParams }: Props) {
  const role = firstParam(searchParams.role);
  const lookingFor = firstParam(searchParams.lookingFor);

  return (
    <>
      <SimpleHeader />
      <div className="mx-auto max-w-md px-4 py-20">
        <h1 className="text-2xl font-bold text-[#001e00]">Sign up</h1>
        <p className="mt-2 text-[#5e6d64]">
          Role hint: <span className="font-mono text-au-ocean">{role ?? "—"}</span>
        </p>
        {lookingFor ? (
          <p className="mt-2 text-[#5e6d64]">
            Hiring intent: <span className="font-mono text-au-ocean">{lookingFor}</span>
          </p>
        ) : null}
        <p className="mt-4 text-[#5e6d64]">
          {/* TODO: Implementar depois — formulário worker/employer + OAuth + termos */}
          Registration flow — NextAuth + profile fields in Commit 2.
        </p>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold text-au-ocean hover:underline">
          ← Back to home
        </Link>
      </div>
    </>
  );
}

import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

type Props = {
  href?: string;
  variant?: "header" | "footer" | "neutral";
  className?: string;
};

/** Wordmark only — no symbol. Uses Outfit (see root layout). */
export function LogoText({ href = "/", variant = "header", className }: Props) {
  const isFooter = variant === "footer";
  const isNeutral = variant === "neutral";

  const inner = (
    <span className="inline-flex flex-col leading-[1.05]">
      <span
        className={cn(
          "font-[family-name:var(--font-outfit)] text-[1.2rem] font-semibold tracking-[-0.05em] sm:text-[1.35rem]",
          isFooter && "text-white",
          isNeutral && "text-[#001e00]",
          !isFooter && !isNeutral && "text-[#001e00]",
        )}
      >
        TrustWork
      </span>
      <span
        className={cn(
          "mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.32em]",
          isFooter ? "text-white/55" : "text-[#6b7c72]",
        )}
      >
        Australia
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-block outline-none transition-[opacity,transform] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-au-gum focus-visible:ring-offset-2",
          className,
        )}
      >
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/navigation";

type Props = {
  href?: string;
  variant?: "header" | "footer" | "neutral";
  className?: string;
};

/** TrustWork wordmark logo (SVG in `/public/logo/TW-logo.svg`). */
export function LogoText({ href = "/", variant = "header", className }: Props) {
  const isFooter = variant === "footer";
  const isNeutral = variant === "neutral";

  const inner = (
    <Image
      src="/logo/TW-logo.svg"
      alt="TrustWork Australia"
      width={176}
      height={54}
      priority={variant === "header"}
      className={cn(
        "h-auto w-[7.6rem] max-w-full sm:w-[8.6rem]",
        isFooter && "brightness-0 invert",
        isNeutral && "brightness-95",
      )}
    />
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

  return <div className={cn("inline-block", className)}>{inner}</div>;
}

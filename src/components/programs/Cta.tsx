import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: ReactNode;
  /** "solid" is the ink-coloured block, "line" an underlined link. */
  variant?: "solid" | "line";
  className?: string;
  disabled?: boolean;
  newTab?: boolean;
  download?: boolean;
};

const VARIANT = {
  solid: "bg-purple-300 px-6 py-3.5 text-black hover:bg-white",
  line: "py-1 text-white underline decoration-white/35 decoration-1 underline-offset-[0.4em] hover:decoration-white",
};

/** Square-cornered call to action. External links open in a new tab. */
export function Cta({ href, children, variant = "solid", className, disabled = false, newTab = false, download = false }: Props) {
  const external = (href?.startsWith("http") ?? false) || newTab;
  const Arrow = download ? Download : external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    "group inline-flex items-center gap-3 font-heading text-lg transition-[background-color,text-decoration-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400",
    VARIANT[variant],
    disabled && "cursor-default bg-white/15 text-white/50 hover:bg-white/15",
    className,
  );
  const content = (
    <>
      {children}
      <Arrow
        aria-hidden
        className={cn(
          "size-5 shrink-0 transition-transform duration-300",
          external ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "group-hover:translate-x-1",
        )}
      />
    </>
  );

  if (disabled || !href) {
    return <span aria-disabled="true" className={classes}>{children}</span>;
  }

  if (download) {
    return (
      <a href={href} download className={classes}>
        {content}
      </a>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

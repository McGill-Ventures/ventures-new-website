import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mcgillvc.ca"),
};

export default function GrowthStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gs-root">{children}</div>
  );
}

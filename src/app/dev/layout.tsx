import type { Metadata } from "next";

/** Workshop pages. Kept out of search results and sitemaps. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return children;
}

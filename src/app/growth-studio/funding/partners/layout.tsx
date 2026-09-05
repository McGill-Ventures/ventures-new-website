import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validation Partner Matcher — Growth Studio",
  description:
    "Find partners in the McGill Ventures network who can help you validate your idea with real customers.",
  alternates: { canonical: "https://www.mcgillvc.ca/growth-studio/funding/partners" },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

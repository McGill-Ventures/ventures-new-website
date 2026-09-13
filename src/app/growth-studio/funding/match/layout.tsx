import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding Matcher — Growth Studio",
  description:
    "Answer six questions and get matched to Canadian grants, tax credits, and capital programs that fit your startup's stage, sector, and province.",
  alternates: { canonical: "https://www.mcgillvc.ca/growth-studio/funding/match" },
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}

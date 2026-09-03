import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  LegalSection,
  LegalP,
  LegalList,
  LegalEmail,
} from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Growth Studio",
  description:
    "The terms that apply when you use the Growth Studio website, apply to the program, or work with Growth Studio by McGill Ventures.",
  openGraph: {
    title: "Terms & Conditions — Growth Studio",
    description:
      "The terms that apply when you use the Growth Studio website, apply to the program, or work with Growth Studio by McGill Ventures.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/terms",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms & Conditions"
      updated="September 2, 2026"
      intro={
        <>
          These terms apply to your use of the Growth Studio pages of this
          website and to your participation in the Growth Studio program run by
          McGill Ventures. By using the site or submitting an application, you
          agree to them. Please read them together with our{" "}
          <Link
            href="/growth-studio/privacy"
            style={{ color: "var(--purple,#3a1fb0)", fontWeight: 700 }}
          >
            Privacy Policy
          </Link>
          .
        </>
      }
    >
      <LegalSection title="1. About Growth Studio">
        <LegalP>
          Growth Studio is a startup consulting program operated by McGill
          Ventures, a student club at McGill University in Montreal, Quebec.
          Our consultants are students. Growth Studio is not a law firm, an
          accounting firm, a registered investment adviser, or a broker, and
          nothing on this site or in our work is legal, tax, accounting, or
          investment advice.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Using this website">
        <LegalP>
          You may use the Growth Studio pages for lawful purposes and in a way
          that does not interfere with the site or with other visitors. You
          agree not to:
        </LegalP>
        <LegalList
          items={[
            "Attempt to gain unauthorized access to the site, its hosting, or any related systems;",
            "Copy, scrape, or reproduce the site’s content for commercial purposes without permission;",
            "Submit false or misleading information through our forms or by email;",
            "Use the site in any way that violates applicable laws.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Applications and engagements">
        <LegalP>
          Submitting a startup intake form or a consultant interest form is a
          request to be considered for the program. It does not guarantee that
          you will be accepted, matched with a team, or offered a role. We
          select startups and consultants at our discretion based on fit,
          capacity, and timing.
        </LegalP>
        <LegalP>
          Consulting engagements with founders are provided free of charge and
          are governed by any engagement agreement or scope document we agree
          on with you at the start of the engagement. Where those documents
          conflict with these terms, the engagement documents apply to that
          engagement.
        </LegalP>
        <LegalP>
          We may pause, reschedule, or end an engagement at any time, for
          example where a startup or consultant is unresponsive, where the
          scope changes materially, or where continuing would not be
          appropriate.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. No guarantee of outcomes">
        <LegalP>
          Our work is intended to help founders make better-informed decisions.
          It is based on the information available to us and on the judgment of
          student consultants at the time of the engagement. We do not guarantee
          that any deliverable will lead to a particular result, including
          raising capital, winning a competition, acquiring customers, or being
          introduced to any investor or partner. Decisions about your business
          remain yours alone.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Confidentiality">
        <LegalP>
          We understand that founders share sensitive information with us. We
          ask our consultants to treat information shared during an engagement
          as confidential and to use it only for that engagement. Specific
          confidentiality obligations, if any, will be set out in the engagement
          documents. Please avoid sending highly sensitive information (such as
          financial account details or unreleased intellectual property) through
          our public forms.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <LegalP>
          The Growth Studio name, logo, and the text, graphics, and design of
          these pages belong to Growth Studio and McGill Ventures. Logos and
          trademarks of partner organizations and of the startups we have worked
          with belong to their respective owners and are shown with permission or
          under fair-use principles; their appearance here does not imply
          endorsement of Growth Studio by those organizations.
        </LegalP>
        <LegalP>
          Unless an engagement agreement says otherwise, deliverables we produce
          for a founder during an engagement may be used by that founder for
          their business. We may describe the engagement in general terms (for
          example, naming the startup and the type of work) in our own
          materials, and will ask before publishing any testimonial or detailed
          case study.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Third-party websites and services">
        <LegalP>
          Our pages link to third-party websites and services, including Google
          Forms, Instagram, LinkedIn, and the sites of partners and startups.
          Those sites are not under our control, and we are not responsible for
          their content, availability, or practices. Your use of them is subject
          to their own terms.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Disclaimer and limitation of liability">
        <LegalP>
          This website and the Growth Studio program are provided “as is” and
          “as available”, without warranties of any kind, whether express or
          implied. To the fullest extent permitted by law, Growth Studio, McGill
          Ventures, and their members, directors, consultants, and advisors will
          not be liable for any indirect, incidental, or consequential loss, or
          for any loss of profits, revenue, data, or business opportunity,
          arising out of your use of the site or participation in the program.
        </LegalP>
        <LegalP>
          Nothing in these terms limits any liability that cannot be limited
          under the laws of Quebec or Canada, including under the Civil Code of
          Québec or the Consumer Protection Act where they apply.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <LegalP>
          These terms are governed by the laws of the Province of Quebec and the
          federal laws of Canada applicable in Quebec. Any dispute relating to
          these terms or to the Growth Studio program will be brought before the
          courts of the judicial district of Montreal, Quebec, unless applicable
          law provides otherwise.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. Changes to these terms">
        <LegalP>
          We may update these terms from time to time. When we do, we will
          change the “Last updated” date at the top of this page. Continued use
          of the site or participation in the program after an update means you
          accept the revised terms.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. Contact us">
        <LegalP>
          Questions about these terms can be sent to <LegalEmail />. Growth
          Studio is operated by McGill Ventures in Montreal, Quebec, Canada.
        </LegalP>
      </LegalSection>
    </LegalPage>
  );
}

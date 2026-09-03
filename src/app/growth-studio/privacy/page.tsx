import type { Metadata } from "next";
import LegalPage, {
  LegalSection,
  LegalP,
  LegalList,
  LegalEmail,
} from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Growth Studio",
  description:
    "How Growth Studio by McGill Ventures collects, uses, and protects personal information from founders, students, and partners.",
  openGraph: {
    title: "Privacy Policy — Growth Studio",
    description:
      "How Growth Studio by McGill Ventures collects, uses, and protects personal information from founders, students, and partners.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/privacy",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Privacy Policy"
      updated="September 2, 2026"
      intro={
        <>
          Growth Studio is a startup consulting program run by McGill Ventures,
          a student club at McGill University in Montreal, Quebec. This policy
          explains what personal information we collect through the Growth
          Studio pages of this website and our application forms, how we use
          it, and the choices you have.
        </>
      }
    >
      <LegalSection title="1. Who we are">
        <LegalP>
          In this policy, “Growth Studio”, “we”, “us”, and “our” refer to the
          Growth Studio program operated by McGill Ventures. Growth Studio is a
          student-run initiative and is not a law firm, an accounting firm, or a
          registered investment adviser.
        </LegalP>
        <LegalP>
          The person responsible for the protection of personal information at
          Growth Studio can be reached at <LegalEmail />.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. What this policy covers">
        <LegalP>
          This policy applies to the Growth Studio section of{" "}
          <strong>www.mcgillvc.ca</strong> (all pages under /growth-studio) and
          to the information you send us through our application and interest
          forms or by email. Other sections of the McGill Ventures website, and
          any third-party websites we link to, may have their own privacy
          practices.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Information we collect">
        <LegalP>
          <strong>Information you give us.</strong> When you fill out our
          startup intake form or consultant interest form, or when you email
          us, you may provide information such as:
        </LegalP>
        <LegalList
          items={[
            "Your name, email address, and other contact details;",
            "Information about your startup, such as its name, stage, sector, and the support you are looking for;",
            "For prospective consultants, your program of study, year, background, and interests;",
            "Anything else you choose to include in your submission or message.",
          ]}
        />
        <LegalP>
          <strong>Information collected automatically.</strong> The Growth
          Studio pages do not set their own cookies and do not run analytics or
          advertising trackers. Our hosting provider may automatically record
          standard technical information when you visit, such as your IP
          address, browser type, device type, and the pages you request. This
          information is used to keep the site secure and running reliably.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. How we use your information">
        <LegalP>We use the information described above to:</LegalP>
        <LegalList
          items={[
            "Review and respond to startup applications and consultant applications;",
            "Match founders with a consulting team and run engagements;",
            "Communicate with you about your application, an engagement, or an event;",
            "Notify you when applications or recruitment open, if you asked us to;",
            "Operate, secure, and improve the Growth Studio website and program.",
          ]}
        />
        <LegalP>
          We will not use your information for purposes that are materially
          different from these without asking for your consent.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. How we share information">
        <LegalP>We do not sell personal information. We may share it with:</LegalP>
        <LegalList
          items={[
            "Members of the Growth Studio and McGill Ventures team who need it to review applications and deliver the program;",
            "Service providers that help us operate, such as Google (our forms are hosted on Google Forms) and our website hosting provider. These providers process information on our behalf and under their own privacy policies;",
            "Mentors, advisors, or partner organizations in the McGill Ventures network, only where it is relevant to supporting your startup and you have agreed to the introduction;",
            "Authorities or other parties where required by law or to protect the rights, safety, or property of Growth Studio, McGill Ventures, or others.",
          ]}
        />
        <LegalP>
          Some of our service providers store information on servers outside of
          Quebec and Canada. Where that happens, the information may be subject
          to the laws of those jurisdictions.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. How long we keep information">
        <LegalP>
          We keep application and engagement information for as long as it is
          needed to run the program and to keep a record of the startups and
          consultants we have worked with. If you would like your information
          removed sooner, you can ask us at any time using the contact details
          below.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Your rights and choices">
        <LegalP>
          Under Quebec and Canadian privacy law, you have the right to ask what
          personal information we hold about you, to request that it be
          corrected, and, in many cases, to request that it be deleted or that
          we stop using it. You can also withdraw consent for future
          communications at any time.
        </LegalP>
        <LegalP>
          To exercise any of these rights, email <LegalEmail />. We will respond
          within a reasonable time and may need to verify your identity before
          acting on a request.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Third-party links">
        <LegalP>
          Our pages link to third-party websites and services, including Google
          Forms, Instagram, LinkedIn, and the websites of partner organizations
          and startups we have worked with. We are not responsible for the
          privacy practices of those sites, and we encourage you to read their
          policies.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. Security">
        <LegalP>
          We take reasonable steps to protect personal information from loss,
          misuse, and unauthorized access, including limiting who on our team
          can access application submissions. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute
          security.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. Children">
        <LegalP>
          Growth Studio is intended for adults, including university students
          and startup founders. We do not knowingly collect personal information
          from anyone under the age of 16. If you believe we have done so,
          please contact us and we will delete it.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. Changes to this policy">
        <LegalP>
          We may update this policy from time to time. When we do, we will
          change the “Last updated” date at the top of this page. Continued use
          of the site or our forms after an update means you accept the revised
          policy.
        </LegalP>
      </LegalSection>

      <LegalSection title="12. Contact us">
        <LegalP>
          Questions, requests, or concerns about this policy or your personal
          information can be sent to <LegalEmail />. Growth Studio is operated
          by McGill Ventures in Montreal, Quebec, Canada.
        </LegalP>
      </LegalSection>
    </LegalPage>
  );
}

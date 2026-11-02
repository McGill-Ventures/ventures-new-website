import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EMAIL = "mcgillventuresclub@gmail.com";
const DESCRIPTION =
  "How the McGill Ventures CV Catalogue collects, uses, shares, and deletes member CVs.";

export const metadata: Metadata = {
  title: "CV Catalogue Privacy Policy | McGill Ventures",
  description: DESCRIPTION,
  alternates: { canonical: "/cv-catalogue/privacy" },
  openGraph: {
    title: "CV Catalogue Privacy Policy | McGill Ventures",
    description: DESCRIPTION,
    url: "/cv-catalogue/privacy",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-heading text-2xl text-purple-950">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-purple-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Email() {
  return (
    <a href={`mailto:${EMAIL}`} className="font-semibold text-purple-700 underline underline-offset-4">
      {EMAIL}
    </a>
  );
}

export default function CvCataloguePrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/cv-catalogue/privacy" />

      <main className="px-6 py-14 md:px-12 lg:px-24">
        <article className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-purple-900">
          <h1 className="mb-4 font-display text-5xl text-purple-950 md:text-6xl">CV Catalogue Privacy Policy</h1>
          <p className="mb-12 text-purple-800/70">Last updated: November 3, 2026</p>

          <Section title="Who we are">
            <p>
              McGill Ventures is a student club at McGill University in Montreal, Quebec. The CV Catalogue is
              our app where members upload a CV so we can share it with venture capital firms and startups that
              are hiring.
            </p>
            <p>
              The person responsible for protecting personal information at McGill Ventures can be reached at{" "}
              <Email />.
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              When you sign in with Google, Google shares your name, email address, and profile picture with us.
              We use only your email address.
            </p>
            <p>When you fill in your profile, we collect:</p>
            <List
              items={[
                "Your name",
                "Your major or majors, and your graduation year",
                "Your interests, such as VC/Finance or Engineering",
                "Your CV, as a PDF",
                "The date and time you agreed to have your CV shared",
              ]}
            />
            <p>
              The app sets only a sign-in cookie. It runs no analytics or advertising trackers. Our hosting
              provider records standard technical information, such as IP addresses and pages requested, to keep
              the app secure.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              We combine profiles into PDF catalogues and send them to venture capital firms and startups looking
              for talent. A catalogue can hold every profile, or only those matching what a firm asked for, such as
              a major or graduation year. Some firms pay McGill Ventures a fee to receive a catalogue. Our admins
              also use the list to confirm that each profile belongs to a McGill Ventures member. We do not use
              your information for anything else without asking you first.
            </p>
          </Section>

          <Section title="Who sees it">
            <p>Your information is shared with:</p>
            <List
              items={[
                "McGill Ventures admins, who review profiles and export the catalogue.",
                "Venture capital firms and startups that receive a catalogue, some of which pay McGill Ventures for it. It includes your name, email address, majors, graduation year, interests, and CV.",
                "Supabase, which stores the database and CV files on servers in Canada and runs sign-in.",
                "Vercel, which hosts the app and may process requests on servers outside Canada.",
                "Google, which handles sign-in.",
              ]}
            />
            <p>CV files are stored privately. They have no public links.</p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep your profile and CV until you delete them. Deleting your profile in the app removes your
              profile and CV file right away. To also remove your sign-in record, email us.
            </p>
            <p>
              Each exported catalogue is deleted from our storage within minutes. Copies already sent to
              recruiters cannot be recalled.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under Quebec and Canadian privacy law, you can ask what personal information we hold about you, ask
              us to correct it, and ask us to delete it. You can update or delete your profile yourself at any
              time in the app, which also withdraws your consent for future catalogues.
            </p>
            <p>
              For anything else, email <Email />. We may need to confirm your identity before acting on a
              request.
            </p>
          </Section>

          <Section title="Changes">
            <p>When we update this policy, we change the date at the top of this page.</p>
          </Section>

          <Section title="Contact">
            <p>
              Send questions or requests about this policy to <Email />.
            </p>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

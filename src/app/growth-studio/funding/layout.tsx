import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

/**
 * Wraps every funding-tool page (landing, matcher, partner matcher, admin) in
 * the Growth Studio nav and footer so the tool reads as part of the site.
 */
export default function FundingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav active={null} ctaHref="mailto:hello.growthstudio@gmail.com" />
      {children}
      <Footer />
      <Interactions />
    </>
  );
}

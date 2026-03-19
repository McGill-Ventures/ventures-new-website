import Link from "next/link";
import { Icon } from "@/components/ui";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
  ],
  resources: [
    { label: "Programs", href: "/programs" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact Us", href: "/contact" },
  ]
};

const contactInfo = {
  email: "hello@mcgillvc.ca",
  location: "Montreal, QC"
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-20 md:px-12 lg:px-24 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-purple-900 mb-6 font-heading">McGill Ventures</div>
            <p className="text-purple-800 leading-relaxed font-body">
              Building the companies of tomorrow through strategic partnerships and visionary leadership.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Company</h4>
            <div className="space-y-3 text-purple-800 font-body">
              {footerLinks.company.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="hover:text-purple-950 transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Resources</h4>
            <div className="space-y-3 text-purple-800 font-body">
              {footerLinks.resources.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="hover:text-purple-950 transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-purple-800 font-body">
              <div className="flex items-center">
                <Icon name="email" className="mr-2 text-purple-600" size="sm" />
                {contactInfo.email}
              </div>
              <div className="flex items-center">
                <Icon name="location" className="mr-2 text-purple-600" size="sm" />
                {contactInfo.location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-200 pt-8 text-center text-purple-700 font-body">
          © {currentYear} McGill Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
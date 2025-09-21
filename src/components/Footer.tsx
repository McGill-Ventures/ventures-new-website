import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-20 md:px-12 lg:px-24 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-purple-900 mb-6 font-heading">McGill Ventures</div>
            <p className="text-purple-800 leading-relaxed font-body">
              Investing in innovation and building the companies of tomorrow through strategic partnerships and visionary leadership.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Company</h4>
            <div className="space-y-3 text-purple-800 font-body">
              <div><Link href="/about" className="hover:text-purple-950 transition-colors cursor-pointer">About</Link></div>
              <div><Link href="/portfolio" className="hover:text-purple-950 transition-colors cursor-pointer">Portfolio</Link></div>
              <div><Link href="/team" className="hover:text-purple-950 transition-colors cursor-pointer">Team</Link></div>
              <div><a href="#" className="hover:text-purple-950 transition-colors cursor-pointer">Careers</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Resources</h4>
            <div className="space-y-3 text-purple-800 font-body">
              <div><Link href="/programs" className="hover:text-purple-950 transition-colors cursor-pointer">Programs</Link></div>
              <div><Link href="/sponsors" className="hover:text-purple-950 transition-colors cursor-pointer">Sponsors</Link></div>
              <div><Link href="/contact" className="hover:text-purple-950 transition-colors cursor-pointer">Contact Us</Link></div>
              <div><a href="#" className="hover:text-purple-950 transition-colors cursor-pointer">News</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-purple-950 mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-purple-800 font-body">
              <div>hello@mcgillvc.ca</div>
              <div>+1 (514) 555-0123</div>
              <div>Montreal, QC</div>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-200 pt-8 text-center text-purple-700 font-body">
          © 2025 McGill Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
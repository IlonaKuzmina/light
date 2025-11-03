import Link from 'next/link';

interface FooterLink {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinks: FooterLink[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Equipment Rental', href: '#' },
      { label: 'Technical Support', href: '#' },
      { label: 'Custom Solutions', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12 sm:mb-16">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-xs">L</span>
                </div>
                <span className="text-white font-bold tracking-tight">
                  Light<span className="text-green-500">Shift</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} LightShift. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="text-sm font-medium">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="text-sm font-medium">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

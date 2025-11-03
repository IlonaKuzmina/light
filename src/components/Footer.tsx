import Link from "next/link";

interface FooterLink {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Equipment Rental", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Custom Solutions", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
      </div> */}
    </footer>
  );
}

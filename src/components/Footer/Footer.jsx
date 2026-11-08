const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ruturaaj-RD",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruturaj-deshpande51804",
  }
];

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5">
      <div className="mx-auto max-w-7xl py-8 sm:py-10">

        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Ruturaj Deshpande<span className="text-blue-500">.</span>
            </a>

            <p className="mt-2 text-sm text-gray-400">
              Building practical applications with clean code and thoughtful design.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ruturaj Deshpande. All rights reserved.
          </p>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/files/Ruturaj_Deshpande.pdf"
              download="Ruturaj_Deshpande.pdf"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Resume
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
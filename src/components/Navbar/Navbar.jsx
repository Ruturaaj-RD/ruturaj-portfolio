import { useEffect, useState } from "react";

import { siteConfig } from "../../data/siteConfig";

import useActiveSection from "../../hooks/useActiveSection";


const navLinks = [
  { label: "Home", href: "" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection();


  const closeMenu = () => {
    setMenuOpen(false);
  };


  // Close mobile menu with Escape

  useEffect(() => {

    if (!menuOpen) return;

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [menuOpen]);


  const getLinkClass = (isActive) => {

    return `text-sm font-medium transition-colors duration-200
      focus-visible:outline-2 focus-visible:outline-offset-4
      focus-visible:outline-accent
      ${isActive
        ? "text-accent"
        : "text-muted hover:text-accent"
      }`;

  };


  return (

    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl">

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">


        {/* Logo */}

        <a
          href=""
          onClick={closeMenu}
          className="font-display text-2xl font-bold tracking-tight"
        >
          RD<span className="text-accent">.</span>
        </a>


        {/* Desktop Navigation */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >

          {navLinks.map((link) => {

            const isActive =
              activeSection === link.href.slice(1);

            return (

              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={getLinkClass(isActive)}
              >
                {link.label}
              </a>

            );

          })}

        </nav>


        {/* GitHub Button */}

        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-accent/40 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:inline-flex"
        >
          GitHub ↗
        </a>

        {/* Mobile Menu Toggle */}

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-foreground transition hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
        >

          {menuOpen ? (

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>

          ) : (

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>

          )}

        </button>


        {/* Mobile Navigation */}

        {menuOpen && (

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-full border-b border-line bg-surface p-5 shadow-2xl lg:hidden"
          >

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => {

                const isActive =
                  activeSection === link.href.slice(1);

                return (

                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-white/5 hover:text-accent"
                      }`}
                  >
                    {link.label}
                  </a>

                );

              })}

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full border border-accent/40 px-5 py-3 text-center text-sm font-semibold text-accent"
              >
                GitHub ↗
              </a>

            </div>

          </nav>

        )}

      </div>

    </header>

  );

}

export default Navbar;
import { useState, useEffect } from "react";
import { Menu, X, FileDown, Github, Linkedin, Mail } from "lucide-react";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";

const navigation = [
  { name: "Capabilities", href: "#capabilities" },
  { name: "Featured Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-[#0b0f19]/70 backdrop-blur-sm border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Abiodun Kayode - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
              AK
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                Abiodun Kayode
              </span>
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                Frontend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions: Socials & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Harbixco"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/agbaje-abiodun/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:agbajeabiodunkay@gmail.com"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="Email Abiodun"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={resume}
              download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={resume}
              download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg sm:hidden"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Harbixco"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/agbaje-abiodun/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-blue-400 rounded-lg bg-slate-800/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:agbajeabiodunkay@gmail.com"
                className="p-2 text-slate-400 hover:text-emerald-400 rounded-lg bg-slate-800/60"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <a
              href={resume}
              download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

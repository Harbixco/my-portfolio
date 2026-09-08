import { useState } from "react";
import { Mail, Github, Linkedin, FileDown, Copy, Check, ArrowUp, ExternalLink } from "lucide-react";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "agbajeabiodunkay@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#060a12] text-white border-t border-slate-800">
      {/* Contact & Recruiter CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <span>GET IN TOUCH</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Looking for a Frontend Engineer who delivers reliable results?
          </h3>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            I am available for full-time engineering roles, high-impact contract positions, and international remote teams.
          </p>

          {/* Quick Contact Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>

            <a
              href={resume}
              download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles Bar */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/Harbixco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (Harbixco)</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>

            <a
              href="https://www.linkedin.com/in/agbaje-abiodun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </a>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Abiodun Kayode. Engineered with React, TypeScript & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

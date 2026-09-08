import { useState } from "react";
import { ArrowDown, FileDown, Github, Linkedin, Mail, Check, Copy, ExternalLink, Code2 } from "lucide-react";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";
import bigPicture from "/Images/bigPicture.png";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const email = "agbajeabiodunkay@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const corePillars = [
    "React & TypeScript Architecture",
    "Scalable Component Systems",
    "RESTful API & Async State",
    "Web Performance Optimization",
  ];

  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-mesh-grid">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for Engineering Roles & Remote Teams
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Abiodun Kayode
            </h1>

            {/* Role & Value Proposition */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 leading-snug mb-6">
              Frontend Engineer building fast, scalable and user-focused web applications with React, TypeScript and modern frontend technologies.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              4+ years of experience building responsive interfaces, integrating APIs, optimizing web performance, and translating product requirements and UI designs into production-ready applications.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={resume}
                download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 text-slate-100 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Recruiter Quick Bar: Verified Links & Email */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Harbixco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>github.com/Harbixco</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <span className="text-slate-700 hidden sm:inline">•</span>

                <a
                  href="https://www.linkedin.com/in/agbaje-abiodun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Visual Presentation & Engineering Focus Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/40 via-indigo-500/20 to-teal-400/30 blur-lg opacity-70" />
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-sm">
                
                {/* Profile Snapshot */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <img
                    src={bigPicture}
                    alt="Abiodun Kayode"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/30 shadow-md"
                  />
                  <div>
                    <div className="text-lg font-bold text-white">Abiodun Kayode</div>
                    <div className="text-xs font-mono text-blue-400">@Harbixco</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-400">4+ Years Engineering Experience</span>
                    </div>
                  </div>
                </div>

                {/* Core Competency Highlights */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      Engineering Disciplines
                    </span>
                    <span className="text-emerald-400">Production Ready</span>
                  </div>

                  <div className="space-y-2.5">
                    {corePillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-medium text-slate-200"
                      >
                        <span>{pillar}</span>
                        <span className="font-mono text-blue-400 text-[11px]">Active</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Tech Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Redux", "Tailwind CSS", "REST APIs", "Node.js", "Vercel", "AWS"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

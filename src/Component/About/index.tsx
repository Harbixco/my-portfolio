import bigPicture from "/Images/bigPicture.png";
import resume from "../../../public/AGBAJE ABIODUN KAYODE.pdf";
import { User, FileDown, Mail, CheckCircle2, Code2, Globe } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "4+ years building production-grade interfaces with React & TypeScript",
    "Deep focus on component modularity, clean code, and predictable state",
    "Experience optimizing web performance and Core Web Vitals",
    "Proven track record collaborating with UX designers, backend teams, and product managers",
    "Experienced with remote international teams and agile sprint cadences",
  ];

  return (
    <section id="about" className="py-10 bg-[#080d1a] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Abiodun Kayode
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Frontend Engineer dedicated to building reliable, high-performance web applications that balance engineering rigor with intuitive user experiences.
          </p>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo & Snapshot (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-teal-500/20 blur-md" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src={bigPicture}
                  alt="Abiodun Kayode"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Abiodun Kayode</span>
                  <span className="text-blue-400 flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Remote / Global Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Engineering Value (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Building scalable frontend architectures from concept to production.
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                I am a Frontend Engineer with over 4 years of experience building fast, maintainable, and user-centric web applications. My engineering approach centers around modern React, strict TypeScript, modular design systems, and resilient API integrations.
              </p>
              <p>
                Having worked across distributed remote teams, technology consultancies, and academic mentoring environments, I bring strong collaboration habits, empathetic code review practices, and a commitment to continuous architectural improvement. I translate complex product roadmaps and Figma design tokens into clean, performant frontend code with zero ambiguity.
              </p>
            </div>

            {/* Engineering Highlights Checklist */}
            <div className="w-full mb-8 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                Key Technical Strengths
              </div>
              <ul className="space-y-2.5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={resume}
                download="AGBAJE_ABIODUN_KAYODE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Full CV</span>
              </a>

              <a
                href="mailto:agbajeabiodunkay@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get in Touch</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

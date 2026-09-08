import { experiences } from "./data";
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 bg-[#080d1a] border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Professional trajectory focused on translating complex design requirements into production web applications, optimizing front-end performance, and collaborating in agile teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-200 shadow-sm shadow-blue-500/50" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-md">
                
                {/* Header: Role, Company & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location} ({exp.type})
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2.5 my-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <span className="text-blue-400 font-bold text-xs mt-1">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used in this role */}
                <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Tech:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Qualifications Card */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Academic Foundation & Certifications</h3>
              <p className="text-xs font-mono text-slate-400">Formal Computer Science Background</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="font-semibold text-slate-200">Higher National Diploma (H.N.D) in Computer Science</div>
              <div className="text-xs text-blue-400 font-mono mt-1">Federal Polytechnic, Ede, Osun State</div>
              <p className="text-xs text-slate-400 mt-2">
                Core coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and Object-Oriented Programming.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="font-semibold text-slate-200 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                National Youth Service Corps (NYSC)
              </div>
              <div className="text-xs text-blue-400 font-mono mt-1">Completed Service: Oct 2024 - Nov 2025</div>
              <p className="text-xs text-slate-400 mt-2">
                Served as Assistant Software Instructor at SQi College of ICT, mentoring developers in frontend architectures and modern web technologies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { categorizedSkills } from "./data";
import { Cpu, Layout, Server, Terminal } from "lucide-react";

export default function Skills() {
  const categoryIcons = [Layout, Cpu, Server, Terminal];

  return (
    <section id="skills" className="py-10 bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Categorized Technical Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Prioritized engineering toolkit centered on modern frontend development, state architectures, and robust web delivery.
          </p>
        </div>

        {/* 4 Categorized Columns / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categorizedSkills.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List within this Category */}
                  <div className="mt-6 divide-y divide-slate-800/80">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-400 border border-slate-700/60">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 sm:text-right max-w-sm">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Production Tested</span>
                  <span className="text-emerald-400">● Verified Competency</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState } from "react";
import { projectsData, ProjectCaseStudy } from "./data";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  AlertCircle,
  Lightbulb,
  UserCheck,
  Wrench,
  CheckCircle2,
  X,
} from "lucide-react";

export default function ProjectSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>("numace");

  const flagshipProject = projectsData.find((p) => p.flagship) || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== flagshipProject.id);

  return (
    <section id="projects" className="py-10 bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Real products built with a focus on system architecture, maintainability, and user experience. Each project details the concrete problem, architectural solution, personal engineering role, technical challenges, and verified outcomes.
          </p>
        </div>

        {/* ================= FLAGSHIP PROJECT HERO ================= */}
        <div className="mb-16 relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Flagship Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-mono font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              FLAGSHIP CASE STUDY
            </div>
            <span className="text-xs font-mono text-slate-400">
              {flagshipProject.category}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Project Media & Tech Architecture */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#070b14] group flex flex-col">
                {/* Browser window top bar */}
                <div className="px-3.5 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-0.5 rounded border border-slate-800/80">
                    {flagshipProject.liveLink ? flagshipProject.liveLink.replace("https://", "").replace(/\/$/, "") : flagshipProject.title}
                  </div>
                  <div className="w-8" />
                </div>
                {/* Image Container with complete fit */}
                <div className="relative w-full aspect-[2/1] bg-[#070b14] flex items-center justify-center overflow-hidden">
                  <img
                    src={flagshipProject.image}
                    alt={flagshipProject.title}
                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Architectural Breakdown Grid */}
              <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Key Architectural Decisions
                </div>
                {flagshipProject.id === "veltrixhub" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Architecture</span>
                      <strong className="text-slate-200">React + TS SPA</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Design System</span>
                      <strong className="text-slate-200">Tailwind CSS</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Motion FX</span>
                      <strong className="text-slate-200">Framer Motion</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Optimization</span>
                      <strong className="text-slate-200">Core Web Vitals</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Lead Funnel</span>
                      <strong className="text-slate-200">Interactive Intake</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Live Production</span>
                      <strong className="text-slate-200">veltrixhub.ng</strong>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Frontend</span>
                      <strong className="text-slate-200">React + TS SPA</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Backend</span>
                      <strong className="text-slate-200">Node / Express</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Database</span>
                      <strong className="text-slate-200">MongoDB</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Security</span>
                      <strong className="text-slate-200">JWT & RBAC</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Media Storage</span>
                      <strong className="text-slate-200">Cloud Storage</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Deployment</span>
                      <strong className="text-slate-200">Vercel & Cloud</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Technical Summary & Pillars */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {flagshipProject.title}
                </h3>
                <p className="text-sm sm:text-base text-blue-300 font-medium mb-6">
                  {flagshipProject.tagline}
                </p>

                <div className="space-y-4 text-sm">
                  {/* Problem */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      The Problem
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {flagshipProject.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      The Architectural Solution
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {flagshipProject.solution}
                    </p>
                  </div>

                  {/* My Role */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5" />
                      What I Personally Built
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {flagshipProject.myRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(flagshipProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-colors"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  {flagshipProject.liveLink && (
                    <a
                      href={flagshipProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  )}
                  {flagshipProject.githubLink && (
                    <a
                      href={flagshipProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OTHER NOTABLE CASE STUDIES ================= */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Additional Technical Case Studies
          </h3>
          <span className="text-xs font-mono text-slate-400">
            {otherProjects.length} Verified Production Apps
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Category Pill above thumbnail - never covers website header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Thumbnail with 2:1 aspect ratio and object-contain so NO text or UI is cropped */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-800/90 aspect-[2/1] bg-[#070b14] mb-4 group flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain object-center transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Overview */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-3 text-xs">
                      <div>
                        <span className="font-mono text-amber-400 block text-[10px] uppercase">
                          Problem:
                        </span>
                        <p className="text-slate-300 text-xs mt-0.5">{project.problem}</p>
                      </div>

                      <div>
                        <span className="font-mono text-emerald-400 block text-[10px] uppercase">
                          My Role:
                        </span>
                        <p className="text-slate-300 text-xs mt-0.5">{project.myRole}</p>
                      </div>

                      <div>
                        <span className="font-mono text-blue-400 block text-[10px] uppercase">
                          Outcome:
                        </span>
                        <p className="text-slate-300 text-xs mt-0.5">{project.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? "Collapse" : "Quick Breakdown"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(project)}
                      className="px-2.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      Case Study
                    </button>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="Live Preview"
                        aria-label={`Live Demo of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ================= DEEP DIVE CASE STUDY MODAL ================= */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl text-left">
            
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                Engineering Case Study • {selectedCaseStudy.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedCaseStudy.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {selectedCaseStudy.tagline}
              </p>
            </div>

            {/* Tech Stack Banner */}
            <div className="mb-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
              {selectedCaseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 6 Structured Pillars */}
            <div className="space-y-5 text-sm">
              {/* Problem */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/20">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  1. The Problem
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  2. Architectural Solution
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* My Role */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-blue-500/20">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  3. What I Personally Built
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.myRole}
                </p>
              </div>

              {/* Engineering Challenges */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-purple-500/20">
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  4. Engineering Challenges & Solutions
                </div>
                <ul className="space-y-2">
                  {selectedCaseStudy.challenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-purple-400 font-mono text-xs mt-0.5">↳</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-teal-500/20">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  5. Technical Outcome
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedCaseStudy.outcome}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedCaseStudy.liveLink && (
                  <a
                    href={selectedCaseStudy.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow transition-colors"
                  >
                    <span>View Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedCaseStudy.githubLink && (
                  <a
                    href={selectedCaseStudy.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

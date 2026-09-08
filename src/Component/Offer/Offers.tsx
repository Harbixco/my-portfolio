import {
  Code2,
  Layers,
  Network,
  Cpu,
  Smartphone,
  Gauge,
  GitBranch,
  CloudUpload,
  Bug,
} from "lucide-react";

export default function Offers() {
  const capabilities = [
    {
      title: "React & TypeScript",
      icon: Code2,
      tag: "Type Safety & Maintainability",
      description:
        "Building type-safe, maintainable web applications using modern React patterns, strict TypeScript interfaces, and custom hooks to eliminate runtime errors.",
    },
    {
      title: "Component Architecture",
      icon: Layers,
      tag: "Scalable Design Systems",
      description:
        "Structuring modular, highly reusable component systems with atomic separation of concerns, composable layouts, and accessible UI primitives.",
    },
    {
      title: "API Integration & Async Data",
      icon: Network,
      tag: "Resilient Data Layer",
      description:
        "Integrating RESTful endpoints with centralized HTTP clients, request interceptors, robust error boundaries, and optimistic UI state handling.",
    },
    {
      title: "State Management",
      icon: Cpu,
      tag: "Predictable Data Flow",
      description:
        "Managing complex application state using Redux Toolkit and React Context, effectively separating server-side cache from client UI state.",
    },
    {
      title: "Responsive UI Engineering",
      icon: Smartphone,
      tag: "Mobile-First Design",
      description:
        "Engineering pixel-perfect, mobile-first responsive interfaces using Tailwind CSS and modern CSS Grid/Flexbox with cross-browser fidelity.",
    },
    {
      title: "Performance Optimization",
      icon: Gauge,
      tag: "Core Web Vitals",
      description:
        "Improving load times and runtime smoothness through route code-splitting, lazy loading, asset compression, and memoization to prevent unnecessary re-renders.",
    },
    {
      title: "Git & Collaborative Workflows",
      icon: GitBranch,
      tag: "Version Control Discipline",
      description:
        "Collaborating across teams using structured Git workflows, atomic commits, feature branches, and thorough pull request reviews.",
    },
    {
      title: "Cloud Deployment",
      icon: CloudUpload,
      tag: "Production Delivery",
      description:
        "Deploying and managing production builds across platforms like Vercel and AWS with automated deployment triggers and secure environment configuration.",
    },
    {
      title: "Debugging & Quality Assurance",
      icon: Bug,
      tag: "Root Cause Resolution",
      description:
        "Diagnosing and resolving UI regressions and edge cases using Chrome DevTools, performance profilers, network inspection, and systematic verification.",
    },
  ];

  return (
    <section id="capabilities" className="py-10 bg-[#080d1a] border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>ENGINEERING DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work as an Engineer
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            I approach frontend development as an engineering discipline—prioritizing robust architecture, type safety, predictable state, and optimal performance over superficial styling.
          </p>
        </div>

        {/* 9 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Standard Engineering Practice</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const categorizedSkills: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Core competency in building performant, type-safe, responsive web applications",
    skills: [
      {
        name: "React",
        level: "Advanced",
        description: "SPA architecture, hooks, lifecycle management, performance memoization, context.",
      },
      {
        name: "TypeScript",
        level: "Proficient",
        description: "Strict typing, generic components, interface contracts, error reduction.",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        description: "Async/await, closures, promises, event loop, DOM manipulation.",
      },
      {
        name: "HTML5",
        level: "Semantic",
        description: "Clean semantic markup, SEO tags, ARIA accessibility (a11y) standards.",
      },
      {
        name: "CSS3",
        level: "Advanced",
        description: "Flexbox, CSS Grid, responsive media queries, CSS variables, keyframe animations.",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Design system implementation, utility patterns, dark mode, custom plugins.",
      },
    ],
  },
  {
    title: "State & Data Management",
    subtitle: "Orchestrating complex UI workflows and server-cache synchronization",
    skills: [
      {
        name: "Redux & Redux Toolkit",
        level: "Proficient",
        description: "Global store configuration, slices, asynchronous thunks, immutable state updates.",
      },
      {
        name: "Firebase",
        level: "Proficient",
        description: "Realtime Database, Firestore queries, authentication listeners, cloud rules.",
      },
    ],
  },
  {
    title: "Backend & API Integration",
    subtitle: "Full-stack literacy for seamless REST integration and backend orchestration",
    skills: [
      {
        name: "Node.js",
        level: "Proficient",
        description: "Event-driven runtime, asynchronous I/O, file handling, backend microservices.",
      },
      {
        name: "Express.js",
        level: "Proficient",
        description: "REST API routing, authentication middleware, error handling, CORS.",
      },
      {
        name: "MongoDB",
        level: "Proficient",
        description: "Document schema design, Mongoose models, aggregation pipelines, queries.",
      },
    ],
  },
  {
    title: "Deployment & Engineering Tools",
    subtitle: "Modern development workflows, version control, and cloud delivery pipelines",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        description: "Version control, branching workflows, pull requests, merge conflict resolution.",
      },
      {
        name: "Vercel",
        level: "Proficient",
        description: "Continuous deployments, edge preview environments, custom domains, analytics.",
      },
      {
        name: "AWS",
        level: "Working Knowledge",
        description: "S3 static hosting, CloudFront CDN distribution, IAM credentials.",
      },
      {
        name: "Postman",
        level: "Proficient",
        description: "API testing, endpoint validation, header inspection, mock server workflows.",
      },
    ],
  },
];

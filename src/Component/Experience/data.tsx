export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "NimbleByte Global",
    role: "Front End Developer",
    period: "Nov 2023 - April 2024",
    location: "Lagos State, Nigeria",
    type: "Remote",
    achievements: [
      "Collaborated with UI/UX designers to translate interface specifications and component designs into modular, production-ready React applications.",
      "Diagnosed client-side processing and rendering bottlenecks, refining front-end scripts to improve asset loading speeds and runtime smoothness.",
      "Implemented structured state management workflows to coordinate dynamic data dashboards and interactive user interfaces.",
      "Configured build outputs and managed static web application deployment on AWS cloud infrastructure.",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "AWS", "REST APIs"],
  },
  {
    company: "SQi College of ICT",
    role: "Assistant Software Instructor",
    period: "April 2024 - Nov 2025",
    location: "Ogbomoso, Oyo State, Nigeria",
    type: "Onsite (NYSC)",
    achievements: [
      "Delivered technical workshops on modern JavaScript (ES6+), React component architecture, and Git version control workflows.",
      "Mentored junior developers through hands-on debugging sessions, reinforcing semantic HTML, accessibility standards, and responsive design.",
      "Reviewed and audited student codebases, providing constructive feedback on code modularity, state flow, and clean code practices.",
      "Created technical guides and interactive code exercises demonstrating frontend component lifecycles and API consumption.",
    ],
    technologies: ["JavaScript (ES6+)", "React", "Git & GitHub", "HTML5 & CSS3"],
  },
  {
    company: "Expansion Cyber Technologies",
    role: "Front End Developer",
    period: "April 2024 - Sept 2024",
    location: "Osogbo, Osun State, Nigeria",
    type: "Onsite",
    achievements: [
      "Engineered accessible, responsive user interfaces for cybersecurity web products using React, TypeScript, and Tailwind CSS.",
      "Conducted API integration and functional testing to ensure reliable data payload handling, authentication token integrity, and user-friendly error recovery.",
      "Integrated Redux state management to coordinate complex security status panels and multi-tab administrative views.",
      "Maintained version control integrity across multiple concurrent releases using Git branching, code reviews, and conflict resolution.",
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    company: "Digital Creative Dev",
    role: "Front End Developer",
    period: "Jan 2024 - April 2024",
    location: "Lagos State, Nigeria",
    type: "Remote",
    achievements: [
      "Translated product design mockups into functional, mobile-compatible web interfaces using React and TypeScript.",
      "Engineered cross-browser compatibility and fluid responsive layouts across modern mobile and desktop viewports.",
      "Identified, isolated, and resolved UI edge cases and rendering defects through systematic browser DevTools debugging and testing.",
    ],
    technologies: ["React", "TypeScript", "CSS3 / Flexbox", "Cross-Browser Testing"],
  },
  {
    company: "Deebezt Technologies",
    role: "Front End Developer",
    period: "June 2020 - March 2021",
    location: "Lagos State, Nigeria",
    type: "Onsite (Internship)",
    achievements: [
      "Addressed frontend technical support tickets, resolving client-side layout inconsistencies, UI bugs, and broken interactions.",
      "Implemented responsive layouts and component styling using CSS utility frameworks including Tailwind CSS, Bootstrap, and Material UI.",
      "Translated user experience interview findings into actionable interface improvements and responsive design updates.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
];

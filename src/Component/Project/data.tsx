import translator from "/Images/translator.png";
import lawfirm from "/Images/lawfirm.jpg";
import veltrixhub from "/Images/veltrixhub.png";
import nimble from "/Images/nimble.jpg";
import affordable from "/Images/affordable.webp";
import numace from "/Images/numace.webp";
import walexfarms from "/Images/walexfarms.webp";

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  flagship?: boolean;
  tagline: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  techStack: string[];
  problem: string;
  solution: string;
  myRole: string;
  challenges: string[];
  outcome: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "veltrixhub",
    title: "VeltrixHub",
    category: "Digital Agency & Technology Solutions Platform",
    flagship: true,
    tagline:
      "Enterprise-grade corporate digital agency platform showcasing scalable technical solutions, client intake funnels, and verified engineering case studies.",
    image: veltrixhub,
    liveLink: "https://veltrixhub.ng/",
    githubLink: "https://github.com/Harbixco/VeltrixHub",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    problem:
      "Businesses seeking digital growth often struggle to find unified technical consulting and frontend engineering teams capable of delivering high-conversion, scalable web products.",
    solution:
      "Engineered an authoritative corporate digital agency platform presenting specialized service offerings, interactive case study showcases, and seamless consultation intake scheduling.",
    myRole:
      "Architected the complete frontend design system, engineered responsive React components, implemented fluid 60fps page transitions, and optimized performance for high conversion.",
    challenges: [
      "Balancing rich animations and interactive UI showcases while adhering to strict Core Web Vitals performance benchmarks.",
      "Designing a cohesive, high-conversion information architecture that guides prospective enterprise clients seamlessly from service discovery to consultation booking.",
    ],
    outcome:
      "Established a modern, trustworthy corporate digital presence that strengthens market positioning and accelerates qualified client partnerships.",
  },
  {
    id: "numace",
    title: "Numace Coding Academy",
    category: "Full-Stack EdTech & Course Management System",
    tagline:
      "Enterprise-grade learning management system featuring role-based portals, protected coursework delivery, and real-time student-tutor workflows.",
    image: numace,
    liveLink: "https://numaceproject.vercel.app/",
    githubLink: "https://github.com/Harbixco/umace-project",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloud Storage",
      "Tailwind CSS",
    ],
    problem:
      "Distance education programs frequently suffer from fragmented tools—relying on disconnected chat groups, unorganized email submissions, and public file links without access control or progress auditing.",
    solution:
      "Architected an end-to-end learning platform that unifies student course enrollments, lecture modules, graded assignment submissions, and instructor administration into a single secure web application.",
    myRole:
      "Engineered the complete React SPA frontend with role-specific views; developed Node.js/Express backend API services; designed normalized MongoDB schemas for users, courses, and submissions; integrated secure cloud file storage with presigned URLs.",
    challenges: [
      "Enforcing strict Role-Based Access Control (RBAC) across tutors, students, and admins to prevent unauthorized grading or lesson tampering.",
      "Handling multi-megabyte lecture material uploads reliably without blocking the Node.js event loop through direct cloud storage uploads.",
      "Maintaining state consistency across course catalogs and submission review dashboards using resilient error boundaries and token-refresh interceptors.",
    ],
    outcome:
      "Delivered a production-ready educational platform with intuitive tutor/student workflows, zero token leakage, instant course filtering, and structured assignment tracking.",
  },
  {
    id: "sterling-chambers",
    title: "Sterling Chambers",
    category: "Corporate Legal Services & Litigation Platform",
    tagline:
      "Prestigious corporate legal website featuring structured practice area overviews, attorney highlights, and direct consultation scheduling.",
    image: lawfirm,
    liveLink: "https://law-firm-blush.vercel.app/",
    githubLink: "https://github.com/Harbixco/Law-firm",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Vercel",
    ],
    problem:
      "Commercial law firms require an authoritative, highly credible digital presence to communicate specialized litigation expertise and attract high-value corporate clients.",
    solution:
      "Engineered a distinguished corporate legal platform with interactive practice area overviews, attorney profiles, and direct consultation booking workflows.",
    myRole:
      "Developed the complete React frontend, implemented responsive consultation booking forms, and structured a clean, accessible design system.",
    challenges: [
      "Ensuring high accessibility and readability across dense legal service descriptions and attorney credentials.",
      "Implementing client-side form validation and anti-spam protection for confidential consultation inquiries.",
    ],
    outcome:
      "Enhanced firm authority and established a professional digital channel driving qualified corporate dispute consultations.",
  },
  {
    id: "walexfarms",
    title: "Walex Farms & Agro-Services",
    category: "Commercial Agriculture & Agro-Allied Platform",
    tagline:
      "Modern agribusiness web platform showcasing sustainable farming operations, produce catalogs, and corporate partnership channels.",
    image: walexfarms,
    liveLink: "https://agrowalexfarms.vercel.app/",
    githubLink: "https://github.com/Harbixco/walexfarms",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Vercel",
    ],
    problem:
      "Agricultural enterprises often rely on fragmented informal sales channels, lacking a centralized digital platform to communicate farming operations and handle wholesale produce requests.",
    solution:
      "Created a clean, modern agricultural website highlighting farm operations, produce supply categories, and direct partnership inquiry channels.",
    myRole:
      "Led frontend engineering, responsive product catalog layout, wholesale quote inquiry flows, and mobile performance optimization.",
    challenges: [
      "Optimizing high-resolution agricultural photography for rapid loading across rural and low-bandwidth mobile connections.",
      "Structuring clear inquiry forms tailored for bulk corporate produce procurement.",
    ],
    outcome:
      "Established online credibility and opened clear digital channels for corporate agricultural buyer inquiries.",
  },
  {
    id: "nimblebyte",
    title: "NimbleByte Global",
    category: "Enterprise Technology Solutions & Consulting",
    tagline:
      "High-performance corporate web platform designed for enterprise tech consulting, solution showcases, and client intake.",
    image: nimble,
    liveLink: "https://nimble-byte.com/",
    githubLink: "https://github.com/Harbixco",
    techStack: ["React", "Tailwind CSS", "Node.js", "AWS CloudFront", "REST API"],
    problem:
      "An enterprise technology consulting firm required a modernized digital web presence to showcase technical capabilities and facilitate business inquiries.",
    solution:
      "Constructed a high-performance, modular React web application featuring dynamic case study views, responsive service catalogs, and interactive inquiry flows.",
    myRole:
      "Engineered frontend architecture, resolved loading latency bottlenecks, optimized core assets, and deployed the production application on AWS infrastructure.",
    challenges: [
      "Diagnosing and resolving client-side rendering bottlenecks to achieve fast first-contentful paint across global regions.",
      "Translating complex Figma enterprise design specs into maintainable, pixel-accurate Tailwind utility components.",
    ],
    outcome:
      "Deployed a resilient web application on AWS infrastructure with high Lighthouse performance scores and polished responsive design.",
  },
  {
    id: "affordable",
    title: "Affordable Gadgets Hub",
    category: "Consumer Electronics E-Commerce Retail",
    tagline:
      "Responsive gadget retail application with real-time specification filtering, search indexing, and client-side cart persistence.",
    image: affordable,
    liveLink: "https://affordablegadgetshub.vercel.app/",
    githubLink: "https://github.com/Harbixco/affordablegadgetshub",
    techStack: ["React", "TypeScript", "Tailwind CSS", "LocalStorage", "Vercel"],
    problem:
      "Electronics shoppers demand instantaneous product comparisons and filter responsiveness across specifications without tedious page reloads.",
    solution:
      "Engineered an interactive e-commerce product catalog with instant client-side filtering, multi-category facets, and persistent cart state management.",
    myRole:
      "Built the complete React & TypeScript application, created type-safe product models, implemented faceted filtering logic, and styled the UI.",
    challenges: [
      "Maintaining instantaneous search response times while filtering across multiple product parameters simultaneously.",
      "Synchronizing client cart state reliably with browser storage across tabs and sessions.",
    ],
    outcome:
      "Delivered a fluid shopping experience with zero input lag during active filtering and full mobile shopping responsiveness.",
  },
  {
    id: "translator",
    title: "Language Translator System",
    category: "Utility Web Application & API Integration",
    tagline:
      "Real-time multilingual translation utility built with resilient async API integration and input debouncing.",
    image: translator,
    liveLink: "https://language-translators-zeta.vercel.app/",
    githubLink: "https://github.com/Harbixco/Language-Translator",
    techStack: ["React", "RESTful APIs", "Tailwind CSS", "Vercel"],
    problem:
      "Translating text quickly between languages often suffers from slow network latency, API rate-limit lockouts, and cluttered interfaces.",
    solution:
      "Designed a clean, focused translation tool with automated debouncing, instant language swapping, and comprehensive network retry handling.",
    myRole:
      "Implemented the frontend application, connected external translation endpoints, and created an accessible, distraction-free user interface.",
    challenges: [
      "Designing an intelligent debounce pipeline to eliminate redundant API requests during continuous user typing.",
      "Handling HTTP rate-limits and error responses gracefully with clear user notifications.",
    ],
    outcome:
      "Lightweight, snappy translation web app deployed on Vercel with responsive desktop and mobile support.",
  },
];

import { useState, useEffect } from "react";
import { images } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Language Translator System",
      desc: "Web app for translating text between multiple languages in real-time",
      features: ["Multi-language", "Fast response", "Clean UI"],
      image: images.first,
      link: "https://language-translators-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Trashcycle",
      desc: "Recycling and waste management awareness platform",
      features: ["Eco-focused", "Responsive", "User-friendly"],
      image: images.second,
      link: "https://trashcycle.vercel.app/",
    },
    {
      id: 3,
      title: "Korpeatech Technologies",
      desc: "Corporate website for showcasing tech services and solutions",
      features: ["Business-focused", "Modern UI", "Fast loading"],
      image: images.fourth,
      link: "https://korpeatech.com/",
    },
    {
      id: 4,
      title: "Nimblebyte Global",
      desc: "Responsive business website for a tech solutions company",
      features: ["Responsive", "Modern UI", "Conversion-focused"],
      image: images.third,
      link: "https://nimble-byte.com/",
    },
    {
      id: 5,
      title: "Nimblebash",
      desc: "Event platform with host & guest onboarding system",
      features: ["User roles", "Onboarding flow", "Mobile-friendly"],
      image: images.fifth,
      link: "https://nimblebash.com/onboarding",
    },
    {
      id: 6,
      title: "Nexoral Hub",
      desc: "E-commerce platform for browsing and purchasing affordable gadgets",
      features: ["Product catalog", "Responsive design", "Smooth UX"],
      image: images.sixth,
      link: "https://affordablegadgetshub.vercel.app/",
    },
  ];

  return (
    <div className="px-4 md:px-20">
      {/* Header */}
      <h1 className="mb-8 text-xl font-bold text-[#1D6EC2] md:text-3xl">
        SELECTED PROJECTS
      </h1>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos={
              index % 3 === 0
                ? "fade-up"
                : index % 2 === 0
                ? "fade-right"
                : "fade-left"
            }
            data-aos-delay={index * 100}
            className="group rounded-2xl bg-[#f5f5f5] p-4 shadow-sm transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[300px]"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h2 className="text-sm font-bold md:text-lg">
                {project.title}
              </h2>

              <p className="text-xs text-gray-500 md:text-sm">
                {project.desc}
              </p>

              {/* Features */}
              <p className="mt-2 text-[11px] text-gray-400 md:text-xs">
                👉 {project.features.join(" • ")}
              </p>

              {/* Expandable Details */}
              {activeId === project.id && (
                <div className="mt-2 text-xs text-gray-600">
                  Built with focus on performance, scalability, and seamless user
                  experience to solve real-world problems effectively.
                </div>
              )}

              {/* Buttons */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() =>
                    setActiveId(
                      activeId === project.id ? null : project.id
                    )
                  }
                  className="text-xs text-gray-600 transition hover:text-black hover:underline md:text-sm"
                >
                  {activeId === project.id
                    ? "Hide Details"
                    : "View Details"}
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#1D6EC2] px-4 py-1.5 text-xs text-white transition hover:bg-blue-700 md:text-sm"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
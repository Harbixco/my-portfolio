import Header from "../Header";
import HomePage from "./HomePage";
import Offers from "../Offer/Offers";
import Project from "../Project";
import Experience from "../Experience";
import Skills from "../Skill/Skills";
import About from "../About";
import Footer from "../Footer";

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="grow">
        {/* 1. Hero Section */}
        <HomePage />

        {/* 2. Engineering Capabilities / How I Work */}
        <Offers />

        {/* 3. Featured Projects & Case Studies */}
        <Project />

        {/* 4. Professional Engineering Experience */}
        <Experience />

        {/* 5. Categorized Skills */}
        <Skills />

        {/* 6. Professional About & Technical Philosophy */}
        <About />
      </main>

      {/* 7. Footer & Direct Contact */}
      <Footer />
    </div>
  );
}

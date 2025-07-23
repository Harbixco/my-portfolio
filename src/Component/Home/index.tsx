// import Home from "../Home";
import About from "../About";
import Experience from "../Experience";
import Project from "../Project";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "./HomePage";
import Skills from "../Skill/Skills";

export default function Index() {
  return (
    <>
      <Header />

      <div>
        {/* HOME COMPONENT*/}
        <div>
          <HomePage />
        </div>

         <div>
          <Skills />
        </div>
        

        {/* PROJECT COMPONENT*/}
        <div id="Project" className="my-10">
          <Project />
        </div>

        {/* EXPERIENCE COMPONENT*/}
        <div id="Experience">
          <Experience />
        </div>

        {/* ABOUT COMPONENT */}
        <div id="About">
          <About />
        </div>
      </div>

      <div id="Footer">
        <Footer />
      </div>
    </>
  );
}

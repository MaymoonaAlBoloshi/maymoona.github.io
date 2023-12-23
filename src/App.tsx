import "./App.css";

import Particles from "./comp/particles";
import Skills from "./comp/skills";
import About from "./comp/about";
import Projects from "./comp/projects";
import Testimonials from "./comp/testimonial";

import { skills } from "./comp/data/skills";
import { projects } from "./comp/data/projects";
import { testimonials } from "./comp/data/testimonials";

function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <Particles />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <About
          imageUrl="https://avatars.githubusercontent.com/u/43531753?v=4"
          heading="About Me"
          description="I am a software engineer with a passion for building web and mobile applications. I have experience working with JavaScript, TypeScript, React, React Native, Node.js, Express, MongoDB, and Git. I am a quick learner and enjoy working with others to build great products."
        />
        <h2 className="skills-heading">Skills</h2>
        <Skills skills={skills} />
        <h2 className="projects-heading">Projects</h2>
        <Projects projects={projects} />
        <h2 className="testimonials-heading">Testimonials</h2>
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default App;

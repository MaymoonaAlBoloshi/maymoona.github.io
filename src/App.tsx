import "./App.css";
import {
  AboutSection,
  Background,
  ProjectsSection,
  SkillsList,
  TestimonialsSection,
} from "./comp";

import { projects, skills, testimonials } from "./data";

function App() {
  return (
    <div>
      <div className="background-style">
        <Background />
      </div>
      <div className="main-container">
        <AboutSection
          imageUrl="https://avatars.githubusercontent.com/u/43531753?v=4"
          heading="About Me"
          description="I am a software engineer..."
        />
        <h2 className="skills-heading">Skills</h2>
        <SkillsList skills={skills} />
        <h2 className="projects-heading">Projects</h2>
        <ProjectsSection projects={projects} />
        <h2 className="testimonials-heading">Testimonials</h2>
        <TestimonialsSection testimonials={testimonials} />
      </div>
    </div>
  );
}

export default App;

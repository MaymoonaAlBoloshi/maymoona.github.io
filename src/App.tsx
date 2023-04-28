import './App.css'

import Particles from './comp/particles'
import Skills from './comp/skills'
import About from './comp/about'
import Projects from './comp/projects'
import Testimonials from './comp/testimonial'

function App() {
 const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
  ];


  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: 'https://link-to-project1.com',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: 'https://link-to-project2.com',
    },
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: 'https://link-to-project1.com',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: 'https://link-to-project2.com',
    },
    // Add more projects here...
  ];

  const testimonials = [
    {
      text: 'This developer did an excellent job on my project. The work was completed on time and exceeded my expectations.',
      author: 'Client 1',
    },
    {
      text: 'The developer was extremely professional and communicated effectively throughout the project. I highly recommend their services.',
      author: 'Client 2',
    },
    // Add more testimonials here...
  ];
  return (
    <div>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.5,
      }}>
        <Particles />
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <About
          imageUrl="https://avatars.githubusercontent.com/u/43531753?v=4"
          heading="About Me"
          description="I am a software engineer with a passion for building web and mobile applications. I have experience working with JavaScript, TypeScript, React, React Native, Node.js, Express, MongoDB, and Git. I am a quick learner and enjoy working with others to build great products."
        />
        <h2 className="skills-heading">Skills</h2>
        <Skills skills={skills}/>
        <h2 className="projects-heading">Projects</h2>
        <Projects projects={projects}/>
        <h2 className="testimonials-heading">Testimonials</h2>
        <Testimonials testimonials={testimonials}/>

      </div>
    </div>)
}

export default App

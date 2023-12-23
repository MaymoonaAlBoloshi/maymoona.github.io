import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const skills = [
  {
    title: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} size="3x" />, // HTML icon
    exp: 5,
    desc: "Experience with semantic HTML and best practices.",
  },
  {
    title: "CSS",
    icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" />, // CSS icon
    exp: 4,
    desc: "Skilled in CSS, Flexbox, Grid, and responsive design.",
  },
  {
    title: "JavaScript",
    icon: <FontAwesomeIcon icon={faJsSquare} size="3x" />, // JavaScript icon
    exp: 5,
    desc: "Proficient in ES6+, asynchronous programming, and more.",
  },
  {
    title: "React",
    icon: <FontAwesomeIcon icon={faReact} size="3x" />, // React icon
    exp: 3,
    desc: "Building interactive UIs using React and related libraries.",
  },
];

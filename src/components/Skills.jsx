import "./Skills.css"
import Card from '@mui/material/Card';
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";

function Skills() {
  return (
    <div className="skillss" id="skills">
      <h1 className="skills_head">Skills & Tools</h1>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}

        className="skills_container">

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
          <h2 className="skills_text">Html5</h2>
        </Card>


        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
          <h2 className="skills_text">CSS</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://www.drupal.org/files/project-images/screenshot_361.png" alt="" />
          <h2 className="skills_text">Tailwind Css</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
          <h2 className="skills_text">JavaScript</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://w7.pngwing.com/pngs/1008/952/png-transparent-typescript-hd-logo.png" alt="" />
          <h2 className="skills_text">TypeScript</h2>
        </Card>


        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <h2 className="skills_text">ReactJs</h2>
        </Card>
        <Card className="skills_card">
          <img className="skills_img" src="https://miro.medium.com/v2/resize:fit:800/1*sWrBpCqe5TniZjalJvl5rA.png" alt="" />
          <h2 className="skills_text">Zustand</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
          <h2 className="skills_text">NodeJs</h2>
        </Card>


        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
          <h2 className="skills_text">MongoDB</h2>
        </Card>


        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
          <h2 className="skills_text">Git</h2>
        </Card>


        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
          <h2 className="skills_text">Vs Code</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="" />
          <h2 className="skills_text">Github</h2>
        </Card>

      </motion.div>
    </div>
  )
}

export default Skills

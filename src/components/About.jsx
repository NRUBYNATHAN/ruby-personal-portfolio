//css
import "./About.css";
//countup
import Countup from "react-countup";
//interaction observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";
import { Link } from "react-scroll";


function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="about" id="about" ref={ref}>
      <div className="about_container">
        <div className="about_content">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about_img">
            <img className="about_image" src="https://erkab.esdm.go.id/front_layout/img/about-img.svg" alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}

            className="about_text">
            <h2 className="about1">About Me.</h2>
            <h3 className="about2">Hello! I’m <span className="about3">RUBYNATHAN</span>. </h3>
            <h3> Front End Developer</h3>
            <p>Hi, I'm Rubynathan from Trichy, Tamil Nadu. I hold a BSc in Chemistry from St. Joseph's College. </p>
            <p>I transitioned into technology by completing a Full Stack Development course at Guvi Geeks Private Limited.
              where I gained proficiency in HTML, CSS, JavaScript, React.js,TypeScript,Tailwind css,Node.js, and MongoDB.</p>

            <p>I interned as a Frontend Developer at Karmadev.in, enhancing the website’s blog page and static pages,</p>
            <p>I currently work as a Frontend Developer at Dataliggence.ai</p>
            <p>Focusing UI logic by integrating Ant Design System (Antd) with Tailwind CSS, creating a consistent and intuitive design framework.
              Improved development speed by incorporating Tailwind CSS, React Query, and Zustand, enhancing efficiency and workflow.</p>
            <div className="about_bottom">
              <div>
                <div className="about_count">
                  {inView ? <Countup start={15} end={1} duration={2} /> : 1}
                </div>
                <div className="about_exp">
                  Years Of <br /> Experiance
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

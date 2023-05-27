//css
import "./About.css";
//countup
import Countup from "react-countup";
//interaction observer
import { useInView } from "react-intersection-observer";
//motion
import {motion} from "framer-motion";
//varients
import {fadeIn} from "../Varient";
import { Link } from "react-scroll";


function About() {
  const [ref,inView]=useInView({
    threshold:0.5,
  });
  return (
    <div className="about" id="about" ref={ref}>
      <div className="about_container">
        <div className="about_content">
          <motion.div 
            variants={fadeIn("right",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once : false , amount:0.3}}
          className="about_img">
            <img className="about_image" src="https://erkab.esdm.go.id/front_layout/img/about-img.svg" alt=""/>
          </motion.div>
          <motion.div
            variants={fadeIn("left",0.5)}
            initial="hidden"
            whileInView={"show"}
        
           className="about_text">
            <h2 className="about1">About Me.</h2>
            <h3 className="about2">Hello! I’m <span className="about3">RUBYNATHAN</span>. </h3>
             <h3> Full Stack Developer from Tamilnadu,India.</h3>
            <p> I completed My Full Stack Journy In GUVI institution. I have rich experience in React and JavaScript, also I am good at  Git and Rest API's.</p>
            <p> I like to develop solutions that meet high quality metrics in terms of performance, accessibility and good practices. </p>
            <p>I am looking for job opportunities to grow professionally with an innovation team to provide solutions to different problems.</p>
            <div className="about_bottom">
              <div>
                <div className="about_count">
                  {inView ?<Countup start={15} end={0} duration={9}/>:"FRESHER"}
                </div>
                <div className="about_exp">
                  Years Of <br/> Experiance
                </div>
              
              </div>
              <div>
              <Link activeClass="active" smooth={true} spy={true} to="contact">
              <button className="headers_btn">Contact me</button>
              </Link>
              </div>
            </div>
           
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

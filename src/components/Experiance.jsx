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

function Experiance() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="about" id="experiance" ref={ref}>
      <div className="about_container">
        <div className="about_content">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about_img"
          >
            <img
              className="about_image"
              src="https://media.licdn.com/dms/image/D560BAQEVgIqpgY3k4Q/company-logo_200_200/0/1691647516261/karma_dev_logo?e=1714003200&v=beta&t=yyWWq_G5GURTkqOx5zykEqXDyjLncSismno3SlpunVk"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text"
          >
            <h2 className="about1">Experiance</h2>
            <h3 className="about2">
              <span className="about3">Karmadev.in</span>.{" "}
            </h3>
            <h3 style={{ color: "lightgreen" }}>
              Web development Internship ( 3 months )
            </h3>
            <p>
              {" "}
              Streamlined the official Karmadev website by integrating
              JavaScript to convert static blog pages into interactive ones.
            </p>
            <p>
              {" "}
              Enhanced user experience and increased page views by 30% within
              the first month.{" "}
            </p>
            <p>
              Worked on the login pages for Karmadev’s task management project
              using ReactJs.
            </p>
            <p>Wrote and corrected codes developed by the senior developer.</p>
            <p>
              Tech Stach : ReactJs | JavaScript | CSS | HTML | Web Development |
              RWD | Team Management
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;

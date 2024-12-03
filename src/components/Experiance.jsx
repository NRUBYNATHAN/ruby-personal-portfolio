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
        <h2 className="exphead">Experiance</h2>
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
              src="https://media.licdn.com/dms/image/sync/v2/D5627AQFPLZHo1FwwdQ/articleshare-shrink_480/articleshare-shrink_480/0/1711061015616?e=2147483647&v=beta&t=KMS1fBRCVG3QK_hbA7AINwObtMWR0XpDIQDJp53zhgU"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text"
          >

            <h3 className="about2">
              <span className="about3">Datalligence.Ai</span>.{" "}
            </h3>
            <h3 style={{ color: "lightgreen" }}>
              Frontend Developer
            </h3>
            <p>
              {" "}
              ✨ Streamlined UI logic by integrating Ant Design System (Antd) with Tailwind
              CSS, creating a consistent and intuitive design framework.
            </p>
            <p>
              {" "}
              ✨Accelerated development speed by incorporating Tailwind CSS, React Query,
              and Zustand, enhancing efficiency and workflow..{" "}
            </p>
            <p>
              ✨ Refactored unorganized and redundant code into reusable components,
              significantly improving maintainability and scalability.
            </p>
            <p>
              ✨Achieved type safety across the application by adopting TypeScript,reducing
              runtime errors and improving development efficiency.</p>
            <p>
              Tech Stach : ReactJs | Tailwind css | JavaScript | CSS | HTML | Tanstack Query |
              Zustand | Typescript | Antd
            </p>
          </motion.div>
        </div>
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
              src="https://ucarecdn.com/668c9e5c-905e-45ea-ad23-95fba4397453/-/resize/x300/"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text"
          >

            <h3 className="about2">
              <span className="about3">Karmadev.in</span>.{" "}
            </h3>
            <h3 style={{ color: "lightgreen" }}>
              Web development Internship ( 3 months )
            </h3>
            <p>
              {" "}
              ✨Enhanced user experience and increased page views by 30% within
              the first month.{" "}
            </p>
            <p>
              ✨Worked on the login pages for Karmadev’s task management project
              using ReactJs.
            </p>
            <p>  ✨Wrote and corrected codes developed by the senior developer.</p>
            <p>
              Tech Stach : ReactJs | JavaScript | CSS | HTML
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;

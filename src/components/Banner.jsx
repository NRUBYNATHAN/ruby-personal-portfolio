//css
import "./Banner.css";
//icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

//image
import image from "../assets/avtar.png";
//type animation 
import { TypeAnimation } from "react-type-animation";
//motion
import {motion} from "framer-motion";
//varients
import {fadeIn} from "../Varient";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div className="banner" id="home">
      <div className="banner_container">
         <div className="banner_content">
          {/*text */}
          <div className="banner_text">
            <motion.h1 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once : false , amount:0.7}}


            className="banner_name">RUBY<span>NATHAN</span></motion.h1>
            <motion.div
               variants={fadeIn("up",0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once : false , amount:0.7}}

             className="banner_texts">
              <span className="banner_span">I  am  a </span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Creator',
                  2000,
                
                ]}
                speed={50}
                className="banner_textanime"
                wrapper="span"
                repeat={Infinity}
              /> </motion.div>
              <motion.p
                 variants={fadeIn("up",0.5)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once : false , amount:0.7}}

               className="banner_summary">I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.</motion.p>
               <motion.div
                  variants={fadeIn("up",0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once : false , amount:0.7}}
                className="banner_center">
                    <Link activeClass="active" smooth={true} spy={true} to="contact">
                    <button className="headers_btn">Contact me</button>
                    </Link>
           
                <a  className="banner_btn" href="https://drive.google.com/file/d/1PEmrBRRKQNsVvHF7tl6rEdQJx3sse60F/view?usp=share_link" target="_blank" >My Resume </a>
               </motion.div>
                <motion.div
                   variants={fadeIn("up",0.7)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{ once : false , amount:0.7}}
                 className="banner_media">
                  <a className="media" href="https://github.com/NRUBYNATHAN" target="_blank" ><GitHubIcon/></a>
                  <a className="media" href="https://www.linkedin.com/in/rubynathan-n-164215259/" target="_blank" ><LinkedInIcon/></a>
                  <a className="media" href="https://twitter.com/RubynathanN" target="_blank" ><TwitterIcon/></a>
                  <a className="media" href="mailto:rubynathan999@gmail.com" target="_blank" ><EmailIcon/></a>
                </motion.div>
          </div>
            {/*image */}
          <motion.div 
             variants={fadeIn("down",0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once : false , amount:0.7}}
          className="banner_images">
            <img className="banner_image" src={image} alt=""/>
          </motion.div>
         </div>
      </div>
    </div>
  )
}

export default Banner

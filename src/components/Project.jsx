
import "./Project.css"

//motion
import {motion} from "framer-motion";
//varients
import {fadeIn} from "../Varient";


import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
function Project() {
  return (
    <div className="project" id="project">
       <h1 className="project_head">My Projects</h1>

<motion.div
   variants={fadeIn("right",0.6)}
   initial="hidden"
   whileInView={"show"}
 className="display">



       <div className="card">
          <img className="card_imagess" src="https://nira.com/wp-content/uploads/2020/01/Default_Chrome_Homepage-1024x718.png" alt=""/>
       <div className="card_body">
          <h1 className="card_title">Google-Clone</h1>
          <p className="card_info">I mildly impress by this Google clone app in the genuine Google app. It unquestionably provides good delight and benefits. Check it out and give it a shot. </p>
          <div className="btn">
          <a href="https://amazing-crisp-107f5d.netlify.app/" target="_blank" className="card_btn" ><OpenInNewIcon/></a>
          <a href="https://github.com/NRUBYNATHAN/ruby-googly-clone"  target="_blank" className="card_btn1" ><GitHubIcon /></a>
          </div>
       </div>
       </div>

       <div className="card">
          <img className="card_imagess" src="https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Recipe_Collection/12_rajasthani_recipes_you_can_cook.jpg" alt=""/>
       <div className="card_body">
          <h1 className="card_title">Recipe-Mangement</h1>
          <p className="card_info">I created this recipe management programme for the Guvi Hackathon. I also create the front end and back end of this app. To manage in these kitchen recipes is really helpful. With its extensive use for partners who non welknon cooks
</p>
          <div className="btn">
          <a href="https://recipes-frontend.netlify.app/" target="_blank" className="card_btn" ><OpenInNewIcon/></a>
          <a href="https://github.com/NRUBYNATHAN/kitchen-recipe-frontend"  target="_blank" className="card_btn1" ><GitHubIcon /></a>
          </div>
       </div>
       </div>

       <div className="card">
          <img className="card_imagess" src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt=""/>
       <div className="card_body">
          <h1 className="card_title">Amazon-Clone</h1>
          <p className="card_info">I mildly impress by this Amazon clone app in the genuine Amazon app. It unquestionably provides good delight and benefits. Check it out and give it a shot.</p>
          <div className="btn">
          <a href="https://ruby-clone-app.netlify.app/" target="_blank" className="card_btn" ><OpenInNewIcon/></a>
          <a href="https://github.com/NRUBYNATHAN/amazon-clone"  target="_blank" className="card_btn1" ><GitHubIcon /></a>
          </div>
       </div>
       </div>

       <div className="card">
          <img className="card_imagess" src="https://www.retailtouchpoints.com/wp-content/uploads/2022/11/TikTok.png" alt=""/>
       <div className="card_body">
          <h1 className="card_title">Tok-Tok</h1>
          <p className="card_info">This tiktok software is designed to play videos quietly. and I made this app just for the front end. This app does not include music. Try it out and see</p>
          <div className="btn">
          <a href="https://sensational-cocada-2bad4c.netlify.app/" target="_blank" className="card_btn" ><OpenInNewIcon/></a>
          <a href="https://github.com/NRUBYNATHAN/tik-tok-clone"  target="_blank" className="card_btn1" ><GitHubIcon /></a>
          </div>
       </div>
       </div>
       </motion.div>

    </div>
  )
}

export default Project

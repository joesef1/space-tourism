import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
// import video from '../assets.js/Video.mp4'
import video from '../assets.js/Milky Way - 58289.mp4'


function Home() {
  const [isHovering, setIsHovering] = useState(true);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  // video

  
  return (
    <motion.div className="home"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="video-layer"></div>
<video   autoPlay loop muted className='video' src={video}/>
      <div className="container-destination home1">

          <div className="home-content">
            <p className="text">so, you want to travel to</p>
            <h1 className="h1-text">space</h1>
            <p className="content">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
        </div>
        


           <div
            className="explore-section">
            <div className="ex-circle">
            <motion.div
                // animate={{scale:1}}
                // animate={{scale:1.5}}
                transition={{repeat:Infinity,duration:2}}
                // onMouseOver={setIsHovering(true)}
                // onMouseOut={setIsHovering(false)}
                className="ex"
              >
                <p className="p">Explore</p>
                {/* {isHovering && */}
                <motion.div
                animate={{opacity:1}}
                // exit={{opacity:1}}
                
                transition={{repeat:Infinity,duration:2}}
                
                
                
                   
                    className="layer "></motion.div>
                    {/* // } */}
                  
              </motion.div>
            </div>
          </div>


      </div>
    </motion.div>
  );
}

export default Home;

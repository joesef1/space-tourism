import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <motion.div className="home"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <video autoPlay loop muted id="vedio" src="/src/assets.js/Video.mp4"></video>

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
        


           <div className="explore-section">
            <div className="ex-circle">
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="ex"
              >
                <p className="p">Explore</p>
                   {isHovering &&<div className="layer "></div>}
                  
              </div>
            </div>
          </div>


      </div>
    </motion.div>
  );
}

export default Home;

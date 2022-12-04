import {React, useState} from 'react'
import capsul from "../technology/image-space-capsule-portrait.jpg";
import spaceport from "../technology/image-spaceport-portrait.jpg";
import vehicle from "../technology/image-launch-vehicle-portrait.jpg";
import { motion } from "framer-motion";



function Technology() {

  const [toggleState, setToggleState] = useState(1);
  
  const toggletab = (index) => {
    setToggleState(index);
  };

  return (
    <motion.div className="Technology tecknology"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="container-destination tecknology resp-t">



      <div className="orbit-route-section technology">
  
        <p className="orbit-text crew-text technology ">
              <span className="span">
                <strong>03 </strong>
              </span>{" "}
              space launch 101
            </p>
  



        {/* technology container */}
        <div className='technology-container'>

<div className='tech-container' >
  
          <div className="bloc-tabs crew-p technology-num">
                  <div
                    onClick={() => toggletab(1)}
                    className={toggleState === 1 ? "tech-num active-tech-num" : "tech-num"}
                  ><span className='span'>1</span> </div>
            
                  <div
                    onClick={() => toggletab(2)}
                    className={toggleState === 2 ? "tech-num active-tech-num" : "tech-num"}
                  ><span className='span'>2</span></div>
            
                  <div
                    onClick={() => toggletab(3)}
                    className={toggleState === 3 ? "tech-num active-tech-num" : "tech-num"}
                  ><span className='span'>3</span></div>
                
                </div>
  
  
  
  
  
  
  
  
  
  
              <div className="content-container crew-s technology">
            
                <div
                  className={
                    toggleState === 1
                      ? "orbit-container active-orbit-container"
                      : "orbit-container"
                  }
                >
                  <div className="content">
                    <h2 className="crew-name crew-s">The terminology...</h2>
                    <h1 className="crew-name crew-h1">Launch vehicle</h1>
                    <p className="orbit-para crew-p">
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
            d from Earth's surface to space, usually to Earth orbit or beyond. Our 
            carrier rocket is the most powerful in operation. Standing 150 metres tall, 
            uite an awe-inspiring sight on the launch pad!
                    </p>
                  </div>
                </div>
            
                <div
                  className={
                    toggleState === 2
                      ? "orbit-container active-orbit-container"
                      : "orbit-container"
                  }
                >
                    <div className="content">
                    <h2 className="crew-name crew-s">The terminology...</h2>
                    <h1 className="crew-name crew-h1">Spaceport</h1>
                    <p className="orbit-para crew-p">
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
            logy to the seaport for ships or airport for aircraft. Based in the 
             Cape Canaveral, our spaceport is ideally situated to take advantage 
             Earth’s rotation for launch.
                    </p>
                  </div>
                </div>
            
                <div
                  className={
                    toggleState === 3
                      ? "orbit-container active-orbit-container"
                      : "orbit-container"
                  }
                >
                  <div className="content">
                    <h2 className="crew-name crew-s">The terminology...</h2>
                    <h1 className="crew-name crew-h1">Space capsule</h1>
                    <p className="orbit-para crew-p">
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
            e to reenter the Earth's atmosphere without wings. Our capsule is where 
             spend your time during the flight. It includes a space gym, cinema, 
            enty of other activities to keep you entertained.
                    </p>
                  </div>
                </div>
            
               
              </div>
</div >
          
          
          
          
          
          
            
              {/* ./ */}
        </div>
        </div>




        <div className="tecknology-section">


<div className='mobile-t-title'>
<p className=" ">
              <span className="span">
                <strong>03 </strong>
              </span>{" "}
              space launch 101
            </p>
</div>


          <div className="tecknology-imgs">
            <img
              className= "tecknology-img" alt="img"
              src={ 
                toggleState === 1
                  ? vehicle
                  : toggleState === 2
                  ? spaceport
                  : 
                  capsul
              }
            />
            
          </div>
        </div>
        


      </div>
    </motion.div>
    
  )
}

export default Technology
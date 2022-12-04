import {React, useState} from 'react'
import doglas from "../crew/image-douglas-hurley.png";
import mark from "../crew/image-mark-shuttleworth.png";
import victor from "../crew/image-victor-glover.png";
import anousheh from "../crew/image-anousheh-ansari.png";
import { motion } from "framer-motion";


function Crew() {

    const [toggleState, setToggleState] = useState(1);
  
    const toggletab = (index) => {
      setToggleState(index);
    };

  return (
    <motion.div className="crew"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="container-destination crew-s">

      <div className="orbit-route-section">



      <p className="orbit-text crew-text">
            <span className="span">
              <strong>02 </strong>
            </span>{" "}
            Meet your crew
          </p>




        {/*  */}
{/* <div className='crew-content-img-container'> */}
  <div className='crew-content-container'>
              <div className="content-container crew-s">
    
                <div
                  className={
                    toggleState === 1
                      ? "orbit-container active-orbit-container"
                      : "orbit-container"
                  }
                >
                  <div className="content">
                    <h2 className="crew-name crew-s">Commander</h2>
                    <h1 className="crew-name crew-h1">Douglas Hurley</h1>
                    <p className="orbit-para crew-p">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.
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
                    <h2 className="crew-name crew-s">Mission Specialist</h2>
                    <h1 className="crew-name crew-h1">Mark Shuttleworth</h1>
                    <p className="orbit-para crew-p">
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
      the Linux-based Ubuntu operating system. Shuttleworth became the first South 
      African to travel to space as a space tourist.
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
                    <h2 className="crew-name crew-s">Pilot</h2>
                    <h1 className="crew-name crew-h1">Victor Glover</h1>
                    <p className="orbit-para crew-p">
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the 
      International Space Station. Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
      station systems flight engineer.
                    </p>
                  </div>
                </div>
    
                <div
                  className={
                    toggleState === 4
                      ? "orbit-container active-orbit-container"
                      : "orbit-container"
                  }
                >
                    <div className="content">
                    <h2 className="crew-name crew-s">Flight Engineer</h2>
                    <h1 className="crew-name crew-h1">Anousheh Ansari</h1>
                    <p className="orbit-para crew-p">
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to 
      fly to the ISS, and the first Iranian in space. 
                    </p>
                  </div>
                </div>
              </div>
    
    
    
    
    
    
              <div className="bloc-tabs crew-p">
                  <div
                    onClick={() => toggletab(1)}
                    className={toggleState === 1 ? "polit active-polit" : "polit"}
                  ></div>
    
                  <div
                    onClick={() => toggletab(2)}
                    className={toggleState === 2 ? "polit active-polit" : "polit"}
                  ></div>
    
                  <div
                    onClick={() => toggletab(3)}
                    className={toggleState === 3 ? "polit active-polit" : "polit"}
                  ></div>
    
                  <div
                    onClick={() => toggletab(4)}
                    className={toggleState === 4 ? "polit active-polit" : "polit"}
                  ></div>
                </div>
  </div>
{/* </div> */}
            {/*  */}
        </div>

{/*  */}
        <div className="orbit-section crew-i">
          <div className="orbit-imgs crew-i">
            <img
              className={toggleState === 1 ? "orbit-img crew-i douglas" : toggleState === 2 ? "orbit-img crew-i mark" : toggleState === 3 ? "orbit-img crew-i victor" : toggleState === 4 ? "orbit-img crew-i ansary" : "orbit-img crew-i"} alt="img"
              src={ 
                toggleState === 1
                  ? doglas
                  : toggleState === 2
                  ? mark
                  : toggleState === 3
                  ? victor
                  : 
                  anousheh
              }
            />
            <span className='line-img'></span>
          </div>

        </div>
        {/*  */}

      </div>
    </motion.div>
  )
}

export default Crew
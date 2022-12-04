import "./App.css";
import "./media-q.css";
import logo from "./logo.svg";
import { BrowserRouter, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { React, useState,useEffect, useRef } from "react";
import Animatedrouts from "./componants.js/Animatedrouts";
import { motion } from "framer-motion";


function App() {

  const [handleClose, setHandleClose] = useState(window.matchMedia("(min-width: 566px)").matches)
  const togglehandleClose = () => {
    setHandleClose(false);
  };

  const togglehandleOpen = () => {
    setHandleClose(true);
  };
  
  useEffect(() => {
    window.matchMedia("(min-width: 566px)").addEventListener("change", e=> setHandleClose(e.matches))
  });


  useEffect(() => {
    document.addEventListener('click',hanleClickOutside, true)
    document.addEventListener('click',hanleClickinside, true)
  },[]);

const refOne = useRef(null)

const refn1 = useRef(null)
const refn2 = useRef(null)
const refn3 = useRef(null)
const refn4 = useRef(null)


const hanleClickOutside = (e) => {
  if (!refOne.current.contains(e.target)) {
    console.log('clicked outside ..');
    setHandleClose(false);
  }
}

const hanleClickinside = (e) => {
  if (refn1.current.contains(e.target)) {
    setHandleClose(false);
  }else if (refn2.current.contains(e.target)) {
    setHandleClose(false);
  }else if (refn3.current.contains(e.target)) {
    setHandleClose(false)
  }else if (refn4.current.contains(e.target)) {
    setHandleClose(false);
  }else {
    console.log('tur');
  }
}



// test

const linkCloseNav = () => { 
  // setHandleClose(false)
  console.log("ff.yu");
  if (window.matchMedia("(min-width: 768px)")) {
   setHandleClose(false)
  }
 }

// ./test




  return (
    <BrowserRouter>
      <div className="container">
        <div className="header ">
          <div className="burger-container">
            <GiHamburgerMenu onClick={togglehandleOpen} />
          </div>

          <div className="header-icon">
            <img className="logo" src={logo} />
          </div>

          {/* {handleClose && ( */}
            <motion.div 
            // animate={{x:0 }}
            animate={{x:handleClose ? 0 : 254 }}
            transition={{type:'tween', duration:0}}
            // exit={{x: !handleClose ? 0 : 0}}
            
            ref={refOne} className="header-nav">
              <div className="close-icon">
                <AiOutlineClose onClick={togglehandleClose} />
              </div>
              <ul className="nav">
                <NavLink   onClick={linkCloseNav}
                className="link " to="/">
                  <strong>00</strong> home <span></span>
                </NavLink>
                <NavLink onClick={linkCloseNav}
                  className="link"
                  to="/src/componants.js/Destination.js"
                >
                  <strong>01</strong> destination <span></span>
                </NavLink> 
                <NavLink onClick={linkCloseNav}
                className="link" to="/src/componants.js/Crew.js">
                  <strong>02</strong> crew <span></span>
                </NavLink>
                <NavLink  onClick={linkCloseNav}
                className="link" to="/src/componants.js/Technology.js">
                  <strong>03</strong> technology <span></span>
                </NavLink>
                <NavLink  onClick={linkCloseNav}
                className="link" to="/src/componants.js/Plannet.js">
                  <strong>04</strong> plannet <span></span>
                </NavLink>
              </ul>
            </motion.div>
          {/* )} */}
          <span className="line"></span>

        </div>

       </div>
 
      <Animatedrouts/>
    </BrowserRouter>
  );
}

export default App;

// const Close = styled.div`
// display:block;
// `

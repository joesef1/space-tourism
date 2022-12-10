import "./App.css";
import "./media-q.css";
import logo from "./logo.svg";
import { BrowserRouter, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { React, useState,useEffect, useRef } from "react";
import Animatedrouts from "./componants.js/Animatedrouts";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'


function App() {

  const [handleClose, setHandleClose] = useState(window.matchMedia("(min-width: 566px)").matches)
  const togglehandleClose = () => {
    setHandleClose(false);
  };

  const togglehandleOpen = () => {
    setHandleClose(true);
    // sethandlelogic(true)
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
  const isNarrowScreen = window.matchMedia("(max-width: 750px)").matches;
  if (!refOne.current.contains(e.target) && isNarrowScreen) {
    setHandleClose(false);
  }
}

useEffect(() => {
  window.matchMedia("(min-width: 755px)").addEventListener("click",hanleClickOutside )
});


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

// 
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
const linkCloseNav = () => { 
    if (isTabletOrMobile) {
   setHandleClose(false)
  }
 }




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
            transition={{duration:0.1}}
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

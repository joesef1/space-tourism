import React from 'react'
import {Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Technology from "./Technology";
import Destination from "./Destination";
import Crew from "./Crew";
import { AnimatePresence } from "framer-motion";



function Animatedrouts() {

const location = useLocation()

  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/src/componants.js/Destination.js"
              element={<Destination />}
            />
            <Route path="/src/componants.js/Crew.js" element={<Crew />} />
            <Route
              path="/src/componants.js/Technology.js"
              element={<Technology />}
            /> 
          </Routes>
    </AnimatePresence>
  )
}

export default Animatedrouts

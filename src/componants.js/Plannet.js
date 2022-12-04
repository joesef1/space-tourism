import React from 'react'
// import video from '../assets.js/pexels-joseph-redfield-10755266.mp4'
import video from '../assets.js/Video.mp4'
// import video1 from '../assets.js/Space - 60716.mp4'
// import video2 from '../assets.js/Space.mp4'

function Plannet() {
  return (
    <div>
  <div className='overlay'></div>
            {/* <video  autoPlay loop muted className='video' src={video}/> */}
            <video   autoPlay loop muted className='video' src={video}/>
            {/* <video   autoPlay loop muted className='video' src={video1}/> */}
            {/* <video   autoPlay loop muted className='video' src={video2}/> */}
    </div>
  )
}

export default Plannet

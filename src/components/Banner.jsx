import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import "./styles/banner.css";

const Banner = () => {
  return (
    <div>
      <h1 className='title__banner'> Barbara <span>Cordova</span></h1>
      <TypeAnimation
        sequence={[
          'Soy, desarrollador Front-end.',
          500,
        ]}
        wrapper="h3"
        repeat={Infinity}
        />
    </div>
  )
}

export default Banner
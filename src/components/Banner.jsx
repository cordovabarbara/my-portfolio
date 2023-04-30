import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Banner = () => {
  return (
    <div>
      <h1> Barbara <span>Cordova</span></h1>
      <TypeAnimation
        sequence={[
          'Soy, desarrollador Front-end.',
          500,
        ]}
        repeat={Infinity}
        />
    </div>
  )
}

export default Banner
import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import "./styles/banner.css";
import img from '/public/img.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='title__banner'> Barbara <span className='title__span'>Cordova</span></h1><div/>
          <div className='icons__banner'>
          <i class='bx bxl-github'></i>
          <i class='bx bxl-linkedin-square'></i>
          <i class='bx bxl-gmail' ></i>
          </div>

          <div className='title__animation'>
          <TypeAnimation
            sequence={[
            'En la meta de ser una desarrolladora web.',
            2000,
            'Bienvenido a mi portafolio.',
            2000,
            ]}
            wrapper="h3"
            repeat={Infinity}
          />
          </div>
      <img className='banner_img' src={img} alt=''></img>
    </div>
  )
}

export default Banner
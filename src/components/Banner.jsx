import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import "./styles/banner.css";
import img from '/public/img.jpg'

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <h1 className='title__banner'> Barbara <span className='title__span'>Cordova</span></h1>
        
      <div/>
        <img className='banner_img' src={img} alt=''></img>
          <div className='icons__banner'>
          <a href='https://github.com/cordovabarbara'><i class='bx bxl-github1 bxl-github'></i></a>
          <a href='https://linkedin.com/in/barbara-cordova-aliendo'><i class='bx bxl-linkedin-square'></i></a>
          <a href='mailto:aliendocordova@gmail.com'><i class='bx bxl-gmail' ></i></a>
          <i class='bx bx-file'></i>
          </div>
    </div>
    <div className='title__animation'>
          <TypeAnimation
            sequence={[
            'Desarrolladora Web Full-Stack.',
            3000,
            'Bienvenido a mi portafolio.',
            3000,
            'Explora mi portafolio y contactame.',
            3000,
            ]}
            wrapper="h3"
            repeat={Infinity}
          />
          
          </div>
          
    </>

  )
}

export default Banner
import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import "./styles/banner.css";
import img1 from '/public/img1.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <h1 className='title__banner'> Barbara <span className='title__span'>Cordova</span></h1>
        
      <div/>
          <div className='icons__banner'>
          <a href='https://github.com/cordovabarbara'><i class='bx bxl-github1 bxl-github'></i></a>
          <a href='https://linkedin.com/in/barbara-cordova-aliendo'><i class='bx bxl-linkedin-square'></i></a>
          <a href='mailto:aliendocordova@gmail.com'><i class='bx bxl-gmail' ></i></a>
          <i class='bx bx-file'></i>
          </div>
          <img className='banner_img' src={img1} alt=''></img>
    </div>
    <div className='title__animation'>
          <TypeAnimation
            sequence={[
            'Desarrolladora Web.',
            3500,
            'Bienvenido a mi portafolio.',
            3000,
            'Explora mi portafolio.',
            3500,
            'Empezemos un nuevo proyecto',
            3500,
            ]}
            wrapper="h3"
            repeat={Infinity}
          />
          
          </div>
          
    </>

  )
}

export default Banner
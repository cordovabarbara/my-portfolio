import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import "./styles/banner.css";
import img1 from '/public/img1.png'
import barbaracordovacv from '/public/barbaracordovacv.pdf'

const openCVInNewWindow = () => {
  window.open(barbaracordovacv, '_blank');
};

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <div className='banner__2'>
      <h1 className='title__banner'> Barbara <span className='title__span'>Cordova</span></h1>
      <div className='icons__banner'>
          <a href='https://github.com/cordovabarbara'><i class='bx bxl-github1 bxl-github'></i></a>
          <a href='https://linkedin.com/in/barbara-cordova-aliendo'><i class='bx bxl-linkedin-square'></i></a>
          <a href='mailto:aliendocordova@gmail.com'><i class='bx bxl-gmail' ></i></a>
          <i className='bx bx-file' onClick={openCVInNewWindow}></i>
          <div className='title__animation'>
          <TypeAnimation
            sequence={[
            'Desarrolladora Web.',
            2000,
            'Bienvenido a mi portafolio.',
            2000,
            'Explora mi portafolio.',
            2000,
            'Empezemos un nuevo proyecto',
            2000,
            ]}
            wrapper="h3"
            repeat={Infinity}
          />
          </div>
          </div>
          </div>
          <img className='banner__img' src={img1} alt=''></img>
          <article className='fly__icons'>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-rocket' ></i>
          <i className='bx bxs-planet'></i>
          <i className='bx bxs-moon'></i>
          </article>
      </div>
    </>
  )
}

export default Banner
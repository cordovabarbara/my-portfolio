import React from 'react'
import "./styles/projects.css";
import images from "../utils/images"



const Projects = () => {
  return (
    <div className='project__box'>
    <span className='project__title' id='projects'>Proyectos</span>
    <div  className='project__principal'>
      <img className='project__img'src={images.image1} alt="" />
      <img className='project__img' src={images.imagen2} alt="" />
    </div>
    </div>
 
 
  
  )
}

export default Projects
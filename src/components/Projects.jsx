import React from 'react'
import "./styles/projects.css";
import Slider from './Slider';



const Projects = () => {
  return (
    <div className='project__box'>
    <span className='project__title' id='projects'>Proyectos</span>
    <div className='project__img'>
    <Slider/>
    </div>
    </div>
 
 
  
  )
}

export default Projects
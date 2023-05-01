import React from 'react'
import proyect1 from '/public/proyect1.jpg'
import proyecto from '/public/proyecto.jpg'
import entregable from '/public/entregable.jpg'
import "./styles/projects.css";



const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <span className='projects__title'>Projects</span>
      <div className='projects__box'>
      <img className='projects__img' src={proyect1} alt=''/>
      <img className='projects__img'src={proyecto} alt=''/>
      <img className='projects__img'src={entregable} alt=''/>
      </div>
    </div>
  )
}

export default Projects
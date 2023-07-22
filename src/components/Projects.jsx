import React from 'react'
import cinepedia from '/public/cinepedia.png'
import proyecto from '/public/proyecto.jpg'
import entregable from '/public/entregable.jpg'
import "./styles/projects.css";



const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <span className='projects__title'>Proyectos</span>
      <div className='projects__box'>
      <img className='projects__img'src={cinepedia} alt=''/>
      <img className='projects__img'src={proyecto} alt=''/>
      <img className='projects__img'src={entregable} alt=''/>
      </div>
    </div>
  )
}

export default Projects
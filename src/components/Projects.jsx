import React from 'react'
import cinepedia from '/public/cinepedia.png'
import "./styles/projects.css";



const Projects = () => {
  return (
    <article className='projects__section'>
    <span className='projects__title' id='projects'>Proyectos</span>
    <div className='projects'>
      <article className='project__text'>
      <p className='project__p'>Creación de una API para la realización de una aplicación web de
      peliculas, 
      Tecnologías: Express, Node.js, Sequelize, Postman, React, CSS.</p>
      <div className='project__icons'>
      <i className='bx bxl-github'></i>
      <i className='bx bx-link'></i>
      </div>
      </article>
      <div className='projects__box'>
      <img className='projects__img'src={cinepedia} alt=''/>
      </div>
    </div>
    </article>
  )
}

export default Projects
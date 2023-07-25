import React from 'react'
import perfil1 from '/public/perfil1.png'
import "./styles/about.css";

const About = () => {
  return (
    <> 
    <h1 id='sobre mi' className='title__about'>Sobre Mi</h1>
      <div className='about'>
        <img className='about__img' src={perfil1} alt=''></img>
        <div className='about__txt'>
      Soy Barbara Córdova, oriunda de Caracas, Venezuela, actualmente resido en Bogotá, Colombia.
    Tengo conocimientos en diversos lenguajes de programación como JavaScript, HTML, CSS y React; y disfruto creando aplicaciones web que mejoren la experiencia de los usuarios. En particular, me gustaría especializarme en el desarrollo de aplicaciones móviles en el futuro.
    Cuando no estoy programando, me gusta explorar mi entorno y descubrir nuevos lugares en la ciudad. Visitar museos y tomar fotografias, son unas de mis actividades favoritas.
    En pocas palabras, me considero alguien curiosa y fascinada por el mundo de la tecnología, el arte y el aprendizaje constante. Estoy emocionada por descubrir todo lo que el futuro me depara.
    </div>
  </div>
    
    
    </>

  
  )
}

export default About
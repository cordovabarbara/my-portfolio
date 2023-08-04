import React from 'react'
import "./styles/certifications.css";

const Certifications = () => {
  return (
    <><h1 id='Certificacions' className='title__about'>Certificationes</h1>
        <div className='certifications'> 
        <div className='certifications__box'>
          <section className='certificacions__items'>
          <i class='bx bxs-graduation'></i>
          <div className='certificacions__content'></div>
          </section>
          <article className='certification__info'>
          <span className='certifications__title'>Fundamentos de Desarrollo Web</span>
      <span className='certifications__subtitle'>Marzo - 2023</span>
      <p className='certifications__text'>Se obtuviero las habilidades necesarias para desarrollar de manera correcta la parte visual de un sitio web responsivo sin utilizar librerías/frameworks, así como agregar contenido dinámico con javascript.</p>
    
      <span className='certifications__title'>Desarrollo de Aplicaciones Web con React</span>
      <span className='certifications__subtitle'>Mayo - 2023</span>
      <p className='certifications__text'>Se aprendió a crear aplicaciones web con React JS, logrando una gran interacción con el usuario usando los conocimientos previos de HTML, CSS y Javascript.</p>

      <span className='certifications__title'>Back-End Node</span>
      <span className='certifications__subtitle'>Julio - 2023</span>
      <p className='certifications__text'> Se obtuviero las habilidades paraconstruir una aplicación desde el servidor con Node y Express desde 0 hasta el despliegue en un servidor. Tendrá la habilidad de realizar una API Rest usando una base de datos relacional, autenticación de usuarios.</p>
          </article>
      </div>
    </div>
    </>
  )
}

export default Certifications
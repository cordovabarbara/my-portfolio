import React from 'react'
import "./styles/certifications.css";

const Certifications = () => {
  return (
    <><h1 id='Certificacions' className='title__about'>Certificationes</h1>
        <div className='certifications'> 
        <div className='certifications__box'>
          <section className='certificacions__items'>
          <i class='bx bxs-graduation'></i>
          <div className='certificacions__content' data-aos="fade-up"
     data-aos-duration="2800"></div>
          </section>
          <article className='certification__info' data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">
          <a className='certifications__title' href='https://certificates.academlo.com/en/verify/39337999442068'>
          <span className='certifications__title' >Fundamentos de Desarrollo Web</span>
          </a>
      <span className='certifications__subtitle'>Marzo - 2023</span>
      <p className='certifications__text'>Se obtuviero las habilidades necesarias para desarrollar de manera correcta la parte visual de un sitio web responsivo sin utilizar librerías/frameworks, así como agregar contenido dinámico con javascript.</p>

      <a className='certifications__title' href='https://certificates.academlo.com/en/verify/64833930757310'>
      <span className='certifications__title'>Desarrollo de Aplicaciones Web con React</span>
      </a>
      <span className='certifications__subtitle'>Mayo - 2023</span>
      <p className='certifications__text'>Se aprendió a crear aplicaciones web con React JS, logrando una gran interacción con el usuario usando los conocimientos previos de HTML, CSS y Javascript.</p>

      <a className='certifications__title' href='https://certificates.academlo.com/en/verify/50549962652939'>
      <span className='certifications__title' >Back-End Node</span>
      </a>
      <span className='certifications__subtitle'>Julio - 2023</span>
      <p className='certifications__text'> Se obtuviero las habilidades paraconstruir una aplicación desde el servidor con Node y Express desde 0 hasta el despliegue en un servidor. Tendrá la habilidad de realizar una API Rest usando una base de datos relacional, autenticación de usuarios.</p>
          </article>
      </div>
    </div>
    </>
  )
}

export default Certifications
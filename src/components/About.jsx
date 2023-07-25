import React, { useEffect, useState } from 'react'
import perfil1 from '/public/perfil1.png'
import "./styles/about.css";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("sobre-mi");

      if (element) {
        const elementTop = element.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollY > elementTop - windowHeight / 2) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <> 
    <h1 id='sobre-mi' className='title__about'>Sobre Mi</h1>
      <div className='about'>
        <img className={`about__img ${visible ? 'visible' : ''}`} src={perfil1} alt=''></img>
        <div className={`about__txt ${visible ? 'visible' : ''}`}>
      Soy Barbara Córdova, oriunda de Caracas, Venezuela, actualmente resido en Bogotá, Colombia.
    Tengo conocimientos en diversos lenguajes de programación como JavaScript, HTML, CSS, React; y actualmente me estoy capacitando en el desarrollo de aplicaciones moviles. 
    Disfruto crear aplicaciones web que mejoren la experiencia de los usuarios.
    Cuando no estoy programando, me gusta descubrir nuevos lugares en la ciudad. Visitar museos y tomar fotografias, son unas de mis actividades favoritas.
    En pocas palabras, me considero alguien curiosa y fascinada por el mundo de la tecnología, el arte y el aprendizaje constante. Mi deseo es unirme a una empresa que me brinde la oportunidad de seguir aprendiendo y al mismo tiempo seguir desarrollándome como profesional.
    </div>
  </div>
    
    
    </>

  
  )
}

export default About
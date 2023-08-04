
import perfil1 from '/public/perfil1.png'
import "./styles/about.css";

const About = () => {
  return (
    <> 
    <h1 id='sobre-mi' className='title__about'>Sobre Mi</h1>
      <div className='about' data-aos="fade-right">
        <img className="about__img" src={perfil1} alt=''></img>
          <div className='about__txt'>
      Soy Barbara Córdova, oriunda de Caracas, Venezuela, actualmente resido en Bogotá, Colombia.
    Tengo conocimientos en diversos lenguajes de programación como JavaScript, HTML, CSS, React; y actualmente me estoy capacitando en el desarrollo de aplicaciones moviles. 
    Disfruto crear aplicaciones web que mejoren la experiencia de los usuarios.
    En pocas palabras, me considero alguien curiosa y fascinada por el mundo de la tecnología, el arte y el aprendizaje constante. Mi deseo es unirme a una empresa que me brinde la oportunidad de seguir aprendiendo y al mismo tiempo seguir desarrollándome como profesional.
    </div>
    </div>
    
  </>
)
}

export default About
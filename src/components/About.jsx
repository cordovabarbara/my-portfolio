import "./styles/about.css";

const About = () => {
  return (
    <>
      <h1 id="sobre-mi" className="title__about">
        Sobre Mi
      </h1>
      <div className="about" data-aos="fade-right">
        <div className="about__txt">
          Soy Barbara Córdova, oriunda de Caracas, Venezuela, actualmente resido
          en Bogotá, Colombia. Tengo conocimientos en diversas tecnologias de
          programación como JavaScript, HTML, CSS, React. Actualmente, estoy ampliando mis conocimientos 
          en el área de backend, centrándome en el aprendizaje de la creación de bases de datos.
          Disfruto crear aplicaciones web que mejoren la experiencia de los usuarios. 
          En pocas palabras, me considero alguien curiosa y fascinada por el mundo de la
          tecnología, el arte y el aprendizaje constante. Mi deseo es unirme a
          una empresa que me brinde la oportunidad de seguir aprendiendo y al
          mismo tiempo seguir desarrollándome como profesional.
        </div>
      </div>
    </>
  );
};

export default About;

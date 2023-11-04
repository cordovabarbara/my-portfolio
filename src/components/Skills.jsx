import "./styles/skills.css";

const Skills = () => {
  return (
    <div className="skills__box" id="skills">
      <span className="title__sk">Skills</span>
      <span className="second__title">Lenguajes de Programación</span>
      <div className="skills__general" data-aos="flip-right">
        <div className="bx__html">
          <i className="bx bxl-html5"></i>
          HTML5
        </div>

        <div className="bx__css">
          <i className="bx bxl-css3"></i>
          CSS
        </div>

        <div className="bx__js">
          <i className="bx bxl-javascript"></i>
          Javascript
        </div>
      </div>
      <span className="second__title">Frameworks y Librerias</span>
      <div className="skills__general" data-aos="flip-right">
        <div className="bx__react">
          <i className="bx bxl-react"></i>
          React
        </div>
        <div className="bx__redux">
          <i className="bx bxl-redux"></i>
          Redux
        </div>
      </div>

      <span className="second__title">Otras Tecnologías</span>
      <div className="skills__general" data-aos="flip-left">
        <div className="bx__git">
          <i className="bx github2 bxl-github"></i>
          GitHub
        </div>
        <div className="bx__pgAdm">
          <i className="bx bxl-postgresql"></i>
          PostgreSQL
        </div>
        <div className="bx__node">
          <i className="bx bxl-nodejs"></i>
          Node.js
        </div>
      </div>
    </div>
  );
};

export default Skills;

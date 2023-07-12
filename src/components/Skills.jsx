import "./styles/skills.css";

const Skills = () => {
    return (
        <div className="skills__box" id="skills">
            <span className="title__sk">Skills</span>
            <span className="second__title">Lenguajes de Programación</span>
            <div className="skills__general">
                <div className="bx__html">
                    <i class="bx bxl-html5"></i>
                    HTML5
                </div>

                <div className="bx__css">
                    <i class="bx bxl-css3"></i>
                    CSS
                </div>

                <div className="bx__js">
                    <i class="bx bxl-javascript"></i>
                    Javascript
                </div>
            </div>
            <span className="second__title">Frameworks y Librerias</span>
            <div className="skills__general">
            <div className="bx__react">
            <i class='bx bxl-react'></i>
                React
            </div>
            <div className="bx__redux">
            <i class='bx bxl-redux'></i>
                Redux
            </div>
            </div>

            <span className="second__title">Otras Tecnologías</span>
            <div className="bx__git">
            <i class='bx github2 bxl-github'></i>
                GitHub
            </div>

        </div>
    );
};

export default Skills;

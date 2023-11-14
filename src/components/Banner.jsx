import { TypeAnimation } from "react-type-animation";
import "./styles/banner.css";
import barbaracordovacv from "/public/barbaracordovacv.pdf";
import perfil from "/public/imagen2.png"

const openCVInNewWindow = () => {
  window.open(barbaracordovacv, "_blank");
};

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__2">
          <h1 className="title__banner">
            {" "}
            Barbara <span className="title__span">Cordova</span>
          </h1>
          <div className="icons__banner">
            <a href="https://github.com/cordovabarbara">
              <i className="bx bxl-github1 bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aliendo-barbara/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:aliendocordova@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>
            <i className="bx bx-file" onClick={openCVInNewWindow}></i>
            <div className="title__animation">
              <TypeAnimation
                sequence={[
                  "Desarrolladora Web.",
                  2000,
                  "Bienvenido a mi portafolio.",
                  2000,
                  "Explora mi portafolio.",
                  2000,
                  "Empezemos un nuevo proyecto.",
                  2000,
                ]}
                wrapper="h3"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <img className='banner__img' src={perfil} alt=''></img>
      </div>
    </>
  );
};

export default Banner;

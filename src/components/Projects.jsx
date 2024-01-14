import "./styles/projects.css";
import projectsData from "../utils/projectsData";
import { useState } from "react";


const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  //modal open and close
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const handleModalContainer = (e) => e.stopPropagation();

  //slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : projectsData.length - 1))};

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < projectsData.length - 1 ? prevSlide + 1 :0))};

  return (
    <div className="project__box">
      <span className="project__title" id="projects">
        Proyectos
      </span>
      <div className="project__btn">
      <p className="btn__arrow"  onClick={handlePrevSlide} ><i className='bx bx-left-arrow-circle'></i></p>
      <div className="project__principal" >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project__item" style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onClick={() => openModal(project)}>
            <img className="project__img" src={project.image} alt="" />
          </div>
          
        ))}

      </div>
      <p className="btn__arrow" onClick={handleNextSlide}><i className='bx bx-right-arrow-circle' ></i></p>
      </div>

      {showModal && (
        <div
          className={`modal ${showModal ? "active" : ""}`}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={handleModalContainer}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img className="modal-image" src={selectedProject.image} alt="" />
            <div className="project-description">
              <h3 className="project__tt">{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description}</p>
              <p className="modal-description">
                Tecnologias: {selectedProject.tecnologies}
              </p>
              <div className="modal-icons">
                <a href={selectedProject.demo}>
                  <i className="bx icons bxs-binoculars"></i>
                  <p className="modal__p">Ver Demo</p>
                </a>
                <a href={selectedProject.git}>
                  <i className="bx icons bxl-github"></i>
                  <p className="modal__p">Ver Repositorio</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

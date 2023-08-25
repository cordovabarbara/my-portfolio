import React, { useState } from 'react'
import "./styles/projects.css";
import images from "../utils/images"


const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (images) => {
    setSelectedImage(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const handleModalContainer = e => e.stopPropagation()
  
  return (
    <div className='project__box'>
    <span className='project__title' id='projects'>Proyectos</span>
    <div  className='project__principal'>
      <img className='project__img'src={images.image1} alt="" onClick={() => openModal(images.image1)}/>
      <img className='project__img' src={images.imagen2} alt="" onClick={() => openModal(images.imagen2)}/>
    </div>
    {showModal && (
         <div className={`modal ${showModal ? 'active' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={handleModalContainer}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-image" src={selectedImage} alt="" />
          </div>
        </div>
    )}
    </div>
  )
}

export default Projects
import React from 'react'
import images from '../utils/images'

const Slider = () => {
  return (
    <div className='project__slider'>
        {images.map(image => (
            <img className='project__imgs' src={image} alt=""/>
        ))}
    </div>
  )
}

export default Slider
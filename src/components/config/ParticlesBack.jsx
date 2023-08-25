import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import paticlesConfig from './particles-config'


const ParticlesBack = () => {

   const particlesInit = useCallback((engine) => {
       loadFull(engine)
     },[])
  return (
    <div>
        <Particles
    /*id="tsparticles"*/
    options={paticlesConfig}
    init={particlesInit}
    />
    </div>
  );
  }

export default ParticlesBack
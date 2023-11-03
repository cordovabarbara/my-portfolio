import imagens from '../utils/imagens'

const projectsData = [
    {
      title: 'Aplicación del Clima',
      description: 'En esta aplicacion podemos consultar el clima y cambiar de farenheit a centigrados y viceversa, adicionalmente podemos consultar el clima de otras ciudades, utilizando la barra de busqueda',
      tecnologies: 'Javascript, React, CSS',
      image: imagens.weatherapp,
      demo: 'https://barbara-cordova-weatherapp.netlify.app/',
      git: 'https://github.com/cordovabarbara/weather-app.git'
     
    },
    {
      title: 'Pokedex',
      description: 'Se consumio la API de pokemon para crear una aplicacion de consulta, donde el usuario podra ver todos los pokemones y sus caractericticas, ademas de  filtralos por tipo',
      tecnologies: 'Javascript, React, Router Dom, Redux, CSS',
      image: imagens.poke,
      demo: 'https://poke-api-barbara-cordova.netlify.app/',
      git: 'https://github.com/cordovabarbara/poke-api.git'
     
    },

  ];

  export default projectsData;
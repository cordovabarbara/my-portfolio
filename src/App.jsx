
import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import About from './components/About'
import Certificacions from './components/Certifications'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ParticlesBack from './components/config/ParticlesBack'




function App({init}) {
  return (
  <div>
    <ParticlesBack/>
    <Header/>
    <Banner />
    <About />
    <Skills/>
    <Certificacions/>
    <Projects/>
    <Contact/>
    <Navbar/>
  </div>
  )
}

export default App

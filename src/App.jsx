
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
import WhatsAppButton from './components/WhatsAppButton'






function App() {
  return (
  <div className='app'>
    <ParticlesBack/>
    <Header/>
    <WhatsAppButton/>
    <Banner />
    <About />
    <Skills/>
    <Certificacions/>
    <Projects/>
    <Contact/>
    <WhatsAppButton/>
    <Navbar/>
  </div>
  )
}

export default App

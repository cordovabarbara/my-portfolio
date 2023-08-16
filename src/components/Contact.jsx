import "./styles/contact.css";



const Contact = () => {
  return (
    <div className="title__cont" id='contact'>Contactame
      <form className="contact__form" action="https://formspree.io/f/xpzgplja" method="POST">
        <input className="input__name" type="text" placeholder="Tu Nombre"></input>
        <input className="input__email" type="email" placeholder="Tu Email"></input>
        <input className="input__msj" type="text" placeholder="Tu Mensaje" ></input>
        <button className="btn__submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Contact
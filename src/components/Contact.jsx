import "./styles/contact.css";



const Contact = () => {
  return (
    <div className="title__cont" id='contact'>Contact
      <form className="contact__form">
        <input className="input__name" type="text" placeholder="tu nombre"></input>
        <input className="input__email" type="email" placeholder="tu correo"></input>
        <input className="input__msj" type="text" placeholder="tu mensaje" ></input>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default Contact
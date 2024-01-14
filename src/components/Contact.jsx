import "./styles/contact.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzgplja");
  if (state.succeeded) {
    return <p className="form__ty">¡Gracias por Escribir!</p>;
  }
  return (
    <>
      <div id="contact" className="title__cont">
        Contactame
      </div>
      <article className="contact__form">
        <p className="contact__p">Estoy aquí para tu proxímo proyecto</p>
        <form className="form__box" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            className="input__email"
            placeholder="correo"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="input__msj"
            placeholder="mensaje"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="btn__submit"
            type="submit"
            disabled={state.submitting}
          >
            Enviar Mensaje
          </button>
        </form>
      </article>
    </>
  );
}

export default ContactForm;

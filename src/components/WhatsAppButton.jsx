import "./styles/whatsApp.css";

const WhatsAppButton = () => {
  const phoneNumber = '+573125975976'; // Reemplaza con tu número de teléfono
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="whatsapp">
      <button className="what ">
        <i className='bx bxl-whatsapp '></i>
      </button>
      </div>
    </a>
  );
};

export default WhatsAppButton;

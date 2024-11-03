import './WhatsAppBtn.css'
import whatsApp from '../../assets/whatsapp.svg'
const WhatsAppBtn = () => {
  return (
    <div className="whatsapp-btn">
      <a
        href="#" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsApp} // Replace with the path to your WhatsApp icon
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  )
}

export default WhatsAppBtn
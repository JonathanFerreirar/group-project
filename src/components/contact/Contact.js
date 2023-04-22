import "./contact.css";
import whatsapp from "../../assets/contact/whatsapp.png";
import email from "../../assets/contact/email.png";
import telefone from "../../assets/contact/telefone.png";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact">
        <div className="contact-social">
          <img src={email} alt="Email" />
          <p>ficticio@contecbh.com.br</p>
        </div>
        <div className="contact-social">
          <img src={whatsapp} alt="Whatsapp" />
          <p>WhatsApp: (00) 0 0000-0000</p>
        </div>
        <div className="contact-social">
          <img src={telefone} alt="Telefone Fixo" />
          <p>Fixo: (00) 0000-0000</p>
        </div>
      </div>
      <div className="subject">
        <h2> Assuntos </h2>
      </div>

      <div className="contact-footer">
        <div className="contact-footer-content">
          <div className="contact-subject" id="contact-subject-left">
            <p>Contabil e imposto de renda</p>
            <p>Pessoal</p>
            <p>Financeiro</p>
            <p>Fiscal</p>
            <p>Abertura</p>
          </div>
          <div className="contact-subject" id="contact-subject-right">
            <p>Jonathan ramal (000), Marcos ramal (000) e Luiz ramal (000)</p>
            <p>Alana ramal (000), Marcos ramal (000) e Luiz ramal (000)</p>
            <p>Marcos ramal (000)</p>
            <p>Alana ramal (000), ramal (000)</p>
            <p>Luiz ramal (000)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

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
          <p>jonathan@contecbh.com.br</p>
        </div>
        <div className="contact-social">
          <img src={whatsapp} alt="Whatsapp" />
          <p>WhatsApp: (31) 9 8874-0239</p>
        </div>
        <div className="contact-social">
          <img src={telefone} alt="Telefone Fixo" />
          <p>Fixo: (31) 3222-9924</p>
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
            <p>
              Matheus ramal (212), Jonathan ramal (218) e Tassio ramal (211)
            </p>
            <p>Vania ramal (206), Gustavo ramal (203) e Alan ramal (216)</p>
            <p>Yago ramal (217)</p>
            <p>Alexandra ramal (215), ramal (211)</p>
            <p>Alexandra ramal (202)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

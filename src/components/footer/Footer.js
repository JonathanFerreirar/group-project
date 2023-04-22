import whatsapp from "../../assets/service/whatsapp_1.png";
import back from "../../assets/service/back.png";
import contate from "../../assets/service/contate-nos_1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="container-img-zap">
          <a
            href="https://wa.me/5531988740239"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Link para WhatsApp" />
          </a>

          <p>(31) 9 8874-0239</p>
        </div>
        <div className="container-img-zap">
          <Link to={"/"}>
            <img src={back} alt="Button para voltar" />
          </Link>
        </div>
        <div className="container-texto-ramal">
          <img src={contate} alt="Imagem de telefone" />
          <p>(31) 3222-9924</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

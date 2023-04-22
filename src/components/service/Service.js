import "./service.css";
import leao from "../../assets/service/leao.png";
import alterar from "../../assets/service/alterar.png";
import consultando from "../../assets/service/consultando.png";
import consultor from "../../assets/service/consultor.png";
import empregada from "../../assets/service/empregada-domestica.png";
import inss from "../../assets/service/inss-logo.png";
import govbr from "../../assets/service/govbr-logo.png";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="Service">
      <h2> Nossos serviços </h2>
      <div className="services">
        <div className="services-left">
          <div className="services-left-content">
            <img src={leao} alt="Leao" />
            <Link to={"/contentService/0"} className="btn-leao">
              Imposto de renda
            </Link>
          </div>
        </div>

        <div className="services-right">
          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/1"} className="btn-service">
                <img src={govbr} alt="Gov.br" />
                <p> Assessoria MEI </p>
              </Link>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/2"} className="btn-service">
                <img src={empregada} alt="Domestica" />
                <p> eSocial Doméstica </p>
              </Link>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/3"} className="btn-service">
                <img src={alterar} alt="Alteracao" />
                <p> Abertura, Alteração e baixa </p>
              </Link>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/4"} className="btn-service">
                <img src={consultando} alt="Consultando" />
                <p> Consultoria </p>
              </Link>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/5"} className="btn-service">
                <img src={consultor} alt="Consultor" />
                <p> Planejamento Tributário </p>
              </Link>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <Link to={"/contentService/6"} className="btn-service">
                <img src={inss} alt="INSS" />
                <p> INSS </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

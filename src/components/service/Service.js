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
    <div>
      <h2> Nossos serviços </h2>
      <div className="services">
        <div className="services-left">
          <div className="services-left-content">
            <img src={leao} alt="Leao" />
            <Link to={"/contentService"} className="btn-leao">
              {" "}
              Imposto de renda{" "}
            </Link>
          </div>
        </div>

        <div className="services-right">
          <div className="service-rigt-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={govbr} alt="Gov.br" />
                <p> Assessoria MEI </p>
              </button>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={empregada} alt="Domestica" />
                <p> eSocial Doméstica </p>
              </button>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={alterar} alt="Alteracao" />
                <p> Abertura, Alteração e baixa </p>
              </button>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={consultando} alt="Consultando" />
                <p> Consultoria </p>
              </button>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={consultor} alt="Consultor" />
                <p> Planejamento Tributário </p>
              </button>
            </div>
          </div>

          <div className="service-rigth-card">
            <div className="service-right-card-content">
              <button type="button" className="btn-service">
                <img src={inss} alt="INSS" />
                <p> INSS </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

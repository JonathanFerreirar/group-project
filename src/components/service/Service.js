import "./service.css";
import leao from '../../assets/service/leao.png';
import alterar from '../../assets/service/alterar.png';
import consultando from '../../assets/service/consultando.png';
import consultor from '../../assets/service/consultor.png';
import empregada from '../../assets/service/empregada-domestica.png';
import inss from '../../assets/service/inss-logo.png';
import govbr from '../../assets/service/govbr-logo.png';

function Service() {
  return (
    <div>
      <h2> Nossos serviços </h2>
      <div className="services">
          <div className="services-left">
            <div className="services-left-content">
              <img src={leao}/>
              <button className="btn-leao"> Imposto de renda </button>
            </div>
          </div>

          <div className="services-right">

            <div className="service-rigt-card">
              <div className="service-right-card-content">
                <img src={govbr} />
                <p> Assessoria MEI </p>
              </div>
            </div>

            <div className="service-rigth-card">
              <div className="service-right-card-content">
                <img src={empregada} />
                <p> eSocial Doméstica </p>
              </div>
            </div>

            <div className="service-rigth-card">
                <div className="service-right-card-content">
                  <img src={alterar} />
                  <p> Abertura, Alteração e baixa </p>
                </div>
            </div>

            <div className="service-rigth-card">
              <div className="service-right-card-content">
                <img src={consultando} />
                <p> Consultoria </p>
              </div>
            </div>

            <div className="service-rigth-card">
              <div className="service-right-card-content">
                <img src={consultor} />
                <p> Planejamento Tributário </p>
              </div>
            </div>

            <div className="service-rigth-card">
              <div className="service-right-card-content">
                <img src={inss} />
                <p> INSS </p>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Service;

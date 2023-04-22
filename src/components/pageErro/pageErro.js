import "./pageErro.css";
import inicio from "../../assets/erro-page/inicio.png";
import erro404 from "../../assets/erro-page/erro-404.png";
import { Link } from "react-router-dom";

function ErroPage() {
  return (
    <div>
      <div className="error">
        <img src={erro404} alt="Imagem da pagina de Error" />
      </div>
      <h1>PÁGINA NÃO ENCONTRADA CLIQUE NO BOTÃO ABAIXO PARA VOLTAR</h1>
      <div className="error-btn">
        <Link to={"/"}>
          <img src={inicio} alt="Button para cliclar de volta" />
        </Link>
      </div>
    </div>
  );
}

export default ErroPage;

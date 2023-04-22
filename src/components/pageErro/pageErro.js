import "./pageErro.css"
import inicio from "../../assets/erro-page/inicio.png"
import erro404 from "../../assets/erro-page/erro-404.png"
import { Link } from "react-router-dom"

function ErroPage() {
  return (
    <div>
      <div className="error">
        <img src={erro404}/>
      </div>
      <h1>PÁGINA NÃO ENCONTRADA CLIQUE NO BOTÃO ABAIXO PARA VOLTAR</h1>
      <div className="error-btn">
        <Link to={"/"}>
          <img src={inicio}/>
        </Link>
      </div>
    </div>
  );
}

export default ErroPage;

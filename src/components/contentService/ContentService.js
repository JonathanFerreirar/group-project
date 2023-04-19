import "./contentService.css";
import leao from "../../assets/service/leao.png";

function ContentService() {
  return (
    <div className="container">
      <div className="image">
        <img src={leao} alt="Leao"/>
      </div>

      <div>
        <p className="mainText">
          {" "}
          o Imposto de Renda é uma obrigação tributária anual que incide sobre
          os rendimentos das pessoas físicas e jurídicas para tornar esse
          processo mais simples e tranquilo, nossa equipe de especialistas em
          contabilidade está preparada para cuidar de todas as etapas do seu
          Imposto de Renda, garantindo conformidade com o a legislação vigente,
          deduções e benefícios fiscais. Não deixe para a ultima hora, agende
          sua consulta conosco e fique em dia com suas obrigações fiscais
        </p>
      </div>
    </div>
  );
}

export default ContentService;

import "./contentService.css";
import leao from "../../assets/service/leao.png";
import alterar from "../../assets/service/alterar.png";
import consultando from "../../assets/service/consultando.png";
import consultor from "../../assets/service/consultor.png";
import empregada from "../../assets/service/empregada-domestica.png";
import inss from "../../assets/service/inss-logo.png";
import govbr from "../../assets/service/govbr-logo.png";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ContentService() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    switch (id) {
      case "0":
        setText(
          "O Imposto de Renda é uma obrigação tributária anual que incide sobre os rendimentos das pessoas físicas e jurídicas. Para tornar esse processo mais simples e tranquilo, nossa equipe de especialistas em contabilidade está preparada para cuidar de todas as etapas do seu Imposto de Renda, garantindo conformidade com a legislação vigente, deduções e benefícios fiscais. Não deixe para a última hora, agende sua consulta conosco e fique em dia com suas obrigações fiscais."
        );
        setImage(leao);
        break;

      case "1":
        setText(
          "O MEI (Microempreendedor Individual) é uma forma simplificada de formalização de pequenos negócios no Brasil, destinado a empreendedores que faturem até R$ 81.000,00 por ano. Ele oferece vantagens como carga tributária reduzida, emissão de notas fiscais, possibilidade de contratação de funcionário e acesso a benefícios previdenciários. É uma opção simples e acessível para formalizar o negócio e aproveitar os benefícios de ser um empreendedor formalizado. Consulte nos para obter mais informações sobre o MEI e suas vantagens!"
        );
        setImage(govbr);
        break;

      case "2":
        setText(
          "Ter o e-Social Doméstica é de extrema importância para os empregadores domésticos no Brasil. Essa plataforma online simplifica o cumprimento das obrigações trabalhistas e previdenciárias, garantindo a regularidade na relação de trabalho e evitando multas. Com o e-Social Doméstica, é possível gerenciar de forma unificada o registro e pagamento de salários, cálculo de encargos e geração de guias de tributos. Além disso, o e-Social Doméstica auxilia na organização e controle das obrigações fiscais, possibilitando maior transparência e segurança nas relações de trabalho. Ter o e-Social Doméstica em dia também é fundamental para garantir os direitos dos empregados domésticos, como o acesso a benefícios previdenciários. Consultar um contador é essencial para entender a correta utilização do e-Social Doméstica e garantir a conformidade com a legislação vigente."
        );
        setImage(empregada);
        break;

      case "3":
        setText(
          "A realização de alterações e baixas na empresa é um procedimento fundamental para manter a regularidade e cumprir as obrigações legais. Essas ações são necessárias para atualizar informações cadastrais, como mudança de endereço, alteração de sócios, capital social, entre outros. Além disso, a baixa é importante quando a empresa encerra suas atividades. A não realização dessas ações pode acarretar em multas, penalidades e até mesmo a suspensão das atividades da empresa. Portanto, é essencial que os empresários estejam atentos às obrigações de atualização e encerramento da empresa, consultando um contador para garantir a conformidade com a legislação vigente."
        );
        setImage(alterar);
        break;

      case "4":
        setText(
          "A consultoria contábil é de extrema importância para as empresas, independentemente do seu porte ou segmento. Ela oferece orientações e soluções específicas para o correto cumprimento das obrigações fiscais, tributárias e trabalhistas, evitando erros e irregularidades que possam gerar multas e penalidades. Além disso, a consultoria contábil pode auxiliar na gestão financeira, na análise de custos e na identificação de oportunidades de economia tributária. Outro benefício é o acompanhamento das mudanças constantes na legislação, mantendo a empresa sempre atualizada. Contar com o suporte de um contador experiente e especializado pode ser fundamental para o sucesso e a sustentabilidade do negócio."
        );
        setImage(consultando);
        break;

      case "5":
        setText(
          "O planejamento tributário é uma estratégia essencial para as empresas visando a otimização dos recursos financeiros e a minimização dos custos tributários. Por meio do planejamento tributário, é possível identificar oportunidades legais de redução da carga tributária, seja por meio da escolha do regime tributário mais adequado, aproveitamento de incentivos fiscais, análise de deduções permitidas, entre outras estratégias. Com um planejamento tributário bem estruturado, a empresa pode economizar recursos financeiros, melhorar sua competitividade no mercado e até mesmo reinvestir em seu próprio crescimento. Além disso, o planejamento tributário contribui para a conformidade com a legislação fiscal, evitando riscos de multas e penalidades. Contar com o apoio de um contador especializado na área tributária é fundamental para realizar um planejamento tributário eficiente e garantir a conformidade com as obrigações fiscais vigentes. "
        );
        setImage(consultor);
        break;

      default:
        setText(
          "O INSS é de extrema importância para a garantia da proteção social dos trabalhadores brasileiros. Ele oferece diversos benefícios que ajudam a garantir a subsistência das pessoas em momentos de dificuldade, como aposentadoria, auxílio-doença, pensão por morte, entre outros. Além disso, o INSS também atua na prevenção de acidentes de trabalho e na promoção da saúde ocupacional. Sem a existência do INSS, muitas pessoas ficariam desamparadas e sem nenhuma fonte de renda em situações de risco ou vulnerabilidade, o que torna sua atuação essencial para a proteção e bem-estar da população."
        );
        setImage(inss);
        break;
    }
  }, [id]);

  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="imagem relativa ao serviço" />
      </div>

      <div className="contentText">
        <p className="mainText">{text}</p>
      </div>
    </div>
  );
}

export default ContentService;

import {
  BFcScriptImg,
  CaixaImagens,
  CaixaText,
  Container,
  CssImgs,
  GitImgs,
  HtmllImg,
  JasperImg,
  JavasImgs,
  NodeJsImgs,
  ReactImg,
  SqlImg,
  Pythoon,
  Mysql,
} from "./styles";
import Html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import Git from "../../../assets/gittt.png";
import React from "../../../assets/React.png";
import Gitt from "../../../assets/github.png";
import Javscript from "../../../assets/js.png";
import Node from "../../../assets/Node.png";
import Betha from "../../../assets/betha.png";
import SQl from "../../../assets/Sql.jpg";
import Jasper from "../../../assets/jaspersoft.jpg";
import TypeIt from "typeit-react";
import python from "../../../assets/python.jpg";
import mysql from "../../../assets/mysql.avif";

function Habilidade() {
  return (
    <Container>
      <CaixaText>
        <h1>
          <TypeIt // adicionando TypeIt "mudança de texto "
            options={{ loop: isFinite }}
            getBeforeInit={(instance) => {
              instance.type("ALGUMAS HABILIDADES.").pause(500).go();

              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </CaixaText>

      <CaixaImagens>
        <HtmllImg>
          <img src={Html} alt="" />
          <h4>
            HTML (HyperText Markup Language) é uma linguagem de marcação usada
            para criar páginas da web. Ela utiliza tags para estruturar e
            organizar o conteúdo, incluindo texto, imagens, links e formulários.
            Os navegadores interpretam o HTML para exibir páginas da web aos
            usuários. É a base da maioria dos sites e trabalha em conjunto com o
            CSS para controlar a aparência e o estilo das páginas.
          </h4>
        </HtmllImg>

        <ReactImg>
          <img src={React} alt="" />
          <h4>
            O React é uma biblioteca JavaScript usada para criar interfaces de
            usuário interativas e reativas em aplicações web e móveis. Ele se
            destaca pela sua eficiência, componentização e uso do Virtual DOM, o
            que torna as atualizações de interface mais rápidas. O React é
            amplamente utilizado e tem uma grande comunidade de desenvolvedores.
          </h4>
        </ReactImg>

        <GitImgs>
          <img src={Gitt} alt="" />
          <h4>
            O Git é um sistema de controle de versões amplamente usado para
            rastrear e gerenciar as alterações em projetos de software. Ele
            permite que desenvolvedores trabalhem em colaboração, mantenham um
            histórico de alterações, e facilmente revertam ou mesclam código. O
            Git é conhecido por ser rápido, eficiente e amplamente adotado na
            indústria de desenvolvimento de software.
          </h4>
        </GitImgs>

        <CssImgs>
          <img src={css} alt="" />
          <h4>
            O CSS (Cascading Style Sheets) é uma linguagem de marcação usada
            para controlar a apresentação e o estilo de elementos em páginas da
            web. Ele define a aparência de texto, cores, layout e posicionamento
            de elementos, permitindo que os desenvolvedores personalizem o
            design de uma página web de forma eficiente e separada do conteúdo
            HTML.
          </h4>
        </CssImgs>

        <JavasImgs>
          <img src={Javscript} alt="" />

          <h4>
            JavaScript é uma linguagem de programação amplamente usada para
            tornar páginas da web interativas e dinâmicas. Ela é executada no
            navegador do cliente e permite a manipulação de elementos HTML, a
            interação com o usuário e a comunicação com servidores. JavaScript é
            uma parte fundamental do desenvolvimento web e é conhecido por sua
            versatilidade e ampla aplicação em diversos tipos de projetos, desde
            páginas da web simples até aplicativos complexos.
          </h4>
        </JavasImgs>

        <NodeJsImgs>
          <img src={Node} alt="" />
          <h4>
            Node.js é uma plataforma de desenvolvimento que permite a execução
            de código JavaScript no servidor, destacando-se por sua velocidade e
            eficiência. É ideal para criar aplicativos de rede escaláveis e em
            tempo real, amplamente utilizado no desenvolvimento de servidores
            web, APIs e aplicações de alto desempenho. Baseado no motor V8 do
            Google Chrome, Node.js é mantido como um projeto de código aberto
            com uma vasta comunidade de desenvolvedores.
          </h4>
        </NodeJsImgs>

        <BFcScriptImg>
          <img src={Betha} alt="" />
          <h4>
            O bfc-script é um framework que possibilita a integração de scripts
            com aplicações. A linguagem possui poucos comandos e algumas
            similaridades com a linguagem Java, como os operadores (lógico,
            comparação, atribuição e aritimético), o uso de chaves para
            circundar blocos, sintaxe case sensitive, etc. Para simplificar os
            scripts, não é necessário usar ponto e vírgula no final de cada
            instrução e os comandos foram desenvolvidos no idioma português,
            para simplificar o seu uso à usuários.
          </h4>
        </BFcScriptImg>

        <SqlImg>
          <img src={SQl} alt="" />
          <h4>
            SQL (Structured Query Language) é uma linguagem de programação usada
            para gerenciar e consultar bancos de dados relacionais. Ela permite
            que os usuários interajam com bancos de dados para criar, recuperar,
            atualizar e excluir dados. SQL é composto por comandos como SELECT
            (para recuperar dados), INSERT (para adicionar dados), UPDATE (para
            modificar dados) e DELETE (para remover dados). É uma linguagem
            fundamental em bancos de dados e é amplamente utilizada para
            armazenar, recuperar e gerenciar informações de forma estruturada.
          </h4>
        </SqlImg>

        <JasperImg>
          <img src={Jasper} alt="" />
          <h4>
            Jaspersoft é uma plataforma de Business Intelligence (BI) que
            oferece ferramentas para criar relatórios, painéis de controle e
            análises de dados interativos. Ela permite a integração de várias
            fontes de dados, agendamento de relatórios, distribuição fácil e
            personalização para atender às necessidades específicas das
            empresas. Jaspersoft é amplamente usada para ajudar as organizações
            a tomar decisões informadas com base em dados.
          </h4>
        </JasperImg>

        <Pythoon>
          <img src={python} alt="" />
          <h4>
            Python é uma linguagem de programação de alto nível, interpretada e
            versátil, criada por Guido van Rossum em 1991. Destaca-se por sua
            sintaxe simples e legível, sendo uma ótima escolha para iniciantes.
            Suporta múltiplos paradigmas de programação e possui um vasto
            ecossistema de bibliotecas e frameworks, facilitando o
            desenvolvimento em diversas áreas, como web development, machine
            learning e ciência de dados. Sua comunidade ativa e acolhedora
            contribui para sua popularidade em diversos setores
          </h4>
        </Pythoon>

        <Mysql>
          <img src={mysql} alt="" />
          <h4>
            O MySQL é um RDBMS amplamente utilizado em todo o mundo,
            desenvolvido pela MySQL AB e posteriormente adquirido pela Oracle
            Corporation. É de código aberto e oferece desempenho, confiabilidade
            e facilidade de uso. Suas características incluem suporte a SQL,
            multiplataforma, escalabilidade, transações ACID, segurança
            avançada, replicação, clustering, comunidade ativa, suporte
            profissional e integração com outras tecnologias. É uma escolha
            popular para aplicativos web devido à sua confiabilidade e
            desempenho, sendo acessível para empresas de todos os tamanhos.
          </h4>
        </Mysql>
      </CaixaImagens>
    </Container>
    /*

me fale 




*/
  );
}
export default Habilidade;

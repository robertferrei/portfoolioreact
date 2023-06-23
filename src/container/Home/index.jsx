import { Container, Div, Imagem, Objetivo, Texto } from "./styles";
import Logo from "../../assets/developer.png";
import Logoo from "../../assets/img.png";
import TypeIt from "typeit-react";
 
import Typeit from "../../components/Typeit";
 
 
 
function Home() {
  return (
    <>
      <Container>
        <Texto>
          <h2>
            Óla me chamo
            <div>
              <TypeIt
                options={{ loop: isFinite }}
                getBeforeInit={(instance) => {
                  instance.type("Robert Ferreira.").pause(-500).go();

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>
          </h2>
          <p>
            Meu nome é Robert e tenho 18 anos. Atualmente, estou trabalhando
            como freelancer, onde tenho a oportunidade de realizar diversos
            projetos. Neste momento, estou focado em estudar programação para
            aprimorar meus conhecimentos técnicos. A paixão que sinto por essa
            área cresce a cada dia.
          </p>
        </Texto>

        <Imagem>
          <img src={Logo} alt="" />
        </Imagem>
      </Container>

      <Div>
        <div>...</div>
      </Div>

      <Objetivo>
        <Texto>
          <h1>
            Objetivo
            <span>
              <Typeit></Typeit>
            </span>
          </h1>
          <p>
            Meu objetivo profissional é crescer constantemente como pessoa e
            evoluir cada vez mais, tanto no aspecto técnico quanto no pessoal,
            para poder ajudar e contribuir de maneira significativa para o
            bem-estar de meus companheiros de equipe e familiares. Busco
            constantemente aprimorar minhas habilidades e conhecimentos, tanto
            dentro da minha área de atuação como em outras áreas relacionadas, a
            fim de me tornar uma pessoa mais versátil e capaz de enfrentar
            diversos desafios.
          </p>
        </Texto>
        <img src={Logoo} alt="" />
      </Objetivo>
                
       
             
      
    </>
  );
}

export default Home;

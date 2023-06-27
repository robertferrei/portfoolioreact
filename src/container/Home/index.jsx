import {
  Container,
  Div,
  Drop,
  Imagem,
  ImagemSecond,
  Objetivo,
  Principal,
  Texto,
} from "./styles";
import Logo from "../../assets/developer.png";
import Logoo from "../../assets/img.png";
import TypeIt from "typeit-react";

import Typeit from "../../components/Typeit";

import Dropdown from "../../components/Dropdown";
import { motion } from "framer-motion";

function Home() {
  return (
    <Principal>
      <Drop>
      <Dropdown />
      </Drop>
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
          <motion.img
            className="motion"
            src={Logo}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 20, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "linear",
            }}
            style={{}}
          />
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

        <ImagemSecond>
          <motion.img
            className="motion"
            src={Logoo}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 20, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{}}
          />
        </ImagemSecond>
      </Objetivo>
    </Principal>
  );
}

export default Home;

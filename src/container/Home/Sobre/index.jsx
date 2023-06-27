import { Container, Hobby, Imagem, Sports, Titulo } from "./styles";
import Robert from "../../../assets/ROBERT.jpg";
import Questions from "../../../assets/Questions.png";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import Soccer from "../../../assets/Soccer.png";
import Workout from "../../../assets/Workout.png";
import Code from "../../../assets/Codigo.png";

function Sobre() {
  return (
    <>
      <Titulo>
        <h2>
          <TypeIt
            options={{ loop: isFinite }}
            getBeforeInit={(instance) => {
              instance.type("QUEM É O ROBERT ? .").pause(500).go();

              // Remember to return it!
              return instance;
            }}
          />{" "}
        </h2>
      </Titulo>
      <Container>
        <div>
          <img className="robert" src={Robert} alt="" />
          <p>
            Desde pequeno, Robert sempre foi um menino dedicado e sonhador. Sua
            determinação em trazer o melhor para as pessoas ao seu redor foi uma
            característica marcante desde cedo. Ele sempre teve o desejo de
            ajudar aqueles que estavam ao seu lado, tornando-se uma presença
            positiva em suas vidas. Desde tenra idade, Robert demonstrou um
            interesse profundo por jogos e tecnologia. Essa paixão o impulsionou
            a buscar algo no campo da tecnologia que ele amasse e se dedicasse.
            Foi assim que ele encontrou a programação, uma área que se tornou
            sua verdadeira vocação. Hoje em dia, Robert dedica seu tempo e
            energia para aprimorar suas habilidades de programação. Ele busca
            constantemente aprender e se aperfeiçoar, sempre em busca de
            conhecimento e inovação. Sua determinação e paixão pela programação
            o impulsionam a enfrentar desafios e buscar soluções criativas.
          </p>
          <Imagem>
            <motion.img
              src={Questions}
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
              style={{
               
              }}
            />
          </Imagem>
        </div>
      </Container>
      <Hobby>
        <h1>Hobby</h1>
      </Hobby>

      <Sports>
        <div></div>
        <div>
          <motion.img
            src={Soccer}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 30, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{
               
            }}
          />
          <h3>Futebol</h3>
          <p>
            Uma das atividades que mais me traz alegria é jogar futebol. A
            adrenalina que corre nas veias, a emoção de estar em campo, o
            trabalho em equipe e a competição saudável são apenas algumas das
            razões pelas quais esse esporte me encanta. Cada partida é uma
            oportunidade de superar desafios, testar minhas habilidades e me
            divertir ao mesmo tempo.
          </p>
        </div>
        <div>
          <motion.img
            src={Workout}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 30, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{
              
            }}
          />
          <h3>Academia</h3>
          <p>
            A atmosfera energizante da academia me inspira. O som dos pesos
            sendo levantados, a música pulsante ao fundo e o ambiente repleto de
            pessoas determinadas criam uma atmosfera única, que me impulsiona a
            dar o meu melhor. Cada exercício é um passo em direção ao meu
            objetivo pessoal, seja ele ganhar força, melhorar minha resistência
            ou simplesmente manter um estilo de vida saudável.
          </p>
        </div>
        <div>
          <motion.img
            src={Code}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 30, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{
              
            }}
          />
          <h3>Código em Equipe</h3>
          <p>
            Uma das atividades que me fascina é programar em conjunto com uma
            equipe ou amigos. A experiência de codificar em conjunto é
            enriquecedora, inspiradora e estimulante. Cada sessão de codificação
            compartilhada é uma oportunidade de aprendizado, colaboração e
            diversão. A magia de codar em equipe reside na sinergia que surge
            quando mentes criativas se unem. Trabalhar em conjunto nos permite
            trocar ideias, explorar diferentes abordagens e aproveitar a
            diversidade de perspectivas para criar soluções inovadoras. A cada
            linha de código escrita, estamos construindo algo maior do que
            poderíamos realizar individualmente.
          </p>
        </div>
      </Sports>
    </>
  );
}

export default Sobre;

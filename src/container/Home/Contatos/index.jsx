import { Container, Formulario, Imagem } from "./styles";
import Contato1 from "../../../assets/contato.png";
import Contato2 from "../../../assets/contato1.png";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
function Contatos() {
  return (
    <>
      <Container>
        <Imagem>
          <motion.img
            src={Contato1}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 100, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            style={{
               
            }}
          />
          <h3>Entre em Contato Comigo.</h3>
          <motion.img
            src={Contato2}
            alt=""
            initial={{ y: 0 }}
            animate={{
              y: [0, 100, 0], // Define os valores de y para a animação
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            style={{
               
            }}
          />
        </Imagem>

        <div>
          <h1>Entre em Contato comigo pelo:</h1>
        </div>
      </Container>
      <Formulario>
        <a
          href="https://wa.me/5516994663770?text=entre+em+contato+comigo"
          target="_blank"
          rel="noreferrer"
        >
          <h2>/WHATSAPP</h2>
        </a>
        <h2>/EMAIL: robertferreiramaia20@gmail.com</h2>
        <a
          href="https://www.linkedin.com/in/robert-ferreira-/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>/lINKEDIN</h2>
        </a>
        <a
          href="https://github.com/robertferrei"
          target="_blank"
          rel="noreferrer"
        >
          <h2>/GITHUB</h2>
        </a>
        <h1>clique em alguma rede social</h1>
      </Formulario>
    </>
  );
}

export default Contatos;

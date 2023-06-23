import SLider from "../../../components/slider";
import { Container } from "../styles";
import { Texto } from "./styles";
import Imagem from "../../../assets/teclado.png";
import Imagem2 from "../../../assets/img2.png";
import { useState, useEffect } from "react";
import TypeIt from "typeit-react";
 
 
 
 

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/robertferrei/repos")
      .then((Response) => Response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <>
      <Texto>
        <img className="imagem-secundaria" src={Imagem2} alt="" />
        <div className="efeito-Typeit">
          <h3>
            {" "}
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance
                  .type("Conheça alguns dos meus Projetos.")
                  .pause(500)
                  .go();

                // Remember to return it!
                return instance;
              }}
            />
          </h3>
        </div>
        <img src={Imagem} alt="" />{" "}
      </Texto>
      <ul>
          {repositories.map((repository) => {
           
            
                <h3>{repository.name}</h3>
              
               
           
          })}
        </ul>
      <Container>
        
        <SLider> </SLider>
         
       
      </Container>
    </>
  );
}

export default Projetos;

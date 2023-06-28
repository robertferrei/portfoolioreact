import SLider from "../../../components/Slider";
import { Container } from "../styles";
import { Main, Texto } from "./styles";
import Imagem from "../../../assets/teclado.png";
import Imagem2 from "../../../assets/img2.png";
import { useState, useEffect } from "react";
import TypeIt from "typeit-react";
 
 
 
 

function Projetos() {
  const [repositories, setRepositories] = useState([]);

   

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
            return (
              <li>
                <h3>{repository.name}</h3>
              
              </li>
            );
          })}
        </ul>
 
        <SLider> </SLider>
      
       <Main>

          <h1>...</h1>
        </Main>
        
         
       
     
    </>
  );
}

export default Projetos;

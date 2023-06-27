import { Container } from "./styles";
import Html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import Git from "../../../assets/gittt.png"
import React from "../../../assets/React.png"
import Gitt from "../../../assets/github.png"
import Javscript from "../../../assets/js.png"
import Node from "../../../assets/Node.png"
import TypeIt from "typeit-react";
function Habilidade() {
  return  (
    <Container>
      <div>
        <h1><TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance
                  .type("ALGUMAS HABILIDADES.")
                  .pause(500)
                  .go();

                // Remember to return it!
                return instance;
              }}
            /></h1>
      </div>
      <div>
      <img src={Html} alt="" />
      <img src={React} alt="" />
      <img src={Git} alt="" />
      <img src={css} alt="" />
      <img src={Gitt} alt="" />
      <img src={Javscript} alt="" />
      <img src={Node} alt="" />
      </div>
    </Container>
  )
   
}
export default Habilidade;

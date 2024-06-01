import { Container, Descrition } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import imagem from "../../assets/download.png";
import imagem1 from "../../assets/downloadd.png";
import imagem2 from "../../assets/download 2.png";
import imagem3 from "../../assets/download 3.png";
import imagem4 from "../../assets/download 4.png";
import imagem5 from "../../assets/download 5.png";
import imagem6 from "../../assets/download 6.png";
import imagem7 from "../../assets/download 7.png";
import imagem8 from "../../assets/download 8.png";
import imagem9 from "../../assets/download 9.png";
import imagem10 from "../../assets/download 10.png";
import imagem11 from "../../assets/download 11.png";
import imagem12 from "../../assets/download 12.png";
import imagem13 from "../../assets/download 13.png";
import imagem14 from "../../assets/pysimpleguy.jpg";
import imagem15 from "../../assets/CONSULTAPYMPLE.png";
import imagem16 from "../../assets/crud.png";
import TypeIt from "typeit-react";
import Button from "../Button";
import Repository from "../buttonRpositorio";

import "swiper/css";
import "swiper/css/navigation";
import Cardss from "../Cards";

function SLider() {
  return (
    <>
      <Container>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <h3>
              <TypeIt
                options={{ loop: isFinite }}
                getBeforeInit={(instance) => {
                  instance.type("STARBUCKS.").pause(500).go();

                  // Remember to return it!
                  return instance;
                }}
              />

              <a
                href="https://starbucksatualizado.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                  <Button />
                {" "}
              </a>
            </h3>
            <img className="imagem1" src={imagem} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                  a aplicaçõesão do "starbucks" baseou-se na escolhe de café,
                  especificados pelas cores: verde,rosa claro e rosa escuro para
                  melhor dinâmica. ver projetos|| html , css , javascript
                </p>
                <a
                  href="  https://github.com/robertferrei/PROJETO-STAR-BUCKS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("   CONVERSOR-DE-MOEDAS.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetoconvertmoney.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem1" src={imagem1} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                objetivo desse projeto foi criar um conversor de moedas com
                intuito de melhorar o conhecimento em javascript || Html, css,
                javascript
                </p>
                <a
                href="  https://github.com/robertferrei/conversor-de-moeda"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>
          
          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("   SAMSUNG.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetossamsung.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem2" src={imagem2} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                o objetivo desse projeto foi replicar uma interface de compra de
                um smartphone samsung. || Html, Css , javascript
                </p>
                <a
                href="  https://github.com/robertferrei/PROJETO-SAMSUNG"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("   PREVISÃO-DO-TEMPO.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projeto-previsao-do-tempo-six.vercel.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem3" src={imagem3} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                o objetivo desse projeto foi dar ao usario uma nova forma
                complementar de saber as temperaturas climaticas ver projetos ||
                html , css , javscript
                </p>
                <a
                href="  https://github.com/robertferrei/projeto-previsao-do-tempo"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("  SHOOPPING -MOBILE.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetoeasyshooping.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem4" src={imagem4} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                objetivo desse projeto foi testado o conhecimento tecnico
                responsividade, com o intuito de melhorar as capacidades
                técnicas || html ,css , javascript
                </p>
                <a
                href=" https://github.com/robertferrei/projeto-Easy-Shopping-Via-Mobile"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("COVERAGE-LOCATION").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetowidecovertion.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem5" src={imagem5} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                objetivo desse projeto foi testado de primeira vista os
                conhecimentos em html e css ,com o intuito de melhorar as
                capacidades técnicas|| html, css , javscript
                </p>
                <a
                href=" https://github.com/robertferrei/projeto-Wide-coverage-location"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("PORTFOLIO.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://robertportfolio0.netlify.app/#home"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem6" src={imagem6} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                objetivo desse projeto foi transmitir o meu conhecimento técnico
                com um portfólio bonito e atraente || html, css , javscript
                </p>
                <a
                href="  https://github.com/robertferrei/portfolio"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("VEREFICADOR-DE-IDADE.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://verificadoridadee.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem7" src={imagem7} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                esse projeto foi feito para fazer diversas vereficações de
                idades. || html, css , javscript
                </p>
                <a
                href=" "
                target="_blank"
                rel="noreferrer"
                >
                
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("PAGINA-LOGGIN.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://logindarkkk.netlify.app/?name=robert&email=&passoword=eefsfsedes"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem8" src={imagem8} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                esse projeto é uma pagina de login que faz alterações para as
                cores dark. || html, css , javscript
                </p>
                <a
                href="https://github.com/robertferrei/PROJETO-PAGINA-LOGGIN"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("PAGINA-NOTICIAS").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://noticiasss.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem9" src={imagem9} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                intuito desse projeto foi replicar uma pagina de noticias com
                melhores didadicas. || html, css ,
                </p>
                <a
                href="https://github.com/robertferrei/PROJETO-PAGINA-INICIAL-DE-NOTICIAS"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("  GERADOR-DE-SENHA.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://geradordesenhass.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem10" src={imagem10} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                esse projeto foi feito para ajudar os usuarios a criar senhas
                aleatorias para o seu uso no dia a dia. || html, css , javscript
                </p>
                <a
                href=" https://github.com/robertferrei/PROJETO-GERADOR-DE-SENHA"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("    LISTA-DE-TAREFA.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projeto-lista-de-tarefa.vercel.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem11" src={imagem11} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                esse projeto foi feito para ajudar os usuarios a marcar suas
                tarefas do dia a dia . || ReactJs, styled-components
                </p>
                <a
                href=" https://github.com/robertferrei/PROJETO-LISTA-DE-TAREFA"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type("   DEV-FILM.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://dev-film-8u5e.vercel.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem12" src={imagem12} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                esse projeto foi feito para testar as diversos components do
                react e testa o conhecimento Tecnico sobre API, REST. ||
                ReactJs, Styled-components, API
                </p>
                <a
                href=" https://github.com/robertferrei/dev-film"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>
          
          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type(" INSTRAGRAM.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetoinstagramm.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
                <Button />
              </a>
            </h3>
            <img className="imagem13" src={imagem13} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                o objetivo desse projeto foi replicar uma interface de página da
                login do instagram,com intuito de melhorar a dinâmica. ver
                projetos|| html, css, javascript
                </p>
                <a
                href="https://github.com/robertferrei/PROJETO-INSTRAGRAM"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>

          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type(" TODOLIST PYTHON.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                href="https://projetoinstagramm.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
               
              </a>
            </h3>
            <img className="imagem14" src={imagem14} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
              Nesse projeto foi feito umma TOdolist com o frameork PysimpleGui,
              esse projeto foi feito para melhorar as capacidades técnicas em python
                </p>
                <a
                //href="https://github.com/robertferrei/PROJETO-TODOLIST"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type(" CONSULTA CPF.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                //href="https://projetoinstagramm.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
               
              </a>
            </h3>
            <img className="imagem15" src={imagem15} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                Esse projeto foi feito com objetivo de aprimorar os conhecimentos técnicos
                em python. Com o framework pysimpleGui foi feito uma validação de cpf, 
                e uma geração de cpf aleatório de acordo com o algoritmo 
                 </p>
                <a
                href="https://github.com/robertferrei/PROJETO-GERADOR-DE-CPF-E-CONSULTA-DE-CPF"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
          </SwiperSlide>


          
          <SwiperSlide>
            <h3>
            <TypeIt
              options={{ loop: isFinite }}
              getBeforeInit={(instance) => {
                instance.type(" CONSULTA CPF.").pause(500).go();

                // Remember to return it!
                return instance;
              }}
            />{" "}

              <a
                //href="https://projetoinstagramm.netlify.app"
                target="_blank"
                rel="noreferrer"
                
              >
                {" "}
               
              </a>
            </h3>
                        <img className="imagem16" src={imagem16} alt="" />
            <Descrition>
              <h1>Descrição</h1>
              <div>
                <p>
                Esse projeto foi feito com objetivo de aprimorar os conhecimentos técnicos
                no framework LARAVEL. primeira vez Criando uma API com laravel                
                  </p>
                <a
                href="https://github.com/robertferrei/API-DE-LIVROS-LARAVEL"
                target="_blank"
                rel="noreferrer"
                >
                  <Repository></Repository>
                </a>
              </div>
            </Descrition>
                      </SwiperSlide>

          


         



         






        </Swiper>
      </Container>
    </>
  );
}

export default SLider;



// <img className="imagem16" src={imagem16} alt="" />
// <Descrition>
//   <h1>Descrição</h1>
//   <div>
//     <p>
//     Esse projeto foi feito com objetivo de aprimorar os conhecimentos técnicos
//     no framework LARAVEL. primeira vez Criando uma API com laravel                
//      </p>
//     <a
//     href="https://github.com/robertferrei/API-DE-LIVROS-LARAVEL"
//     target="_blank"
//     rel="noreferrer"
//     >
//       <Repository></Repository>
//     </a>
//   </div>
// </Descrition>
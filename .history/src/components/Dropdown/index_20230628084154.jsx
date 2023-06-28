import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";

function Dropdown() {
  const { pathname } = useLocation();
  return (
    <>
      <Container>
        <div>
          <li isActive={pathname.includes("Habilidade")}>
            <Link to="Habilidade">Habilidade</Link>
          </li>
          <a href="https://drive.google.com/file/d/1OELnyvgXv7kQ1wpNvrMJQ-dET6E1Pv1k/view?usp=sharing"target="_blank" rel="noreferrer"> <li>Curriculo</li></a>
          <li isActive={pathname.includes("Sobre")}>
            <Link to="Sobre">Sobre-mim</Link>
          </li>
        </div>
      </Container>
    </>
  );
}

export default Dropdown;

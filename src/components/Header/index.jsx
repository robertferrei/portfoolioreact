import { CaixaLinks, Container, Li, Menu } from "./styles";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <Container>
        <CaixaLinks>
          <Menu>
            <Li isActive={pathname === "/"}>
              <Link to="/"> #home</Link>
            </Li>
            <Li isActive={pathname.includes("Projetos")}>
              <Link to="Projetos">#Projetos</Link>
            </Li>
            <Li> #Contatos</Li>
          </Menu>
        </CaixaLinks>
      </Container>
    </>
  );
}

export default Header;

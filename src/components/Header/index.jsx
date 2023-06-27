import { CaixaLinks, Container, Li, Menu } from "./styles";
import { Link, useLocation } from "react-router-dom";
 
 
 

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <Container>
      <h3>
        Robert ferreira</h3>
        <CaixaLinks>
           
          <Menu>
            <Li isActive={pathname === "/"}>
              <Link to="/"> #home</Link>
            </Li>
            
            <Li isActive={pathname.includes("Projetos")}>
              <Link to="Projetos">#Projetos</Link>
            </Li>
            <Li isActive={pathname.includes("Contatos")}>  
            <Link to="Contatos">#Contato</Link>
            </Li>
            
          </Menu>
          
        </CaixaLinks>
      
      </Container>
     
    </>
  );
}

export default Header;

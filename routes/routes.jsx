import { Route, Routes } from "react-router-dom";

import Home from "../src/container/Home";
import Projetos from "../src/container/Home/Projetos";
import Contatos from "../src/container/Home/Contatos"
import Habilidade from "../src/container/Home/Habilidade";
import DefaultLayout from "../src/layout/DefaultLayout";
import Sobre from "../src/container/Home/Sobre"

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Projetos" element={<Projetos />} />
        <Route path="Contatos" element={<Contatos />} />
        <Route path="Habilidade" element={<Habilidade />} />
        <Route path="Sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default Router;

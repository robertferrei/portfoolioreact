import { Route, Routes } from "react-router-dom";

import Home from "../src/container/Home";
import Projetos from "../src/container/Home/Projetos";
import DefaultLayout from "../src/layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Projetos" element={<Projetos />} />
      </Route>
    </Routes>
  );
}

export default Router;

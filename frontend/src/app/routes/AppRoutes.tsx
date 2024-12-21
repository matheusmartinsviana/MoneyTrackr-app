import React, { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Body } from "../shared/components/Body";
import Finances from "../pages/Finances";
const Home = lazy(() => import("../pages/Home")); //lazy permite carregar componentes sob demanda

// Simulando um atraso na importação do componente para forçar o loading
// const Home = lazy(
//   () =>
//     new Promise(
//       (resolve) =>
//         setTimeout(() => resolve(import("../pages/home/Home.tsx")), 2000)
//     )
// );

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="/financias" element={<Finances />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
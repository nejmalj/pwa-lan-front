import "./index.scss";

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Register from "./pages/register/Register.tsx";
import Layout from "./components/layout/Layout";
import "./index.scss";
import Result from "./pages/result/Result.tsx";
import TournamentPage from "./pages/tournament/Tournement.tsx";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    )
  },
  {
    path: "/tournoi",
    element: (
      <Layout>
        <TournamentPage />
      </Layout>
    )
  },
  {
    path: "/resultats",
    element: (
      <Layout>
        <Result />
      </Layout>
    )
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

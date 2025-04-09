import "./index.scss";
import ConfirmRegister from "./pages/confirm-register/ConfirmRegister.tsx";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Register from "./pages/register/Register.tsx";
import Result from "./pages/result/Result.tsx";
import TournamentPage from "./pages/tournament/Tournament.tsx";
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
    path: "/tournament",
    element: (
      <Layout>
        <TournamentPage />
      </Layout>
    )
  },
  {
    path: "/results",
    element: (
      <Layout>
        <Result />
      </Layout>
    )
  },
  {
    path: "/confirm-register",
    element: (
      <Layout>
        <ConfirmRegister />
      </Layout>
    )
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

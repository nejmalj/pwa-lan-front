import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register.tsx";
import Layout from "./components/layout/Layout";
import "./index.scss";

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
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

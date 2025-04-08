import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import Register from './pages/register/Register.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

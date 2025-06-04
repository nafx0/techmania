import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Orders from "./Components/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home/Home";
import Login from "./routes/Auth/Auth-pages/Login";
import CreateAccount from "./routes/Auth/Auth-pages/CreateAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Create-account",
    element: <CreateAccount />,
  },
]);
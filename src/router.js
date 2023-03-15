import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);
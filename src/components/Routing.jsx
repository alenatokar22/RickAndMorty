import { createBrowserRouter } from "react-router-dom";
// import { Layout } from "./Layout";
import App from "../App";
import { ErrorPage } from "./ErrorPage";
import { Personage } from "./Personage";
import { getCharacter } from "./Fetch";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <App />,
        index: true,
      },
      {
        path: "/character/:characterId",
        element: <Personage />,
        loader: getCharacter,
      },
    ],
  },
]);

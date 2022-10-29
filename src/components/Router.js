import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./Detail";
import Home from "./Home";
import NewsSource from "./NewsSource";
import Favourites from "./Favourites";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/favourites", element: <Favourites /> },
        { path: "/details:id", element: <Detail /> },
        { path: "/details:id/source", element: <NewsSource /> },
      ],
    }
  ]);
  return element;
}
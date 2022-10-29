import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Detail from "./Detail";
import Home from "./Home";

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
        { path: "/details:id", element: <Detail /> },
      ],
    }
  ]);
  return element;
}
import Detail from "./components/Detail";
import Home from "./components/Home";

const routes = [
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/detail",
        element: <Detail />,
    }
]

export default routes;
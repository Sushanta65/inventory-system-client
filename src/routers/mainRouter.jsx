import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Page404 from "../pages/Page404/Page404";

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '*',
        element: <Page404 />
    }
])

export default mainRouter;
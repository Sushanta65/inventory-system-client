import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Page404 from "../pages/Page404/Page404";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
            
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
    
])

export default mainRouter;
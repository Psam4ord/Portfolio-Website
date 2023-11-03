import { createBrowserRouter } from "react-router-dom";

import AboutPage from "../pages/aboutPage";
import Homepage from "../pages/homePage";
import Contact from "../pages/contactPage";
import ServicePage from "../pages/servicePage";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },

    {
        path: "/about",
        element: <AboutPage />,
    },

    {
        path: "/service",
        element: <ServicePage/>,
    },
    
    {
        path: "/contact",
        element: <Contact />,
    },

]);
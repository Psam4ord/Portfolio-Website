import { createBrowserRouter } from "react-router-dom";

import AboutPage from "../pages/aboutPage";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <p>Welcome Home</p>,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    // {
    //     path: "/auth",
    //     children: [
    //         {
    //             path: "login",
    //             element: <Login />,
    //             // loader: teamLoader,
    //         },
    //         {
    //             path: "sign-up",
    //             element: <SignUp />,
    //             // loader: teamLoader,
    //         },
    //     ],
    // }
]);
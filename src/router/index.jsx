import React from 'react';
import { Navigate } from 'react-router-dom';
const Home = React.lazy(() => import('@/pages/Home'));
const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    },

    {
        path: '/home',

        element: <Home />,
    },
];
export default routes;

// import React from "react";

// import { RouteObject } from "react-router-dom";

// const Home = React.lazy(

// () => import("@/pages/home/index")

// );

// const Explore = React.lazy(

// () => import("@/pages/explore/index")

// );

// const Register = React.lazy(

// () => import("@/pages/register/index")

// );

// export const APP_ROUTES:RouteObject_[]=[

// {

// path: "/",

// element: <Home/>,

// },

// {

// path: "/home",

// element: <Home/>,

// },

// {

// path: "/register",

// element: <Register/>,

// },

// {

// path: "/explore",

// element: <Explore/>,

// }

// ]

// export type RouteObject_ = RouteObject & {

// isPageFullWidth?: boolean;

// label?: string;

// path: string;

// isAuthPage?: boolean;

// hasFooter?: boolean;

// };

import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../_pages/HomePage")),
    Page404 = lazy(() => import("../_pages/Page404"));

export enum RouteNames {
    HOME = "/",
    PROJECTS = "/projects",
}

export const routesConfig: RouteObject[] = [
    {
        path: RouteNames.HOME,
        element: <HomePage />,
    },
    {
        path: RouteNames.PROJECTS,
        element: <Page404 />,
    },
];

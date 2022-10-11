import { useEffect, FC } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import dynamicAdaptive from "../helpers/dynamic_adapt";
import { spollers, _closeAllSpollers } from "../helpers/functions";
import { useEffectOnce } from "../hooks";
import { routesConfig } from "../routes";
import useMenu from "../store/slices/menu/useMenu";

const PageChange: FC = () => {
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        dynamicAdaptive();
        spollers();
        window.scrollTo(0, 0);
        onCloseMenu();
        _closeAllSpollers();

        // * If needed specific pages class
        // const wrapper = document.querySelector(".wrapper");
        // if (wrapper && pathname === "/") {
        //     wrapper?.classList.add("home-wrapper");
        // } else if (wrapper && pathname !== "/" && wrapper?.classList.contains("home-wrapper")) {
        //     wrapper?.classList.remove("home-wrapper");
        // }
    }, [pathname]);

    return null;
};

const AppRouter: FC = () => {
    const routes = useRoutes(routesConfig);

    useEffectOnce(() => {
        const onPageLoad = () => {
            document.documentElement.classList.add("_loaded");
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    });

    return (
        <>
            <PageChange />
            {routes}
        </>
    );
};

export default AppRouter;

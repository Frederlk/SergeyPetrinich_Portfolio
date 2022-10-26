import { FC, useEffect } from "react";

import { useEffectOnce, useEventListener } from "./hooks";
import { About, Archive, Footer, Fullscreen, Header, Recent, Skills } from "./_containers";
import { spollers } from "./helpers/functions";
import dynamicAdaptive from "./helpers/dynamic_adapt";

const App: FC = () => {
    useEffect(() => {
        dynamicAdaptive();
        spollers();
        window.scrollTo(0, 0);
    }, []);

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
            <Header />
            <main className="page">
                <Fullscreen />
                <About />
                <Skills />
                <Recent />
                <Archive />
            </main>
            <Footer />
        </>
    );
};

export default App;

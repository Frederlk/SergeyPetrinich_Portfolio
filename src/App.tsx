import { FC, Suspense, useEffect } from "react";

import { Spinner } from "./_components";
import { useActions, useEffectOnce, useEventListener } from "./hooks";
import { Footer, Header } from "./_containers";
import HomePage from "./_pages/HomePage";
import { spollers } from "./helpers/functions";
import dynamicAdaptive from "./helpers/dynamic_adapt";

const App: FC = () => {
    useEventListener("scroll", function () {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        if (scrollTop >= 1) {
            !doc.classList.contains("_scroll") ? doc.classList.add("_scroll") : null;
        } else {
            doc.classList.contains("_scroll") ? doc.classList.remove("_scroll") : null;
        }
    });

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
        <Suspense fallback={<Spinner />}>
            <Header />
            <main className="page">
                <HomePage />
            </main>
            <Footer />
        </Suspense>
    );
};

export default App;

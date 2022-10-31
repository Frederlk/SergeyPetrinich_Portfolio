import { FC, useRef, useState } from "react";

import { useEffectOnce } from "./hooks";
import { About, Archive, Footer, Fullscreen, Header, Recent, Skills } from "./_containers";
import dynamicAdaptive from "./helpers/dynamic_adapt";
import { CSSTransition } from "react-transition-group";
import { Spinner } from "./_components";
import useFullFix from "./hooks/useFullFix";

const App: FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffectOnce(() => {
        dynamicAdaptive();

        const onPageLoad = () => {
            document.documentElement.classList.add("_loaded");
            setMounted(true);
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

    useFullFix();

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    return (
        <CSSTransition
            nodeRef={wrapperRef}
            mountOnEnter
            unmountOnExit
            timeout={1000}
            classNames={"wrapper"}
            in={mounted}
        >
            <div ref={wrapperRef} className="wrapper">
                <Header />
                <main className="page">
                    <Fullscreen />
                    <About />
                    <Skills />
                    <Recent />
                    <Archive />
                </main>
                <Footer />
                <Spinner />
            </div>
        </CSSTransition>
    );
};

export default App;

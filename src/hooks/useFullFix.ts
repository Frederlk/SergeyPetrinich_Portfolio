import { isMobile } from "../helpers/functions";
import useEventListener from "./useEventListener";

const useFullFix = () => {
    const fixHeight = () => {
        if (isMobile.any()) {
            const vh = window.innerHeight * 0.01;
            document.documentElement.classList.add("touch");
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
    };

    useEventListener("resize", fixHeight);

    fixHeight();
};

export default useFullFix;

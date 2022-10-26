import { useState } from "react";
import useEventListener from "./useEventListener";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
    const [scroll, setScroll] = useState(false);

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
            if (document.documentElement.classList.contains("_lock") && direction === "down") {
                setTimeout(() => {
                    setScrollDirection(direction);
                }, 500);
            } else {
                setScrollDirection(direction);
            }
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;

        const scrollTop = window.scrollY;
        scrollTop >= 1 ? setScroll(true) : setScroll(false);
    };

    useEventListener("scroll", updateScrollDirection);

    return [scroll, scrollDirection];
};

export default useScrollDirection;

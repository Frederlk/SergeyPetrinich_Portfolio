import useEventListener from "./useEventListener";

const usePageScroll = () => {
    const isSticky = () => {
        const wrapper = document.querySelector(".wrapper") as HTMLElement;
        const scrollTop = window.scrollY;
        if (scrollTop >= 1) {
            !wrapper.classList.contains("_scroll") ? wrapper.classList.add("_scroll") : null;
        } else {
            wrapper.classList.contains("_scroll") ? wrapper.classList.remove("_scroll") : null;
        }
        // scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
    };

    useEventListener("scroll", isSticky);
};

export default usePageScroll;

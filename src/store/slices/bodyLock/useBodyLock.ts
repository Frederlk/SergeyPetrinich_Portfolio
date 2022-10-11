import useActions from "../../../hooks/useActions";

type ReturnType = {
    bodyLock: (e?: any) => void;
    bodyUnlock: (e?: any) => void;
    bodyLockToggle: (e?: any) => void;
};

const useBodyLock = (lockStatus: boolean): ReturnType => {
    const { setBodyLock } = useActions();

    const bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("_lock")) {
            bodyUnlock(delay);
        } else {
            bodyLock(delay);
        }
    };

    const bodyUnlock = (delay = 500) => {
        const body = document.querySelector("body") as HTMLElement;
        if (lockStatus) {
            const lock_padding = document.querySelectorAll<HTMLElement>("[data-lp]");
            setTimeout(() => {
                Array.from(lock_padding).map((el) => {
                    el.style.paddingRight = "0px";
                });
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("_lock");
            }, delay);

            setTimeout(() => {
                setBodyLock(false);
            }, delay);
        }
    };

    const bodyLock = (delay = 500) => {
        const body = document.querySelector("body") as HTMLElement;
        const wrapper = document?.querySelector(".wrapper") as HTMLElement;
        const padding = window.innerWidth - wrapper.offsetWidth + "px";
        if (!lockStatus) {
            const lock_padding = document.querySelectorAll<HTMLElement>("[data-lp]");
            Array.from(lock_padding).map((el) => {
                el.style.paddingRight = padding;
            });
            body.style.paddingRight = padding;
            document.documentElement.classList.add("_lock");

            setTimeout(() => {
                setBodyLock(true);
            }, delay);
        }
    };

    return { bodyLock, bodyUnlock, bodyLockToggle };
};

export default useBodyLock;

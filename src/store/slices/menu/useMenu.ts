import { useActions, useClickOutside, useEventListener } from "../../../hooks";
import useBodyLock from "../bodyLock/useBodyLock";
import { useAppSelector } from "../../../hooks/useRedux";

type ReturnType = {
    onOpenMenu: (e?: any) => void;
    onCloseMenu: (e?: any) => void;
    onToggleMenu: (e?: any) => void;
};

const useMenu = (ref?: any): ReturnType => {
    const { menuOpened, menuClosed } = useActions();

    const { menuStatus } = useAppSelector((state) => state.menu);
    const { lockStatus } = useAppSelector((state) => state.bodyLock);
    const { bodyLock, bodyUnlock } = useBodyLock(lockStatus);

    const onOpenMenu = () => {
        if (!lockStatus && !menuStatus) {
            bodyLock();
            document.documentElement.classList.add("menu-open");
            menuOpened();
        }
    };

    const onCloseMenu = () => {
        if (lockStatus && menuStatus) {
            menuClosed();
            document.documentElement.classList.remove("menu-open");
            bodyUnlock();
        }
    };

    const onToggleMenu = () => {
        lockStatus && menuStatus ? onCloseMenu() : onOpenMenu();
    };

    useEventListener("keydown", function (e) {
        if (e.which == 27 && e.code === "Escape") {
            onCloseMenu();
        }
    });

    ref ? useClickOutside(ref, onCloseMenu) : null;

    return { onOpenMenu, onCloseMenu, onToggleMenu };
};

export default useMenu;

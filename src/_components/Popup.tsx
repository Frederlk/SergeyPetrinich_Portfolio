import { FC, ReactNode, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "../hooks/useRedux";
import useBodyLock from "../store/slices/bodyLock/useBodyLock";
import { useEventListener } from "../hooks";

const Popup: FC<{ className?: string; opened: boolean; onClose: (e?: any) => void; children: ReactNode }> = ({
    className,
    opened,
    onClose,
    children,
}) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const { lockStatus } = useAppSelector((state) => state.bodyLock);
    const { bodyLock, bodyUnlock } = useBodyLock(lockStatus);

    useEffect(() => {
        opened ? bodyLock() : bodyUnlock();
        opened
            ? document.documentElement.classList.add("popup-open")
            : document.documentElement.classList.remove("popup-open");
    }, [opened]);

    useEventListener("keydown", function (e) {
        if (e.which == 27 && e.code === "Escape") {
            onClose();
        }
    });

    return (
        <CSSTransition
            nodeRef={wrapperRef}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={"popup"}
            in={opened}
        >
            <div ref={wrapperRef} className={`${className || ""} popup`}>
                <div className="popup__wrapper" onClick={onClose}></div>
                <div className="popup__content">
                    <button type="button" onClick={onClose} className="popup__close">
                        ✖
                    </button>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Popup;

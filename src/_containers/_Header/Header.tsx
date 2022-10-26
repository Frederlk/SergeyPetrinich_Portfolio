import { FC, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import useMenu from "../../store/slices/menu/useMenu";
import { Logo } from "../../_components";
import HeaderLink from "./HeaderLink";

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu, onCloseMenu } = useMenu(ref);

    const handlers = useSwipeable({
        onSwipedRight: onCloseMenu,
    });

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container">
                <Logo className="header__logo" />
                <div className="header__menu menu">
                    <span className="menu__background"></span>
                    <nav {...handlers} className="menu__body">
                        <ul className="menu__list">
                            <HeaderLink goto="about" onCloseMenu={onCloseMenu} title="About" />
                            <HeaderLink goto="recent" onCloseMenu={onCloseMenu} title="Projects" />
                            <HeaderLink goto="footer" onCloseMenu={onCloseMenu} title="Contact" />
                        </ul>
                        <a
                            href="/public/s.pdf"
                            className="header__btn"
                            download="Sergey Petrinich CV.pdf"
                            target="_blank"
                        >
                            <span>Resume</span>
                        </a>
                    </nav>
                </div>

                <button type="button" onClick={onToggleMenu} className="header__icon icon-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

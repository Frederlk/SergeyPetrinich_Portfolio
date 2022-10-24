import { FC, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Link as GoTo } from "react-scroll";

import useMenu from "../../store/slices/menu/useMenu";
import Logo from "../../_components/Logo";

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
                            <li className="menu__item">
                                <GoTo
                                    to="about"
                                    smooth={true}
                                    offset={-70}
                                    onSetActive={onCloseMenu}
                                    duration={500}
                                    className="menu__link"
                                >
                                    About
                                </GoTo>
                            </li>
                            <li className="menu__item">
                                <GoTo
                                    to="recent"
                                    smooth={true}
                                    offset={-70}
                                    onSetActive={onCloseMenu}
                                    duration={500}
                                    className="menu__link"
                                >
                                    Projects
                                </GoTo>
                            </li>
                            <li className="menu__item">
                                <GoTo
                                    to="footer"
                                    smooth={true}
                                    offset={-70}
                                    onSetActive={onCloseMenu}
                                    duration={500}
                                    className="menu__link"
                                >
                                    Contact
                                </GoTo>
                            </li>
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

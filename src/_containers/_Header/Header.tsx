import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import useMenu from "../../store/slices/menu/useMenu";
import Logo from "../../_components/Logo";

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

    const handlers = useSwipeable({
        onSwipedRight: onToggleMenu,
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
                                <a href="" className="menu__link">
                                    About
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    Projects
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <Link
                            to="/public/s.pdf"
                            className="header__btn btn"
                            download="Sergey Petrinich CV.pdf"
                            target="_blank"
                        >
                            Resume
                        </Link>
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

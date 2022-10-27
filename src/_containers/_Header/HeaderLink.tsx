import { FC } from "react";
import { Link as GoTo } from "react-scroll";

const HeaderLink: FC<{ title: string; goto: string; onCloseMenu: () => void }> = ({
    title,
    goto,
    onCloseMenu,
}) => {
    return (
        <li className="menu__item">
            <GoTo
                to={goto}
                tabIndex={0}
                smooth={true}
                onClick={onCloseMenu}
                duration={500}
                className="menu__link"
            >
                {title}
            </GoTo>
        </li>
    );
};

export default HeaderLink;

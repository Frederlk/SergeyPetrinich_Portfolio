import { FC } from "react";
import { Link as GoTo } from "react-scroll";
import useMenu from "../store/slices/menu/useMenu";

const Logo: FC<{ className?: string }> = ({ className }) => {
    const { onCloseMenu } = useMenu();

    return (
        <GoTo
            to="wrapper"
            smooth={true}
            offset={-70}
            onSetActive={onCloseMenu}
            duration={500}
            className={`${className || ""} logo _icon-logo`}
        >
            <div className="logo__text">
                <span className="logo__top">Sergey Petrinich</span>
                <span className="logo__bottom">Frontend Developer</span>
            </div>
        </GoTo>
    );
};

export default Logo;

import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../routes";

const Logo: FC<{ className?: string }> = ({ className }) => {
    return (
        <Link to={RouteNames.HOME} className={`${className || ""} logo _icon-logo`}>
            <div className="logo__text">
                <span className="logo__top">Sergey Petrinich</span>
                <span className="logo__bottom">Frontend Developer</span>
            </div>
        </Link>
    );
};

export default Logo;

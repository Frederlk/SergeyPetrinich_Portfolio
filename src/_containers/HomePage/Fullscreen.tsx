import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

const Fullscreen: FC = () => {
    return (
        <div className="fullscreen">
            <div className="fullscreen__container">
                <div className="fullscreen__inner">
                    <div className="fullscreen__label">Hello there, my name is</div>
                    <h1 className="fullscreen__title">
                        Sergey Petrinich. <br /> <span>I’m a Front-End Developer.</span>
                    </h1>
                    <p className="fullscreen__text">
                        I’m a software engineer specializing in building (and occasionally designing)
                        exceptional digital experiences. Currently, I’m focused on building accessible,
                        human-centered products at Upstatement.
                    </p>
                    <Link to={RouteNames.PROJECTS} className="fullscreen__btn btn">
                        See My Projects
                    </Link>
                </div>
                <div className="fullscreen__scroll"></div>
            </div>
        </div>
    );
};

export default Fullscreen;

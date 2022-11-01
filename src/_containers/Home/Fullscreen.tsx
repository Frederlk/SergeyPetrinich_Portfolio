import { FC } from "react";
import { Link as GoTo } from "react-scroll";

const Fullscreen: FC = () => {
    return (
        <section className="fullscreen">
            <div data-fullscreen="" className="fullscreen__container">
                <div className="fullscreen__inner">
                    <div className="fullscreen__label">Hello there, my name is</div>
                    <h1 className="fullscreen__title">
                        Sergey Petrinich. <br /> <span>I’m a Front-end Developer</span>
                    </h1>
                    <p className="fullscreen__text">
                        with 2 years of experience. I believe that my technical skills and knowledge will make
                        me a valuable addition to your web development team.
                    </p>

                    <GoTo
                        tabIndex={0}
                        to="recent"
                        smooth={true}
                        duration={500}
                        className="fullscreen__btn btn"
                    >
                        See My Projects
                    </GoTo>
                </div>
                <GoTo
                    tabIndex={0}
                    to="about"
                    smooth={true}
                    duration={500}
                    className="fullscreen__scroll"
                ></GoTo>
            </div>
        </section>
    );
};

export default Fullscreen;

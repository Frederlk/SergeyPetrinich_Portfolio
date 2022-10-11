import { FC } from "react";
import { Helmet } from "react-helmet";
import About from "../_containers/HomePage/About";
import Fullscreen from "../_containers/HomePage/Fullscreen";
import Recent from "../_containers/HomePage/Recent";
import Skills from "../_containers/HomePage/Skills";

const HomePage: FC = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="Home"
                    content="This is portfolio website of Frontend Developer - Sergey Petrinich"
                />
                <title>Sergey Petrinich</title>
            </Helmet>
            <div className="homepage">
                <Fullscreen />
                <About />
                <Skills />
                <Recent />
            </div>
        </>
    );
};

export default HomePage;

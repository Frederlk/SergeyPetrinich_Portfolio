import { FC } from "react";
import { Picture } from "../../_components";
import Top from "../../_components/Top";
import { useInView } from "react-intersection-observer";

const About: FC = () => {
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, delay: 500 });

    return (
        <section className={`about ${inView ? "_inView" : ""}`}>
            <div ref={ref} className="about__container">
                <Top className="about__top" title="About me" />
                <div className="about__body">
                    <div className="about__content">
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2012 when I decided to try editing
                            custom Tumblr themes — turns out hacking together a custom reblog button taught me
                            a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising
                            agency, a start-up, a huge corporation, and a student-led design studio. My main
                            focus these days is building accessible, inclusive products and digital
                            experiences at Upstatement for a variety of clients.
                        </p>
                        <p>
                            I also recently launched a course that covers everything you need to build a web
                            app with the Spotify API using Node & React.
                        </p>
                    </div>
                    <div className="about__image-ibg">
                        <Picture
                            srcWebp={
                                "https://sun9-85.userapi.com/impg/cJlKQVb2k0KgjOYWVXr9CEsnEo3kGCUNh8ARhw/gFwTYG-wxSw.jpg?size=862x1078&quality=96&sign=580c14e6951e16d966a1e4e9aef4ad02&type=album"
                            }
                            fallbackSrc={
                                "https://sun9-85.userapi.com/impg/cJlKQVb2k0KgjOYWVXr9CEsnEo3kGCUNh8ARhw/gFwTYG-wxSw.jpg?size=862x1078&quality=96&sign=580c14e6951e16d966a1e4e9aef4ad02&type=album"
                            }
                            alt={"фото"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

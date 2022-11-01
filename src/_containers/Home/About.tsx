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
                            Hello! My name is Sergey and I enjoy creating things that live on the internet. I
                            try to bring something special to every project, whether it’s a new learned
                            technology or a beautiful animation of elements, which will create a pleasant
                            feeling of “expensiveness” when viewing the site, which also positively affects
                            the attitude of potential customers towards the company.
                        </p>
                        <p>
                            Experience has taught me to take website accessibility, responsiveness and
                            performance seriously, especially on mobile devices.
                        </p>
                        <p>
                            Right now, I’m focused on learning Node.js and Next.js, which I intend to use in
                            my spare time to develop a website for my Dungeons & Dragons campaigns.
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

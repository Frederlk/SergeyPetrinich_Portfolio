import { FC } from "react";
import { Link as GoTo } from "react-scroll";
import Socials from "../../_components/Socials";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__wrap">
                    <div className="footer__info info-footer">
                        <h2 className="info-footer__title">Get in touch</h2>
                        <div className="info-footer__body">
                            <p className="info-footer__text">
                                I’m looking for any new opportunities, my inbox is always open. Whether you
                                have a question or just want to say hi, I’ll try my best to get back to you!
                            </p>
                            <Socials />
                            <div className="info-footer__links">
                                <a
                                    href="mailto:petrinich.sergey@gmail.com"
                                    className="info-footer__link _icon-mail"
                                >
                                    <span>Email: </span>
                                    petrinich.sergey@gmail.com
                                </a>
                                <a href="tel:375256474526" className="info-footer__link _icon-phone">
                                    <span>Phone: </span>
                                    +375 25 647 45 26
                                </a>
                                <a
                                    href="https://www.google.com/maps/place/Minsk/@53.8847608,27.4532868,11z/data=!4m5!3m4!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972?hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="info-footer__link _icon-pin"
                                >
                                    <span>Address: </span>
                                    Minsk, Belarus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copy">
                        <span>© 2022</span> Sergey Petrinich
                    </div>
                    <GoTo to="wrapper" smooth={true} duration={500} className="footer__totop _icon-arrow">
                        <span>To top</span>
                    </GoTo>
                </div>
                <div className="footer__lines">
                    <div className="footer__line"></div>
                    <div className="footer__line"></div>
                    <div className="footer__line"></div>
                    <div className="footer__line"></div>
                    <div className="footer__line"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

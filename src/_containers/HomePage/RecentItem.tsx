import { FC } from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../_components";

const RecentItem: FC = () => {
    return (
        <article className="recent__item item-recent">
            <div className="item-recent__info">
                <div className="item-recent__date">November, 2022</div>
                <h4 className="item-recent__title">
                    <Link to="/">Lorem, ipsum.</Link>
                </h4>
                <p className="item-recent__description">
                    All elements of the user interaction with the site are animated and create a pleasant
                    feeling of “high cost” when viewing the site, which also positively affects the attitude
                    of potential customers to the company.
                </p>
                <ul className="item-recent__stack">
                    <li className="item-recent__stack-item">React</li>
                    <li className="item-recent__stack-item">Redux</li>
                    <li className="item-recent__stack-item">TypeScript</li>
                    <li className="item-recent__stack-item">Firebase</li>
                    <li className="item-recent__stack-item">Formik</li>
                </ul>
                <div className="item-recent__links">
                    <a href="#" className="item-recent__link _icon-github"></a>
                    <a href="#" className="item-recent__link _icon-link"></a>
                </div>
            </div>
            <Link to="/" className="item-recent__img-ibg">
                <Picture
                    srcWebp={"https://i.pinimg.com/564x/59/31/e8/5931e850a888e93c741250fad39c71ea.jpg"}
                    fallbackSrc={"https://i.pinimg.com/564x/59/31/e8/5931e850a888e93c741250fad39c71ea.jpg"}
                    alt={"imte1"}
                />
            </Link>
        </article>
    );
};

export default RecentItem;
import { FC } from "react";
import Top from "../../_components/Top";

const Recent: FC = () => {
    return (
        <section className="recent">
            <div className="recent__container">
                <Top className="recent__top" title="Recent Projects" />
                <div className="recent__body">
                    <div className="recent__item item-recent">
                        <div className="item-recent__info">
                            <div className="item-recent__title"></div>
                            <div className="item-recent__description"></div>
                            <div className="item-recent__stack"></div>
                            <div className="item-recent__links">
                                <div className="item-recent__link"></div>
                                <div className="item-recent__link"></div>
                            </div>
                        </div>
                        <div className="item-recent__img-ibg"></div>
                    </div>
                </div>
                <div className="recent__btn"></div>
            </div>
        </section>
    );
};

export default Recent;

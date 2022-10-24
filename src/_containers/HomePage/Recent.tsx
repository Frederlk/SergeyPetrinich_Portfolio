import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import { Picture } from "../../_components";
import Top from "../../_components/Top";
import RecentItem from "./RecentItem";

const Recent: FC = () => {
    return (
        <section className="recent">
            <div className="recent__container">
                <Top className="recent__top" title="Recent Projects" />
                <div className="recent__body">
                    <RecentItem />
                    <RecentItem />
                    <RecentItem />
                </div>
                <div className="recent__btn-wrap">
                    <Link to={RouteNames.PROJECTS} className="recent__btn btn">
                        More Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Recent;

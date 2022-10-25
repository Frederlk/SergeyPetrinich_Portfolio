import { FC, useMemo } from "react";
import parse from "html-react-parser";
import { format } from "date-fns";

import { IPet } from "../../models/models";
import ArchiveSlider from "./ArchiveSlider";
import { Links } from "../../constants/links";

const ArhivePopup: FC<{ pet: IPet }> = ({ pet }) => {
    const { description, externalLinks, id, releaseDate, stack, title } = pet;

    const links = useMemo(
        () =>
            externalLinks.map(({ link, title }) => (
                <li key={link} className="archive-popup__link">
                    <a href={link} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </li>
            )),
        [externalLinks]
    );

    const stackItems = useMemo(
        () =>
            stack.map((item, i) => (
                <li key={item + i} className="archive-popup__stack-item">
                    {item}
                </li>
            )),
        [stack]
    );

    return (
        <div className="archive-popup">
            <ArchiveSlider id={id} title={title} />
            <div className="archive-popup__body">
                <h2 className="archive-popup__title">
                    <a target="_blank" rel="noreferrer" href={externalLinks[0].link}>
                        {title}
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={Links.GH + "/" + id}
                        className="_icon-github"
                    ></a>
                </h2>
                <div className="archive-popup__description">{parse(description)}</div>
                <h3 className="archive-popup__subtitle">Stack</h3>
                <ul className="archive-popup__stack">{stackItems}</ul>
                <h3 className="archive-popup__subtitle">External Links</h3>
                <ul className="archive-popup__links">{links}</ul>
                <h3 className="archive-popup__subtitle">Built Date</h3>
                <div className="archive-popup__date">
                    {format(new Date(releaseDate * 1000), "MMMM, yyyy")}
                </div>
            </div>
        </div>
    );
};

export default ArhivePopup;

import { FC, memo } from "react";
import { Links } from "../constants/links";

const ExternalLinks: FC<{ className: string; link: string; id: string }> = ({ className, id, link }) => {
    return (
        <div className={`${className || ""} links`}>
            <a target="_blank" rel="noreferrer" href={link} className="links__item _icon-link"></a>
            <a
                target="_blank"
                rel="noreferrer"
                href={Links.GH + "/" + id}
                className="links__item _icon-github"
            ></a>
        </div>
    );
};

export default memo(ExternalLinks);

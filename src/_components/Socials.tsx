import { FC } from "react";
import { Links } from "../constants/links";

const Socials: FC = () => {
    return (
        <>
            <div className="socials">
                <a
                    href={Links.GH}
                    target="_blank"
                    rel="noreferrer"
                    className="socials__item _icon-github"
                ></a>
                <a href={Links.FB} target="_blank" rel="noreferrer" className="socials__item _icon-fb"></a>
                <a
                    href={Links.INST}
                    target="_blank"
                    rel="noreferrer"
                    className="socials__item _icon-inst"
                ></a>
                <a href={Links.VK} target="_blank" rel="noreferrer" className="socials__item _icon-vk"></a>
                <a href={Links.TG} target="_blank" rel="noreferrer" className="socials__item _icon-tg"></a>
                <a href={Links.IN} target="_blank" rel="noreferrer" className="socials__item _icon-in"></a>
            </div>
            <div className="email">
                <a href="mailto:petrinich.sergey@gmail.com" className="email__item">
                    petrinich.sergey@gmail.com
                </a>
            </div>
        </>
    );
};

export default Socials;

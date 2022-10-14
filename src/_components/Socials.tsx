import { FC } from "react";
import { Links } from "../constants/links";

const Socials: FC = () => {
    return (
        <>
            <div className="socials">
                <a href={Links.FB} className="socials__item _icon-fb"></a>
                <a href={Links.INST} className="socials__item _icon-inst"></a>
                <a href={Links.VK} className="socials__item _icon-vk"></a>
                <a href={Links.TG} className="socials__item _icon-tg"></a>
                <a href={Links.IN} className="socials__item _icon-in"></a>
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

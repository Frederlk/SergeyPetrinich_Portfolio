import { format } from "date-fns";
import { FC, useState } from "react";
import { IPet } from "../../models/models";
import ExternalLinks from "../../_components/ExternalLinks";
import Popup from "../../_components/Popup";
import ArhivePopup from "../ArchivePopup/ArhivePopup";

const ArchiveItem: FC<{ pet: IPet }> = ({ pet }) => {
    const { id, title, releaseDate, stack, externalLinks } = pet;
    const [opened, setOpened] = useState(false);

    return (
        <>
            <article className="archive__panel archive__panel_item">
                <div onClick={() => setOpened(true)} className="archive__date">
                    {format(new Date(releaseDate * 1000), "MMMM yyyy")}
                </div>
                <h4 onClick={() => setOpened(true)} className="archive__title">
                    {title}
                </h4>
                <ul onClick={() => setOpened(true)} className="archive__stack">
                    {stack.map((item, i) => (
                        <li key={item + i} className="archive__stack-item">
                            {item}
                        </li>
                    ))}
                </ul>
                <ExternalLinks className="archive__links" link={externalLinks[0].link} id={id} />
            </article>
            <Popup onClose={() => setOpened(false)} opened={opened}>
                <ArhivePopup pet={pet} />
            </Popup>
        </>
    );
};

export default ArchiveItem;

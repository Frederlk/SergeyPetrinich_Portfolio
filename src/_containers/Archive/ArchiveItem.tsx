import { format } from "date-fns";
import { FC, useState } from "react";
import { IPet } from "../../models/models";
import { Popup, ExternalLinks, Stack } from "../../_components";
import ArhivePopup from "./ArhivePopup";

const ArchiveItem: FC<{ pet: IPet }> = ({ pet }) => {
    const { id, title, releaseDate, stack, externalLinks } = pet;
    const [opened, setOpened] = useState(false);

    return (
        <>
            <article className="archive__panel archive__panel_item">
                <div onClick={() => setOpened(true)} className="archive__wrap">
                    <div className="archive__date">{format(new Date(releaseDate * 1000), "MMMM yyyy")}</div>
                    <h4 className="archive__title">{title}</h4>
                    <Stack className="archive__stack" stack={stack} />
                </div>
                <ExternalLinks className="archive__links" link={externalLinks[0].link} id={id} />
            </article>
            <Popup onClose={() => setOpened(false)} opened={opened}>
                <ArhivePopup pet={pet} />
            </Popup>
        </>
    );
};

export default ArchiveItem;
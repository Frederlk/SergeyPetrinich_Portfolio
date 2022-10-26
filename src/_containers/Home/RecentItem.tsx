import { format } from "date-fns";
import { FC, memo, useState } from "react";
import { IPet } from "../../models/models";
import { Picture } from "../../_components";
import parse from "html-react-parser";
import ExternalLinks from "../../_components/ExternalLinks";
import useGetImages from "../../hooks/useGetImages";
import Popup from "../../_components/Popup";
import ArhivePopup from "../Archive/ArhivePopup";
import Stack from "../../_components/Stack";

const RecentItem: FC<{ item: IPet }> = ({ item }) => {
    const { description, externalLinks, id, releaseDate, stack, title } = item;
    const images = useGetImages({ id, title, one: true });
    const [opened, setOpened] = useState(false);

    return (
        <article className="recent__item item-recent">
            <div className="item-recent__info">
                <div className="item-recent__date">{format(new Date(releaseDate * 1000), "MMMM, yyyy")}</div>
                <h4 onClick={() => setOpened(true)} className="item-recent__title">
                    <span>{title}</span>
                </h4>
                <p className="item-recent__description">
                    {parse(description?.length > 180 ? description.substring(0, 200) + "..." : description)}
                </p>
                <Stack className="item-recent__stack" stack={stack} />
                <div className="item-recent__links">
                    <ExternalLinks className="item-recent__link" link={externalLinks[0].link} id={id} />
                </div>
            </div>
            <div onClick={() => setOpened(true)} className="item-recent__img-ibg">
                {images[0] && (
                    <Picture srcWebp={images[0].webp} fallbackSrc={images[0].img} alt={images[0].alt} />
                )}
            </div>
            <Popup onClose={() => setOpened(false)} opened={opened}>
                <ArhivePopup pet={item} />
            </Popup>
        </article>
    );
};

export default memo(RecentItem);

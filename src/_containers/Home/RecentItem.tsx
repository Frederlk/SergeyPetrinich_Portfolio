import { format } from "date-fns";
import { FC, memo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IPet } from "../../models/models";
import { ExternalLinks, Picture, Popup, Stack } from "../../_components";
import { useGetImages } from "../../hooks";
import ArhivePopup from "../Archive/ArhivePopup";

const RecentItem: FC<{ item: IPet }> = ({ item }) => {
    const { description, externalLinks, id, releaseDate, stack, title } = item;
    const images = useGetImages({ id, title, one: true });
    const [opened, setOpened] = useState(false);

    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, delay: 500 });

    return (
        <article ref={ref} className={`recent__item item-recent ${inView ? "_inView" : ""}`}>
            <div className="item-recent__info">
                <div className="item-recent__date">{format(new Date(releaseDate * 1000), "MMMM, yyyy")}</div>
                <h4 tabIndex={0} onClick={() => setOpened(true)} className="item-recent__title">
                    <span>{title}</span>
                </h4>
                <div
                    className="item-recent__description"
                    dangerouslySetInnerHTML={{
                        __html:
                            description?.length > 180 ? description.substring(0, 200) + "..." : description,
                    }}
                ></div>
                <Stack className="item-recent__stack" stack={stack} limit={5} />
                <div className="item-recent__links">
                    <ExternalLinks className="item-recent__link" link={externalLinks[0].link} id={id} />
                </div>
            </div>
            <div tabIndex={0} onClick={() => setOpened(true)} className="item-recent__img-ibg">
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

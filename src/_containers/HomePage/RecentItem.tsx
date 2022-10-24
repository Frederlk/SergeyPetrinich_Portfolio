import { format } from "date-fns";
import { FC, useEffect, useMemo, useState, memo } from "react";
import { Links } from "../../constants/links";
import { IImg, IPet } from "../../models/models";
import { Picture } from "../../_components";
import parse from "html-react-parser";
import { storage } from "../../firebaseConfig";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { sortData } from "../../helpers/functions";

const RecentItem: FC<{ item: IPet }> = ({ item }) => {
    const { description, externalLinks, id, releaseDate, stack, title } = item;
    const [images, setImages] = useState<IImg[]>([]);

    const listRef = ref(storage, id);

    useEffect(() => {
        listAll(listRef)
            .then((res) => {
                if (images.length !== res.items.length / 2) {
                    const array: IImg[] = [];
                    for (let i = 1; i <= res.items.length / 2; i++) {
                        const imgRef = ref(storage, `${id}/${title.replace(" ", "_")}_${i}.jpg`);
                        const webpRef = ref(storage, `${id}/${title.replace(" ", "_")}_${i}.webp`);

                        getDownloadURL(imgRef).then(async (img) => {
                            const webp = await getDownloadURL(webpRef);
                            setImages((prev) =>
                                [
                                    ...prev,
                                    {
                                        img,
                                        webp,
                                        alt: `${title}_${i}`,
                                    },
                                ]
                                    .slice()
                                    .sort((a, b) => sortData(b.img, a.img))
                            );
                        });
                    }
                    return array;
                }
            })

            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const items = useMemo(
        () =>
            images &&
            images.map(({ alt, webp, img }, i) => {
                return (
                    <div key={alt + i} className="item-recent__slide-ibg">
                        <Picture srcWebp={webp} fallbackSrc={img} alt={alt} />
                    </div>
                );
            }),
        [images]
    );

    return (
        <article className="recent__item item-recent">
            <div className="item-recent__info">
                <div className="item-recent__date">{format(new Date(releaseDate * 1000), "MMMM, yyyy")}</div>
                <h4 className="item-recent__title">
                    <a href={`#${id}`}>{title}</a>
                </h4>
                <p className="item-recent__description">
                    {parse(description)}
                    {/* {parse(description?.length > 180 ? description.substring(0, 180) + "..." : description)} */}
                </p>
                <ul className="item-recent__stack">
                    {stack.map((item, i) => (
                        <li key={item + i} className="item-recent__stack-item">
                            {item}
                        </li>
                    ))}
                </ul>
                <a href="#" className="item-recent__slider">
                    {items}
                </a>
                <div className="item-recent__links">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={externalLinks[0].link}
                        className="item-recent__link _icon-link"
                    ></a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={Links.GH + "/" + id}
                        className="item-recent__link _icon-github"
                    ></a>
                </div>
            </div>
            <a href="#" className="item-recent__img-ibg">
                {images[0] && (
                    <Picture srcWebp={images[0].webp} fallbackSrc={images[0].img} alt={images[0].alt} />
                )}
            </a>
        </article>
    );
};

export default memo(RecentItem);

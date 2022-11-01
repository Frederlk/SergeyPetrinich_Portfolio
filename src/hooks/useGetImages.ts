import { storage } from "./../firebaseConfig";
import { IImg } from "./../models/models";
import { useEffect, useState } from "react";

import { ref, getDownloadURL, listAll } from "firebase/storage";
import { sortData } from "../helpers/functions";

interface IUseGetImagesProps {
    id: string;
    title: string;
    one?: boolean;
}

const useGetImages = ({ id, title, one }: IUseGetImagesProps) => {
    const [images, setImages] = useState<IImg[]>([]);
    const listRef = ref(storage, id);

    useEffect(() => {
        listAll(listRef)
            .then((res) => {
                if (one) {
                    const imgRef = ref(storage, `${id}/${title.replace(" ", "_")}_1.jpg`);
                    const webpRef = ref(storage, `${id}/${title.replace(" ", "_")}_1.webp`);

                    getDownloadURL(imgRef).then(async (img) => {
                        const webp = await getDownloadURL(webpRef);
                        setImages([
                            {
                                img,
                                webp,
                                alt: `${title}_1`,
                            },
                        ]);
                    });
                } else if (images.length !== res.items.length / 2) {
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
                }
            })

            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return images;
};

export default useGetImages;

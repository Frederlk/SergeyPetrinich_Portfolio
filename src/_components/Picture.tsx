import { FC, memo } from "react";

interface PictureProps {
    srcWebp: string;
    alt: string;
    fallbackSrc: string;
    mediaType?: string;
    noLazy?: boolean;
}

const Picture: FC<PictureProps> = ({
    srcWebp,
    alt,
    fallbackSrc,
    mediaType = "image/webp",
    noLazy,
    ...delegated
}) => {
    return (
        <picture>
            <source srcSet={srcWebp} type={mediaType} />
            <img src={fallbackSrc} alt={alt} {...delegated} loading={noLazy ? "eager" : "lazy"} />
        </picture>
    );
};

export default memo(Picture);

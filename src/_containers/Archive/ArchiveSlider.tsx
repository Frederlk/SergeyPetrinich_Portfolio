import { FC, useMemo } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Keyboard, Navigation, Lazy } from "swiper";
import { Picture } from "../../_components";
import { useGetImages } from "../../hooks";

const swiperProps: SwiperProps = {
    modules: [Keyboard, Navigation, Lazy],
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        prevEl: ".archive-popup__nav ._prev",
        nextEl: ".archive-popup__nav ._next",
    },
    lazy: {
        loadPrevNext: true,
    },
};

const ArchiveSlider: FC<{ id: string; title: string }> = ({ id, title }) => {
    const images = useGetImages({ id, title });

    const slides = useMemo(
        () =>
            images.map(({ alt, img, webp }, i) => (
                <SwiperSlide key={i} className="archive-popup__image-ibg">
                    <Picture srcWebp={webp} fallbackSrc={img} alt={alt} />
                </SwiperSlide>
            )),
        [images]
    );

    return (
        <div className="archive-popup__slider">
            <Swiper
                {...swiperProps}
                className="archive-popup__swiper"
                speed={500}
                observer={true}
                observeParents={true}
            >
                {slides}
            </Swiper>
            <nav className="archive-popup__nav">
                <button type="button" className="archive-popup__nav-item _prev _icon-arrow"></button>
                <button type="button" className="archive-popup__nav-item _next _icon-arrow"></button>
            </nav>
        </div>
    );
};

export default ArchiveSlider;

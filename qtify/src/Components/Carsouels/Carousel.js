import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

const Carousel = ({ data, renderItem, breakpoints }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [data]);

    return (
        <div className={styles.carouselContainer}>
            <div ref={prevRef} className="swiper-button-prev-custom">
                <LeftNavButton />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                loop={false}
                watchSlidesProgress={true}
                observer={true}
                observeParents={true}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                breakpoints={breakpoints || {
                    0: { slidesPerView: 2, slidesPerGroup: 2 },
                    600: { slidesPerView: 3, slidesPerGroup: 3 },
                    960: { slidesPerView: 4, slidesPerGroup: 4 },  // Critical for TC-13
                    1280: { slidesPerView: 4, slidesPerGroup: 4 },
                }}
                className={styles.swiper}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
                ))}
            </Swiper>
            <div ref={nextRef} className="swiper-button-next-custom">
                <RightNavButton />
            </div>
        </div>
    );
};

export default Carousel;

import React from "react";
import "./hallfame.scss";
import HallFameCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function HallFame() {
    return (
        <div className="swiper-hall d-flex align-items-center">
            <p className="swiper-button-next">
                <i className="fa-solid fa-angle-left"></i>
            </p>
            <Swiper
                // breakpoints={}
                style={{ padding: "40px" }}
                autoplay={{
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                slidesPerView={3}
                spaceBetween={70}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                    type: "custom",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard />
                </SwiperSlide>
            </Swiper>
            <p className="swiper-button-prev">
                <i className="fa-solid fa-angle-right"></i>
            </p>
        </div>
    );
}

export default HallFame;

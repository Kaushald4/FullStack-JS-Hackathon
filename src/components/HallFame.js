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
                breakpoints={{
                    1058: { slidesPerView: 3 },
                    690: { slidesPerView: 2 },
                    200: { slidesPerView: 1, parallax: { enabled: true } },
                }}
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
                    <HallFameCard
                        bio={`I have enrolled for your ML course two years back , Python you taught in that course was awesome due to which I have cracked about 5 interview..."
                        `}
                        jobTitle="Cognizant(genc next) ,Coditas , Celebal, Capgemini, Atos"
                        name="Chitra Patgar"
                        profileImage={require("../assets/persons/5.jpeg")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard
                        name={"Sameer Kumar"}
                        bio={`Hello everyone,
                        My name is Sameer Kumar and I am a final year B.Tech student from Symbiosis Institute of Technology, Pune.                                                                                                              
                        I recently got placed at Bajaj Finserv as a Data Scientist
                        `}
                        jobTitle="Bajaj Finserv"
                        profileImage={require("../assets/persons/2jpeg.jpeg")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard
                        name={"Shrivasta G"}
                        bio={`Hello everyone,
                    My name is Sameer Kumar and I am a final year B.Tech student from Symbiosis Institute of Technology, Pune.                                                                                                              
                    I recently got placed at Bajaj Finserv as a Data Scientist
                    `}
                        jobTitle="Bajaj Finserv"
                        profileImage={require("../assets/persons/3.jpeg")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard
                        name={"Jay Prakash Bind"}
                        bio={`Hello everyone,
                    My name is Sameer Kumar and I am a final year B.Tech student from Symbiosis Institute of Technology, Pune.                                                                                                              
                    I recently got placed at Bajaj Finserv as a Data Scientist
                    `}
                        jobTitle="Bajaj Finserv"
                        profileImage={require("../assets/persons/4.jpeg")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HallFameCard
                        name={"Aakash B"}
                        bio={`Hello everyone,
                    My name is Sameer Kumar and I am a final year B.Tech student from Symbiosis Institute of Technology, Pune.                                                                                                              
                    I recently got placed at Bajaj Finserv as a Data Scientist
                    `}
                        jobTitle="Bajaj Finserv"
                        profileImage={require("../assets/persons/62567c723c8eff001aa26bf5.jpeg")}
                    />
                </SwiperSlide>
            </Swiper>
            <p className="swiper-button-prev">
                <i className="fa-solid fa-angle-right"></i>
            </p>
        </div>
    );
}

export default HallFame;

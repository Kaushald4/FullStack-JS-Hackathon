import React from "react";
import "./techAvengers.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function TechAvengers() {
    const avengers = [
        {
            name: "Hitesh Choudhary",
            role: "CTO",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/hitesh-square.png"),
        },
        {
            name: "Souranghsu Pal",
            role: "Mentor",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/Souranghsu-Pal.png"),
        },
        {
            name: "Sunny Bhaveen Chandra",
            role: "Data Scientist",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/sunny-square.png"),
        },
        {
            name: "Krish Naik",
            role: "CIO",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/krish-square.png"),
        },
        {
            name: "Gaurav Sen",
            role: "Senior VP",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/gaurav-sen-square.png"),
        },
        {
            name: "Navin Reddy",
            role: "Senior VP",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/telusko-square.png"),
        },
        {
            name: "Mukesh Otwani",
            role: "VP Automation",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/Mukesh-Otwani-square.png"),
        },
        {
            name: "Saurabh Shukla",
            role: "Senior VP",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/mysirg-square.png"),
        },
        {
            name: "Amresh Bharti",
            role: "VP Marketing",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/amresh-square.png"),
        },
        {
            name: "Kiran Sahu",
            role: "Mentor",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/Kiran-Sahu-square.png"),
        },
        {
            name: "Saksham Choudhary",
            role: "Cyber Security Lead",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/saksham-square.png"),
        },
        {
            name: "Sudhanshu Kumar",
            role: "AI Engineer & CEO",
            socialLink: { linkedin: "", youtube: "" },
            profileImage: require("../assets/sudhanshu-square.png"),
        },
    ];

    return (
        <div>
            <div className="avengers-cards d-flex">
                <p className="swiper-button-next">
                    <i className="fa-solid fa-angle-left"></i>
                </p>

                <Swiper
                    breakpoints={{
                        1058: { slidesPerView: 3 },
                        690: { slidesPerView: 2 },
                        200: {
                            slidesPerView: 1,
                        },
                    }}
                    style={{ padding: "80px 80px" }}
                    autoplay={{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={40}
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
                    {avengers.map((card, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="avenger-card-wrapper">
                                    <div className="avengers-card d-flex flex-column align-items-center text-center">
                                        <div className="avengers-img">
                                            <img
                                                src={card.profileImage}
                                                alt={card.name}
                                            />
                                        </div>
                                        <div className="avenegrs-info">
                                            <h5>{card.name}</h5>
                                            <p>{card.role}</p>
                                            <div className="social-icons d-flex gap-4 mt-4 justify-content-center">
                                                <i class="fa-brands fa-linkedin-in"></i>
                                                <i class="fa-brands fa-youtube"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="avengers-card-shown d-flex flex-column justify-content-start align-items-center text-center">
                                        <div className="avengers-img">
                                            <img
                                                src={card.profileImage}
                                                alt={card.name}
                                            />
                                        </div>
                                        <div className="avenegrs-info">
                                            <h5>{card.name}</h5>
                                            <p>{card.role}</p>
                                            <div className="social-icons d-flex gap-4 mt-4 justify-content-center">
                                                <i class="fa-brands fa-linkedin-in"></i>
                                                <i class="fa-brands fa-youtube"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <p className="swiper-button-prev">
                    <i className="fa-solid fa-angle-right"></i>
                </p>
            </div>
        </div>
    );
}

export default TechAvengers;

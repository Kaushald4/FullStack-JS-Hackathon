import React, { useState } from "react";
import "./learn.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function Learn() {
    const [activeProgram, setActiveProgram] = useState(0);
    const programs = [
        "Live Programes",
        "Affordable Programs",
        "Community Programes",
        "One Neuron",
        "Test Series",
    ];

    const programTagLine = [
        {
            headline: "Live Programs",
            subHeading: `Get your program with live "instructor led" learning.`,
        },
        {
            headline: "Affordable Programs",
            subHeading: `Find your favourite courses in pocket-friendly ways.`,
        },
        {
            headline: "Community Programes",
            subHeading: "Open to all pro-live classes on Youtube for free.",
        },
        {
            headline: "One Neuron",
            subHeading: "New Neurons all day, every day.",
        },
        {
            headline: "Test Series",
            subHeading: "Quiz-based courses to prepare you for interviews.",
        },
    ];

    const programCards = [
        [
            {
                posterImage: require("../assets/live-program-1.jpg"),
                title: "Job Guaranteed Big Data Bootcamp",
                price: "Rs. 3000",
                instructor: "Shashank Mishra",
                type: "Live",
            },
            {
                posterImage: require("../assets/live-program-2jpg.jpg"),
                title: "Youtube Mastery Batch 2 in hindi",
                price: "Rs. 3000",
                instructor: "Amresh Bharti",
                type: "Live",
            },
            {
                posterImage: require("../assets/live-program-5jpg.jpg"),
                title: "DSA for FAANG Preparation with python and javascript",
                price: "Rs. 3000",
                instructor: "Anuragh Tiwari",
                type: "Live",
            },
            {
                posterImage: require("../assets/live-program-4jpg.jpg"),
                title: "Full Stack Web Development using python in hindi",
                price: "Rs. 3000",
                instructor: "Shashank Mishra",
                type: "Live",
            },
            {
                posterImage: require("../assets/live-program-6jpg.jpg"),
                title: "Advanced Facebook Marketing Course in hindi",
                price: "Rs. 3000",
                instructor: "Shashank Mishra",
                type: "Live",
            },
        ],
        [
            {
                posterImage: require("../assets/affordable-2.jpg"),
                title: "Mastering DSA with java",
                price: "Rs. 499",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/affordable-3jpg.jpg"),
                title: "Mastering DSA with c++",
                price: "Rs. 499",
                instructor: "Hitesh Choudhary",
                type: "Recoded",
            },
            {
                posterImage: require("../assets/affordable-4jpg.jpg"),
                title: "Android P with Machine Learning Apps",
                price: "Rs. 499",
                instructor: "Hitesh choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/affordable-5.jpg"),
                title: "Full Stack Djando Developer",
                price: "Rs. 499",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/live-program-6jpg.jpg"),
                title: "Full Stack Django Developer with React",
                price: "Rs. 499",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
        ],
        [
            {
                posterImage: require("../assets/community-2.jpg"),
                title: "Publishing Custom Cocoapads",
                price: "FREE",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/community-4.jpg"),
                title: "ReactJS Crash Course",
                price: "FREE",
                instructor: "Hitesh Choudhary",
                type: "Recoded",
            },
            {
                posterImage: require("../assets/community-3.jpg"),
                title: "Build an Ecommerce with ReactJS",
                price: "FREE",
                instructor: "Hitesh choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/community-5.jpg"),
                title: "Angular Crash Course",
                price: "FREE",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
            {
                posterImage: require("../assets/community-1.jpg"),
                title: "Write Quicker HTML5 & CSS; Productivity Hacks with emment",
                price: "FREE",
                instructor: "Hitesh Choudhary",
                type: "Recorded",
            },
        ],
        [
            {
                posterImage: require("../assets/tech-neuron.jpg"),
                title: "Tech Neuron",
                price: "RS. 25000.00",
                instructor:
                    "200+ courses, 500+ projects, raise your demand option, consistent services from iNeuron, work 1:1 with experts",
                type: "",
            },
            {
                posterImage: require("../assets/kids-neuron.jpg"),
                title: "Kids Neuron",
                price: "RS. 7080.00",
                instructor:
                    "Lifetime access, Raise your demand option, Live Classes for all Tech Courses, Consistent services from iNeuron, One to One...",
                type: "",
            },
        ],
        [
            {
                posterImage: require("../assets/test-3.jpg"),
                title: "HTML CSS Coding Interview Preparation",
                price: "RS. 499",
                instructor: "",
                type: "Test",
            },
            {
                posterImage: require("../assets/test-1.jpg"),
                title: "C++ Coding Interview Preparation",
                price: "RS. 499",
                instructor: "",
                type: "Test",
            },
            {
                posterImage: require("../assets/test-5.jpg"),
                title: "Android Technical Interview Preparation",
                price: "RS. 499",
                instructor: "",
                type: "Test",
            },
            {
                posterImage: require("../assets/test-4.jpg"),
                title: "Java Coding Interview Preparation",
                price: "RS. 499",
                instructor: "",
                type: "Test",
            },
            {
                posterImage: require("../assets/test-6.jpg"),
                title: "C Coding Interview Preparation",
                price: "RS. 499",
                instructor: "",
                type: "Test",
            },
        ],
    ];

    return (
        <>
            <div className="program">
                <div className="program-types">
                    {programs.map((text, i) => {
                        return (
                            <p
                                style={{
                                    display: "inline-block",
                                    backgroundColor:
                                        activeProgram === i
                                            ? "#f59d45"
                                            : "transparent",
                                    cursor: "pointer",
                                    margin: "8px 0",
                                    padding: "8px 10px",
                                    borderRadius: "8px",
                                    boxShadow:
                                        activeProgram === i
                                            ? "0 0 40px 2px rgba(245,157,69, .4)"
                                            : "0 0 0 rgba(0,0,0,0)",
                                    color:
                                        activeProgram === i
                                            ? "#FFFFFF"
                                            : "#000000",
                                }}
                                onClick={() => setActiveProgram(i)}
                                key={i}
                            >
                                {text}
                            </p>
                        );
                    })}
                </div>
                <div className="right text-center ms-auto mt-5 me-auto">
                    <h3>{programTagLine[activeProgram].headline}</h3>
                    <p>{programTagLine[activeProgram].subHeading}</p>

                    <div className="program-cards d-flex">
                        <p className="swiper-button-next">
                            <i className="fa-solid fa-angle-left"></i>
                        </p>
                        {activeProgram === 3 ? (
                            <div className="community-program d-flex gap-5 mt-4">
                                {programCards[3].map((card, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="program-card-wrapper"
                                        >
                                            <div className="program-card">
                                                <div className="program-card-header-image">
                                                    <img
                                                        className="program-overlay-image"
                                                        src={card.posterImage}
                                                        alt="image"
                                                    />
                                                </div>
                                                <p className="program-title">
                                                    {card.title}
                                                </p>
                                                <p className="program-instructor">
                                                    <span className="d-flex align-items-center">
                                                        <i className="fa-solid fa-graduation-cap me-2"></i>
                                                        {card.instructor}
                                                    </span>
                                                </p>
                                                <div className="d-flex justify-content-between mt-4 ps-4 pe-4">
                                                    <p className="program-price">
                                                        {card.price}
                                                    </p>
                                                    <p className="program-type">
                                                        {card.type}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="program-card-shown">
                                                <div className="program-card-header-image">
                                                    <img
                                                        className="program-overlay-image"
                                                        src={card.posterImage}
                                                        alt="image"
                                                    />
                                                </div>
                                                <p className="program-title">
                                                    {card.title}
                                                </p>
                                                <p className="program-instructor">
                                                    <span className="d-flex align-items-center">
                                                        {card.instructor}
                                                    </span>
                                                </p>
                                                <div className="d-flex justify-content-between  ps-4 pe-4">
                                                    <p className="program-price">
                                                        {card.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <Swiper
                                breakpoints={{
                                    690: { slidesPerView: 2 },
                                    200: {
                                        slidesPerView: 1,
                                    },
                                }}
                                style={{ padding: "40px" }}
                                autoplay={{
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={activeProgram === 3 ? false : true}
                                slidesPerView={2}
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
                                {programCards[activeProgram].map((card, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="program-card-wrapper">
                                                <div className="program-card">
                                                    <div className="program-card-header-image">
                                                        <img
                                                            className="program-overlay-image"
                                                            src={
                                                                card.posterImage
                                                            }
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <p className="program-title">
                                                        {card.title}
                                                    </p>
                                                    <p className="program-instructor">
                                                        <span className="d-flex align-items-center">
                                                            {card.instructor}
                                                        </span>
                                                    </p>
                                                    <div className="d-flex justify-content-between mt-4 ps-4 pe-4">
                                                        <p className="program-price">
                                                            {card.price}
                                                        </p>
                                                        <p className="program-type">
                                                            {card.type}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="program-card-shown">
                                                    <div className="program-card-header-image">
                                                        <img
                                                            className="program-overlay-image"
                                                            src={
                                                                card.posterImage
                                                            }
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <p className="program-title">
                                                        {card.title}
                                                    </p>
                                                    <p className="program-instructor">
                                                        <span className="d-flex align-items-center">
                                                            {activeProgram ===
                                                            4 ? (
                                                                <span></span>
                                                            ) : (
                                                                <i className="fa-solid fa-graduation-cap me-2"></i>
                                                            )}
                                                            {card.instructor}
                                                        </span>
                                                    </p>
                                                    <div className="d-flex justify-content-between mt-5 ps-4 pe-4">
                                                        <p className="program-price">
                                                            {card.price}
                                                        </p>
                                                        <p className="program-type">
                                                            {card.type}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                        <p className="swiper-button-prev">
                            <i className="fa-solid fa-angle-right"></i>
                        </p>
                    </div>
                </div>
            </div>
            <p role={"button"} className="text-center">
                View More
            </p>
        </>
    );
}

export default Learn;

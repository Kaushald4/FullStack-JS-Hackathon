import React, { useState } from "react";
import "./hamburger.scss";

function Hamburger() {
    const mainMenu = [
        {
            id: 1,
            title: "Courses",
            mainId: 1,
        },
        {
            id: 2,
            title: "One Neuron",
        },
        {
            id: 3,
            title: "Job Portal",
        },
        {
            id: 4,
            title: "Internship Portal",
        },
        {
            id: 5,
            title: "Become and afflicate",
        },
        {
            id: 6,
            title: "Hall of fame",
        },
        {
            id: 7,
            title: "Blog",
        },
        {
            id: 8,
            title: "Company",
            mainId: 1,
        },
    ];
    const courses = [
        {
            id: 1,
            title: "Data Science",
            mainId: 1,
        },
        {
            id: 2,
            title: "Web Development",
            mainId: 1,
        },
        {
            id: 3,
            title: "Mobile Development",
            mainId: 1,
        },
        {
            id: 4,
            title: "Blockchain",
            mainId: 1,
        },
        {
            id: 4,
            title: "Programming",
            mainId: 1,
        },
        {
            id: 5,
            title: "Cybersecurity",
            mainId: 1,
        },
        {
            id: 6,
            title: "Testing",
            mainId: 1,
        },
        {
            id: 7,
            title: "Devops",
            mainId: 1,
        },
        {
            id: 8,
            title: "Iot",
            mainId: 1,
        },
        {
            id: 9,
            title: "Data Structure",
            mainId: 1,
        },
    ];
    const companies = [
        {
            id: 1,
            title: "About us",
            company: true,
        },
        {
            id: 2,
            title: "Hack-A-Thon",
            company: true,
        },
        {
            id: 3,
            title: "Job guarantee",
            company: true,
        },
        {
            id: 4,
            title: "Privacy Policy",
            company: true,
        },
        {
            id: 5,
            title: "Contact us",
            company: true,
        },
        {
            id: 6,
            title: "Faqs",
            company: true,
        },
        {
            id: 7,
            title: "Job Assistance",
            company: true,
        },
        {
            id: 8,
            title: "Terms & conditions",
            company: true,
        },
    ];

    const [currentMenu, setCurrentMenu] = useState(mainMenu);

    const filterMenu = (m, i) => {
        switch (i) {
            case 0:
                setCurrentMenu(courses);
                break;
            case 7:
                setCurrentMenu(companies);
                break;

            default:
                break;
        }
    };

    const backBtn = () => {
        setCurrentMenu(mainMenu);
    };

    const closeNavBar = () => {
        const navbar = document.querySelector(".hamburger-overlay");
        const navbarOverlay = document.querySelector(".overlay-blocker");
        navbar.style.width = "0px";
        navbarOverlay.style.width = "0px";
    };

    return (
        <div className="hamburger-wrapper">
            <div className="hamburger-logo">
                <img
                    src={require("../assets/ineuron-logo.png")}
                    alt="ineuron"
                />

                <i onClick={closeNavBar} class="fa-solid fa-xmark"></i>
            </div>

            {currentMenu[1].mainId || currentMenu[0]?.company === true ? (
                <div
                    className="list-group-item back-btn"
                    onClick={() => backBtn()}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </div>
            ) : (
                <span></span>
            )}

            <div className="list-wrapper">
                {currentMenu.map((m, i) => {
                    return (
                        <div
                            key={m.id}
                            className="h-list"
                            onClick={() => filterMenu(m, i)}
                        >
                            {(m.id === 1 || m.id === 8) && m.mainId ? (
                                <span className="d-flex gap-2 align-items-center">
                                    <p className="p-0 m-0">{m.title}</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            ) : (
                                <>
                                    {m?.mainId ? (
                                        <span className="d-flex gap-2 align-items-center">
                                            <p className="p-0 m-0">{m.title}</p>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </span>
                                    ) : (
                                        <p>{m.title}</p>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hamburger;

import React from "react";
import "./card.scss";

function HallFameCard({ profileImage, name, jobTitle, bio }) {
    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-delay="200"
            className="fame-wrapper"
        >
            <div className="hall-fame-card-blur">
                <div className="fame-header-wrapper"></div>
                <div className="hall-header">
                    <img src={profileImage} alt="person" />
                </div>
                <div className="body pb-2">
                    <p>{name}</p>
                    <p>{jobTitle}</p>
                    <p>{bio}</p>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>

            <div className="hall-fame-card">
                <div className="fame-header-wrapper"></div>
                <div className="hall-header">
                    <img src={profileImage} alt="person" />
                </div>
                <div className="body pb-2">
                    <p>{name}</p>
                    <p>{jobTitle}</p>
                    <p>{bio}</p>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    );
}

export default HallFameCard;

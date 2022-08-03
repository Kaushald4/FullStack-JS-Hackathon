import React from "react";
import Marquee from "react-fast-marquee";
import "./hackathonCompany.scss";

function Hackathon() {
    const geekyants = require("../assets/hackathon/geekyants.png");
    const muSigma = require("../assets/hackathon/musigma.png");
    const learnyst = require("../assets/hackathon/learnyst.png");
    const github = require("../assets/hackathon/github.png");
    const jetbrains = require("../assets/hackathon/jetbrains.png");
    const nvidia = require("../assets/hackathon/nvidia.png");
    const redis = require("../assets/hackathon/redis.png");

    const HackathonCompanies = () => (
        <div className="hackathon-container">
            <img src={muSigma} alt="muSigma" />
            <img src={geekyants} alt="geekyants" />
            <img src={learnyst} alt="learnyst" />
            <img src={github} alt="github" />
            <img src={jetbrains} alt="jetbrains" />
            <img src={nvidia} alt="nvidia" />
            <img src={redis} alt="redis" />
        </div>
    );

    return (
        <Marquee
            style={{ position: "absolute", left: 0, right: 0, zIndex: 1 }}
            speed={20}
            pauseOnHover={true}
            children={HackathonCompanies()}
        ></Marquee>
    );
}

export default Hackathon;

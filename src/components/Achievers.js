import React from "react";
import Marquee from "react-fast-marquee";
import "./achievers.scss";

function Achievers() {
    const mindTree = require("../assets/companies/mindtree.png");
    const muSigma = require("../assets/companies/musigma.png");
    const affine = require("../assets/companies/affine.png");
    const boeing = require("../assets/companies/boeing.png");
    const bunBradstreet = require("../assets/companies/bun&bradstreet.png");
    const cohesity = require("../assets/companies/cohesity.png");
    const eminds = require("../assets/companies/eminds.png");
    const freshworks = require("../assets/companies/freshworks.png");
    const geekyants = require("../assets/companies/geekyants.png");
    const greendeck = require("../assets/companies/greendeck.png");
    const informatica = require("../assets/companies/informatica.png");
    const innova = require("../assets/companies/innova.png");
    const kpmg = require("../assets/companies/kpmg.png");
    const learnyst = require("../assets/companies/learnyst.png");
    const leventm = require("../assets/companies/leventm.png");
    const livspace = require("../assets/companies/livspace.png");
    const odessa = require("../assets/companies/odessa.png");
    const redbus = require("../assets/companies/redbus.png");
    const robosoft = require("../assets/companies/robosoft.png");
    const tataiq = require("../assets/companies/tataiq.png");
    const thoughtworks = require("../assets/companies/thoughtworks.png");
    const wellnesys = require("../assets/companies/wellnesys.png");
    const wipro = require("../assets/companies/wipro.png");
    const wissen = require("../assets/companies/wissen.png");
    const zensar = require("../assets/companies/zensar.png");

    const companies = () => (
        <div className="achievers-container">
            <img src={mindTree} alt="midntree" />
            <img src={muSigma} alt="muSigma" />
            <img src={affine} alt="muSigma" />
            <img src={boeing} alt="muSigma" />
            <img src={bunBradstreet} alt="muSigma" />
            <img src={cohesity} alt="muSigma" />
            <img src={eminds} alt="muSigma" />
            <img src={freshworks} alt="muSigma" />
            <img src={geekyants} alt="muSigma" />
            <img src={greendeck} alt="muSigma" />
            <img src={informatica} alt="muSigma" />
            <img src={innova} alt="muSigma" />
            <img src={kpmg} alt="muSigma" />
            <img src={learnyst} alt="muSigma" />
            <img src={leventm} alt="muSigma" />
            <img src={livspace} alt="muSigma" />
            <img src={odessa} alt="muSigma" />
            <img src={redbus} alt="muSigma" />
            <img src={robosoft} alt="muSigma" />
            <img src={tataiq} alt="muSigma" />
            <img src={thoughtworks} alt="muSigma" />
            <img src={wellnesys} alt="muSigma" />
            <img src={wipro} alt="muSigma" />
            <img src={wissen} alt="muSigma" />
            <img src={zensar} alt="muSigma" />
        </div>
    );

    return (
        <Marquee
            style={{ position: "absolute", left: 0, right: 0, zIndex: 1 }}
            speed={20}
            pauseOnHover={true}
            children={companies()}
        ></Marquee>
    );
}

export default Achievers;

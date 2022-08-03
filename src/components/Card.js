import React from "react";
import "./card.scss";

function HallFameCard() {
    return (
        <div className="fame-wrapper">
            <div className="hall-fame-card-blur">
                <div className="fame-header-wrapper"></div>
                <div className="hall-header">
                    <img
                        src={require("../assets/persons/62567c723c8eff001aa26bf5.jpeg")}
                        alt="person"
                    />
                </div>
                <div className="body">
                    <p>Aakash B</p>
                    <p>Amazon , Software Development Engineer 1</p>
                    <p>
                        I was following Krish Sir YouTube channel for more than
                        2-3 year. I learnt Machine Learning and Deep Learning
                        from him.
                    </p>
                </div>
            </div>

            <div className="hall-fame-card">
                <div className="fame-header-wrapper"></div>
                <div className="hall-header">
                    <img
                        src={require("../assets/persons/62567c723c8eff001aa26bf5.jpeg")}
                        alt="person"
                    />
                </div>
                <div className="body">
                    <p>Aakash B</p>
                    <p>Amazon , Software Development Engineer 1</p>
                    <p>
                        I was following Krish Sir YouTube channel for more than
                        2-3 year. I learnt Machine Learning and Deep Learning
                        from him.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HallFameCard;

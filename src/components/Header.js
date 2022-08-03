import React from "react";
import "./header.scss";

function Header() {
    return (
        <div className="header d-flex">
            <div className="logo">
                <img
                    src={require("../assets/ineuron-logo.png")}
                    alt="iNeuron"
                    height={38}
                />
            </div>
            <ul className="list d-flex gap-5 align-items-center">
                <li className="list-group-item list-item">
                    <span className="d-flex gap-2 align-items-center">
                        <p className="p-0 m-0">Courses</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <ul className="sub-list">
                        <div>
                            <li className="list-group-item sub-list-item d-flex justify-content-between">
                                <p>Data Science</p>
                                <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </li>
                            <ul>
                                <li className="list-group-item">
                                    Full Stack Data Science
                                </li>
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">
                                    Python project
                                </li>
                                <li className="list-group-item">
                                    Python Interview
                                </li>
                                <li className="list-group-item">Stats</li>
                                <li className="list-group-item">
                                    Stats Interview
                                </li>
                                <li className="list-group-item">
                                    Machine Learning
                                </li>
                                <li className="list-group-item">
                                    Machine Learning Project
                                </li>
                                <li className="list-group-item">
                                    Machine Learning Interview
                                </li>
                                <li className="list-group-item">
                                    Deep Learning
                                </li>
                                <li className="list-group-item">
                                    Deep Learning Project
                                </li>
                                <li className="list-group-item">
                                    Deep Learning Interview
                                </li>
                                <li className="list-group-item">NLP</li>
                                <li className="list-group-item">NLP Project</li>
                                <li className="list-group-item">
                                    NLP Interview
                                </li>
                                <li className="list-group-item">
                                    Computer Vision
                                </li>
                                <li className="list-group-item">
                                    Computer Vision Project
                                </li>
                                <li className="list-group-item">
                                    Computer Vision Interview
                                </li>
                                <li className="list-group-item">
                                    Reinforcement Learning
                                </li>
                                <li className="list-group-item">Chatbots</li>
                                <li className="list-group-item">Mlops</li>
                                <li className="list-group-item">
                                    Mlops Project
                                </li>
                                <li className="list-group-item">
                                    Mlops Interview Preparation
                                </li>
                            </ul>
                        </div>

                        <div>
                            <li className="list-group-item sub-list-item d-flex justify-content-between">
                                <p>Web Development</p>
                                <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </li>
                            <ul>
                                <li className="list-group-item">
                                    Full Stack Web Development
                                </li>
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">Javascript</li>
                                <li className="list-group-item">Node js</li>
                                <li className="list-group-item">Stats</li>
                                <li className="list-group-item">Angular Js</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">Html</li>
                                <li className="list-group-item">Php</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Vue js</li>
                                <li className="list-group-item">
                                    Web Development Projects
                                </li>
                                <li className="list-group-item">Django</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">Fast Api</li>
                                <li className="list-group-item">
                                    Web Development Interview
                                </li>
                                <li className="list-group-item">Next js</li>
                                <li className="list-group-item">Ui/ux</li>
                            </ul>
                        </div>

                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Mobile Development</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Blockchain</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Programming</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Cyber Security</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Testing</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Digital Marketing</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>CLOUD</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Devops</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>IOT</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>RPA</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>AR VR</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>SALESFORCE</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>Data Structure</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="list-group-item sub-list-item d-flex justify-content-between">
                            <p>System Design</p>
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item list-item">One Neuron</li>
                <li className="list-group-item list-item">Job Portal</li>
                <li className="list-group-item list-item">Internship Portal</li>
                <li className="list-group-item list-item">
                    <span className="d-flex gap-2 align-items-center">
                        <p className="p-0 m-0">Company</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>

                    <ul className="sub-list">
                        <div>
                            <li className="list-group-item sub-list-item d-flex justify-content-between">
                                <ul>
                                    <li className="list-group-item list-item">
                                        About us
                                    </li>
                                    <li className="list-group-item list-item">
                                        Hack-A-Thon
                                    </li>
                                    <li className="list-group-item list-item">
                                        Job guarantee
                                    </li>
                                    <li className="list-group-item list-item">
                                        Privacy Policy
                                    </li>
                                </ul>
                                <ul>
                                    <li className="list-group-item list-item">
                                        Privacy Policy
                                    </li>
                                    <li className="list-group-item list-item">
                                        FAQs
                                    </li>
                                    <li className="list-group-item list-item">
                                        Job assistance
                                    </li>
                                    <li className="list-group-item list-item">
                                        Terms and conditions
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </li>
                <li className="list-group-item list-item">Hall fo fame</li>
                <li className="list-group-item list-item">Blogs</li>
                <li className="list-group-item list-item">
                    <button className="header-auth-btn">Signup/Login</button>
                </li>
            </ul>
        </div>
    );
}

export default Header;

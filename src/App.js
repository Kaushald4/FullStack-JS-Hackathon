import "./App.scss";
import "./style.scss";

import { useParallax } from "react-scroll-parallax";

import Header from "./components/Header";
import StudySvg from "./assets/studying.svg";
import JobPortal from "./assets/job-portal.svg";
import Internship from "./assets/internship.svg";
import AfflicateSvg from "./assets/afflicate.svg";
import HallOfFameSvg from "./assets/halloffame.svg";
import BlogSvg from "./assets/blog.svg";
import CollegeSvg from "./assets/institution/college.svg";
import GoaInstSvg from "./assets/institution/goa-inst.svg";
import KietSvg from "./assets/institution/kiet.svg";
import TaxilaSvg from "./assets/institution/taxila.svg";
import VitSvg from "./assets/institution/vit.svg";
import DotPattern from "./assets/dot-pattern.svg";

import Achievers from "./components/Achievers";
import HallFame from "./components/HallFame";
import Learn from "./components/Learn";
import Hackathon from "./components/HackathonCompany";
import TechAvengers from "./components/TechAvengers";

function App() {
    return (
        <div className="container">
            <Header />

            <div className="blur-overlay"></div>
            <div className="hero d-flex align-items-center justify-content-between">
                <div className="left">
                    <span className="tagline">
                        <span>
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <h4>Learn from the best of industry</h4>
                    </span>
                    <h1>
                        Highest in <span>quality,</span> affordable <br /> in
                        price
                    </h1>
                    <p>
                        Digital entrepreneurs, Youtubers and content creators
                        provide <br /> affordable courses across technologies.
                    </p>
                    <span className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                        />
                    </span>
                </div>
                <div className="right">
                    <div className="heros">
                        <img
                            src={require("./assets/avengers.png")}
                            alt="heros"
                        />
                    </div>
                </div>
            </div>

            <div className="dot-patter">
                <img src={DotPattern} alt="pattern" />
            </div>

            <div className="top-blob">
                <img src={require("./assets/toplayer.png")} alt="blob" />
            </div>
            <div className="blob-1">
                <img src={require("./assets/blob-1.png")} alt="blob" />
            </div>
            <div className="blob-2">
                <img src={require("./assets/blob-1.png")} alt="blob" />
            </div>

            <section className="work-section">
                <h1 className="text-center fw-bold">
                    "Pure <span>Hard Work,</span> No Shortcuts"
                </h1>
                <div className="section-image-overlay">
                    <div className="work-cards">
                        <div className="left">
                            <div className="card">
                                <p className="course-no">
                                    400+ <span>Different Courses</span>
                                </p>
                            </div>
                            <div className="card">
                                <p className="course-no">
                                    400000+ <span>Students Enrolled</span>
                                </p>
                            </div>
                            <div className="card">
                                <p className="course-no">
                                    100000+ <span>Successful Transition</span>
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="study-logo">
                                <img src={StudySvg} alt="study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* achievers section */}
            <section className="achievers-section">
                <h1 className="text-center">
                    Our <span>achiever's</span> work with
                </h1>
                <div>
                    <Achievers />
                </div>
            </section>

            {/* hall of fame section */}
            <section className="hall-of-fame">
                <h1 className="text-center mb-5">
                    <span>Hall</span> of fame
                </h1>
                <HallFame />
                <p className="text-center mt-4">View More</p>
            </section>

            {/* learn section */}
            <section className="learn-section">
                <h1 className="text-center">
                    What you will <span>learn</span>
                </h1>
                <Learn />
            </section>

            {/* Hackathon Section */}
            <section className="hackathon-section">
                <h1 className="text-center">
                    <span>Hackathon</span> Companies
                </h1>
                <Hackathon />
            </section>

            {/* Products Section */}
            <section className="our-products">
                <h1 className="text-center">
                    Our <span>Products</span>
                </h1>

                <div className="products-card row mt-5">
                    <div className="col-6">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="jobportal-img">
                                <img src={JobPortal} alt="jobportal" />
                            </div>
                            <div className="job-info">
                                <h2>Job Portal</h2>
                                <p>
                                    Use exceptional templates for a stand-out
                                    resume minus the sign up process.
                                </p>
                                <button className="i-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-card row mt-5">
                    <div className="col-6 offset-6">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="jobportal-img order-2">
                                <img src={Internship} alt="jobportal" />
                            </div>
                            <div className="job-info">
                                <h2>Internship Portal</h2>
                                <p>
                                    iNeuron's self-paced internship portal
                                    prioritises hands-on training with 570+
                                    internship projects.
                                </p>
                                <button className="i-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-card row mt-5">
                    <div className="col-6 offset-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="jobportal-img order-0">
                                <img src={AfflicateSvg} alt="jobportal" />
                            </div>
                            <div className="job-info">
                                <h2>Become an afflicate</h2>
                                <p>
                                    Explore affiliate marketing opportunities
                                    with iNeuron and attain financial frredom.
                                </p>
                                <button className="i-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-card row mt-5">
                    <div className="col-6 offset-6">
                        <div className="d-flex justify-content-between  align-items-center">
                            <div className="jobportal-img order-2">
                                <img src={HallOfFameSvg} alt="jobportal" />
                            </div>
                            <div className="job-info">
                                <h2>Hall of fame</h2>
                                <p>
                                    Our student placements and 10+ career
                                    transitions speak volumes about our courses.
                                </p>
                                <button className="i-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-card row mt-5">
                    <div className="col-6 offset-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="jobportal-img order-0">
                                <img src={BlogSvg} alt="jobportal" />
                            </div>
                            <div className="job-info">
                                <h2>InBlog</h2>
                                <p>
                                    Explore all you want about your favourite
                                    courses.
                                </p>
                                <button className="i-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* tech avengers section */}
            <section className="tech-avengers">
                <h1 className="text-center">
                    Tech <span>Avengers</span>
                </h1>
                <TechAvengers />
            </section>

            {/* partenerd section */}
            <section className="partnerd-section">
                <h1 className="text-center">
                    Our Partnered <span>Institutions</span>
                </h1>
                <div className="partenered-inst-img d-flex justify-content-center">
                    <img src={CollegeSvg} alt="college" />
                    <img src={VitSvg} alt="college" />
                    <img src={GoaInstSvg} alt="college" />
                    <img src={KietSvg} alt="college" />
                    <img src={TaxilaSvg} alt="college" />
                </div>
            </section>

            {/* footer section */}

            <div className="footer-container">
                <footer className="footer-wrapper">
                    <div className="footer">
                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <img
                                        src={require("./assets/ineuron-logo-white.png")}
                                        alt="ineuron"
                                    />
                                </div>
                                <div className="social-icons">
                                    <span>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-twitter"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-youtube"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="address-location">
                                <div className="">
                                    <span>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </span>
                                    <p>
                                        17th Floor Tower A, Brigade Signature
                                        Towers, Sannatammanahalli, Bengaluru,
                                        Karnataka 562129.
                                    </p>
                                </div>
                                <div className="">
                                    <span>
                                        <i class="fa-solid fa-envelope"></i>
                                    </span>
                                    <p>
                                        Email us:{" "}
                                        <a href="mailto:contact@ineuron.ai">
                                            contact@ineuron.ai
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </ul>

                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <p>Company</p>
                                </div>
                                <div className="social-icons"></div>
                            </div>
                            <div className="d-flex align-items-center gap-5 mt-4">
                                <div>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Hack-A-Thon
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Job guarantee
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Privacy policy
                                        </a>
                                    </li>
                                </div>
                                <div>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Job assistance
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </ul>

                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <p>Products</p>
                                </div>
                                <div className="social-icons"></div>
                            </div>
                            <div className="mt-4">
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Job Portal
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Internship Portal
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Become an afflicate
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Hall of fame
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        InBlog
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </footer>

                <footer className="footer-wrapper-shown">
                    <div className="footer">
                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <img
                                        src={require("./assets/ineuron-logo-white.png")}
                                        alt="ineuron"
                                    />
                                </div>
                                <div className="social-icons">
                                    <span>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-twitter"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </span>
                                    <span>
                                        <i class="fa-brands fa-youtube"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="address-location">
                                <div className="">
                                    <span>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </span>
                                    <p>
                                        17th Floor Tower A, Brigade Signature
                                        Towers, Sannatammanahalli, Bengaluru,
                                        Karnataka 562129.
                                    </p>
                                </div>
                                <div className="">
                                    <span>
                                        <i class="fa-solid fa-envelope"></i>
                                    </span>
                                    <p>
                                        Email us:{" "}
                                        <a href="mailto:contact@ineuron.ai">
                                            contact@ineuron.ai
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </ul>

                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <p>Company</p>
                                </div>
                                <div className="social-icons"></div>
                            </div>
                            <div className="d-flex align-items-center gap-5 mt-4">
                                <div>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Hack-A-Thon
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Job guarantee
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Privacy policy
                                        </a>
                                    </li>
                                </div>
                                <div>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Job assistance
                                        </a>
                                    </li>
                                    <li className="company-list list-group-item">
                                        <a
                                            className="text-decoration-none text-white"
                                            href="#"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </ul>

                        <ul className="footer-list">
                            <div className="footer-header">
                                <div className="i-logo">
                                    <p>Products</p>
                                </div>
                                <div className="social-icons"></div>
                            </div>
                            <div className="mt-4">
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Job Portal
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Internship Portal
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Become an afflicate
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        Hall of fame
                                    </a>
                                </li>
                                <li className="company-list list-group-item">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="#"
                                    >
                                        InBlog
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;

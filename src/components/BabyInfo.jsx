import React from "react";
import "../styles/BabyInfo.css";

function BabyInfo() {
    return (
        <section id="baby-info">
            <h1 className="title-quote">ماشاءاللہ</h1>

            <div className="wrapper">
                <div
                    className="content"
                    data-aos="zoom-out"
                    data-aos-offset="300"
                >
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="3"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby1.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby2.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby3.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby4.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="info">
                        <h3>B. Muhammad Noorain Raza</h3>
                        <h5 className="dob">Date of Birth: 8/04/2022.</h5>
                        <h4>S/o. Mrs. & Mr. B. Sharukh Raza</h4>
                        <h5>Grand S/o. Janab B. Muhammad Farooq Sahab</h5>
                        <h5>
                            Maternal Grand S/o. Janab M. Muhammad Noor
                            Sahab(Late) and <br />
                            K. Ansar Basha Sahab, <sub>(Gold Smith)</sub>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabyInfo;

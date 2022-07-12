import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Naming Ceremony</h1>
                    <p>
                        On Saturday, 16<sup>th</sup> July, 2022,
                        <br />
                        16<sup>th</sup> of Zil-Hajjah, 1443,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        MBA Function Hall,
                        <br /> Near Jyothirmayi Degree College,
                        <br /> Ismail Jhara Road,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

import React from "react";

function Info() {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">8 Years Working</span>
            </div>
            <div className="about__box">
            <i class='bx bxs-graduation about__icon' ></i>
                <h3 className="about__title">Graduate</h3>
                <span className="about__subtitle">Level 6</span>
            </div>
            <div className="about__box">
            <i class='bx bx-time about__icon' ></i>
                <h3 className="about__title">Available</h3>
                <span className="about__subtitle">Right away</span>
            </div>
        </div>
    )
}

export default Info
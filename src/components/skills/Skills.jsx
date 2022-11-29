import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css"
import Design from "./Design";

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Technical level</span>

            <div className="skills__container container grid">
                <Design></Design>
                <Frontend></Frontend>
                <Backend></Backend>
                
            </div>
        </section>
    )
}
export default Skills
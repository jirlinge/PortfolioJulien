import React from "react";
import "./work.css";
import Works from "./Works";
import { useState } from "react";
import { useEffect } from "react";
import { projectsData } from "./Data";

function Work() {
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const[active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    return (
        <section className="work section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>
            <Works />
        </section>
    )
}

export default Work
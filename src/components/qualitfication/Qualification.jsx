import React from "react";
import "./qualification.css"
import { useState } from "react";

function Qualification() {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                         "qualification__button qualification__active button--flex" : 
                         "qualification__button button--flex"}
                         onClick={() => toggleTab(1)}
                         >
                        <i className="uil uil-graduation-cap qualification__icon">
                        </i>{""}Education
                    </div>

                    <div className={toggleState === 2 ?
                         "qualification__button qualification__active button--flex" : 
                         "qualification__button button--flex"}
                         onClick={() => toggleTab(2)}
                         >
                        <i className="uil uil-briefcase-alt qualification__icon">
                        </i>{""}Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                     :"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Concepteur developer application</h3>
                                <span className="qualification__subtitle">
                                    Lamanu Versailles
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        May 2021 - June 2022
                                    </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">POEC C# .net</h3>
                                <span className="qualification__subtitle">
                                    Lamanu Versailles
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        February 2021 - May 2022
                                    </i>
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web development</h3>
                                <span className="qualification__subtitle">
                                    IUT Montbéliard
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        September 2011 - September 2014
                                    </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Art & design school</h3>
                                <span className="qualification__subtitle">
                                    Atelier de sèvres
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        September 2010 - September 2011
                                    </i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                     :"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Application developer and designer</h3>
                                <span className="qualification__subtitle">
                                    ColibImmo
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        May 2021 - June 2022
                                    </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Developer / project manager</h3>
                                <span className="qualification__subtitle">
                                L'oeil du jour
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        May 2021 - June 2022
                                    </i>
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Store manager</h3>
                                <span className="qualification__subtitle">
                                Franprix
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        September 2018 - August 2020
                                    </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Webdesigner / communications delegate</h3>
                                <span className="qualification__subtitle">
                                    Prohelio
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    January 2017 - September 2018
                                    </i>
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Webdesigner</h3>
                                <span className="qualification__subtitle">
                                    Agency Ineiaki
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        September 2014 - September 2015
                                    </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Qualification
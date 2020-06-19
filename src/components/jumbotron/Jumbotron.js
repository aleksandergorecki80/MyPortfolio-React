import React from 'react';
import HeroBg from '../../images/hero_bg.jpg';

import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Jumbotron = () => (
    <section className="jumbotron">
        <div
            className="jumbotron__backgound"
            style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundSize: "cover",
                height: "80vh",
            }}
        >
            <div className="jumbotron__go-down-button">
                <FontAwesomeIcon icon={faAngleDoubleDown} className="jumbotron__go-down-button__icon"/>
            </div>
        </div>
    </section>
);

export default Jumbotron;
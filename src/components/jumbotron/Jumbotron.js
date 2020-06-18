import React from 'react';
import HeroBg from '../../images/hero_bg.jpg';

const Jumbotron = () => (
    <div>
        <img src={HeroBg} className="jumbotron__background" />
        <img src={HeroBg} className="jumbotron__background" />
    </div>
);

export default Jumbotron;
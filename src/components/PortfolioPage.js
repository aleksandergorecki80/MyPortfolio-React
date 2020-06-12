import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
    console.log(props);
    const noProps = (
        <div>    
            <h1>My Works</h1>
            <p>Checkout the following things</p>
        </div>
    );
    const withProps = 'Some Props';
    return (
        <div>
            My projects
            <Link to="/portfolio/1">Item 1</Link>
            <Link to="/portfolio/2">Item 2</Link>
        </div>)

};

export default PortfolioPage;
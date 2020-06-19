import React, { Component } from 'react';
import PortfolioPage from './PortfolioPage';

class PortfolioList extends Component {
    render() {
     return (
         <section className="container">
                    <h2>MY PROJECTS</h2>
                    <hr className="hr--separator"/>
             <PortfolioPage />
         </section>
     )   
    }
}

export default PortfolioList;
import React, { Component } from 'react';
import PortfolioPage from './PortfolioPage';

const PortfolioList = (props) => {
    const projectsList = props.portfolioContent.map((project, key)=>{
        return(
            <PortfolioPage 
            key={key}
            title={project.title}
            subtitle={project.subtitle}
            img={project.img}
            technologies={project.technologies}
            wwwButtonName={project.wwwButtonName}
            wwwButtonUrl={project.wwwButtonUrl}
            githubButtonName={project.githubButtonName}
            githubButtonUrl={project.githubButtonUrl}
        />
        )

    });

    return (
        <section className="container portfolio">
            <h2>MY PROJECTS</h2>
            <hr className="hr--sections-separator" />
            {projectsList}
        </section>
    )
}

export default PortfolioList;
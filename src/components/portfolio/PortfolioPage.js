import React from 'react';

const PortfolioPage = (props) => {
    const technologiesList = props.technologies.map((technology, key) => {
        return (
            <li key={key}>{technology}</li>
        )
    });
    return (
        <div>
            <div className="row">
                <div className="col-7 col-s-12">
                    <img src={`/images/${props.img}`} alt={props.name} />
                </div>
                <div className="col-5 col-s-12">
                    <h3>{props.title}</h3>
                    <h4>{props.subtitle}</h4>
                    <ul>{technologiesList}</ul>
                    <a href={props.wwwButtonUrl}
                        className="button button--green"
                        target="blank"
                    >
                        {props.wwwButtonName ? props.wwwButtonName : "View online"}
                    </a>
                    <a href={props.githubButtonUrl}
                        className="button button--red"
                        target="blank"
                    >
                        {props.githubButtonName ? props.githubButtonName : "Check on GitHub"}
                    </a>
                </div>
            </div>
            <div><hr className="hr--separator" /></div>
        </div>

    )
};

export default PortfolioPage;
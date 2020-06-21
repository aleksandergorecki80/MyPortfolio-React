import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PortfolioPage = (props) => {
    const technologiesList = props.technologies.map((technology, key) => {
        return (
            <li key={key}>
                <FontAwesomeIcon icon={faCheck} className="portfolio__check--icon" />
                {technology}
            </li>
        )
    });
    return (
        <div>
            <div className="row">
                <div className="col-7 col-s-12">
                    <img src={`/images/${props.img}`} alt={props.name} />
                </div>
                <div className="col-5 col-s-12">
                    <div>
                        <h3>{props.title}</h3>
                        <h4>{props.subtitle}</h4>
                        <ul>{technologiesList}</ul>
                        <div>
                            <a href={props.wwwButtonUrl}
                                className="button portfolio__button button--green portfolio__button_margin-right"
                                target="blank"
                            >
                                {props.wwwButtonName ? props.wwwButtonName : "View online"}
                            </a>
                            <a href={props.githubButtonUrl}
                                className="button portfolio__button button--red"
                                target="blank"
                            >
                                {props.githubButtonName ? props.githubButtonName : "Check on GitHub"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div><hr className="hr--separator" /></div>
        </div>

    )
};

export default PortfolioPage;
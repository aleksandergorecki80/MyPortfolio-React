import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import GalleryModal from '../galleryModal/GalleryModal';

const PortfolioPage = (props) => {
    const [ gallery, setGallery ] = useState(false);
    const klick = () => {
        return props.project.imgCounter && setGallery(true);
        
    }
  const technologiesList = props.project.technologies.map((technology, key) => {
    return (
      <li key={key}>
        <FontAwesomeIcon icon={faCheck} className="portfolio__check--icon" />
        {technology}
      </li>
    );
  });
  return (
    <div>
      <div className="row">
        <div className="col-7 col-s-12">
          <img
            src={`/images/${props.project.img}.jpg`}
            alt={props.project.name}
            className={ props.project.imgCounter ? 'show-gallery' : '' }
            onClick={klick}
          />
        </div>
        <div className="col-5 col-s-12">
          <div>
            <h3>{props.project.title}</h3>
            {props.project.subtitle && <h4>{props.project.subtitle}</h4>}
            {props.project.description && <p>{props.project.description}</p>}
            <ul>{technologiesList}</ul>
            <div>
              <a
                href={props.project.wwwButtonUrl}
                className="button portfolio__button button--green portfolio__button_margin-right"
                target="blank"
              >
                {props.project.wwwButtonName
                  ? props.project.wwwButtonName
                  : 'View online'}
              </a>
              <a
                href={props.project.githubButtonUrl}
                className="button portfolio__button button--red"
                target="blank"
              >
                {props.project.githubButtonName
                  ? props.project.githubButtonName
                  : 'Check on GitHub'}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="hr--separator" />
      </div>
        { gallery && <GalleryModal img={props.project.img} imgCounter={props.project.imgCounter} setGallery={setGallery}/> }
    </div>
  );
};

export default PortfolioPage;

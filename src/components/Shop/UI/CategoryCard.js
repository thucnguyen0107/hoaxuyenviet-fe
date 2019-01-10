import React from 'react';
import { Link } from 'react-router-dom';

const categoryCard = (props) => {
  return (
    <div className="product-block product-thumb transition">
      <div className="product-block-inner">
        <div className="image">
          <Link to={props.cardContent.eventLink}>
            <img src={props.cardContent.image} title={props.cardContent.name} alt={props.cardContent.name} className="img-responsive reg-image" />
            <img className="img-responsive hover-image" src={props.cardContent.image} title={props.cardContent.name}
              alt={props.cardContent.name} />
          </Link>
          <div className="extra-info">
          </div>
        </div>

      </div>
    </div>
  );

}

export default categoryCard;
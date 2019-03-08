import React from "react";
import { Link } from "react-router-dom";
import Iimg from "../UI/LoadingImage/Limg";

const categoryCard = props => {
  let styleImage_2_3;
  styleImage_2_3 = {
    width: "330px",
    height: "500px"
  };
  return (
    <div className="product-block product-thumb transition">
      <div className="product-block-inner">
        <div className="image">
          <Link to={props.cardContent.eventLink}>
            <Iimg
              style={styleImage_2_3}
              src={props.cardContent.image}
              title={props.cardContent.name}
              alt={props.cardContent.name}
              className="img-responsive reg-image"
            />
            <Iimg
              style={styleImage_2_3}
              className="img-responsive hover-image"
              src={props.cardContent.image}
              title={props.cardContent.name}
              alt={props.cardContent.name}
            />
          </Link>
          <div className="extra-info" />
        </div>
      </div>
    </div>
  );
};

export default categoryCard;

import React from "react";
import { Link } from "react-router-dom";
// passed through props: collection, type
const Carousel = props => {
  return (
    <div className="carousel">
      {props.collection.map(({ name, images }) => {
        return (
          <Link to={`/${props.type}/${name}`}>
            <img
              className="carousel__card"
              key={name}
              alt={name}
              src={images[0]}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Carousel;

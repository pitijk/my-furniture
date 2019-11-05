import React from "react";
import { connect } from "react-redux";
import ImageGallery from "react-image-gallery";

const Product = props => {
  const { name, images, description, price } = props;
  let items = [];
  images.forEach(cur => items.push({ original: cur }));
  return (
    <>
      <ImageGallery
        items={items}
        infinite={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
      <div className="product__details">
        <h2 className="title">
          {name}
          <small>{` ${price}$`}</small>
        </h2>
        {/* Add to cart button */}
        <p className="description">{description}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { type, name } = ownProps.match.params;
  const { images, description, price } = state.furnitures
    .find(cur => cur.type === type)
    .collection.find(cur => cur.name === name);
  return { name, images, description, price };
};

export default connect(mapStateToProps)(Product);

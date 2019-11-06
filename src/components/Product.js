import React, { useState } from "react";
import { connect } from "react-redux";
import ImageGallery from "react-image-gallery";
import { addToCart } from "../actions";

const Product = props => {
  const [quantity, setQuantity] = useState(1);
  const { name, images, description, price } = props;
  let items = [];
  images.forEach(cur => items.push({ original: cur }));
  const handleSubmit = e => {
    e.preventDefault();
    //addToCart = (name, price, quantity)
    props.addToCart(name, price, Number(quantity));
    setQuantity(1);
  };
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
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
            type="number"
            name="quantity"
            min="1"
            max="9"
            className="quantity"
          />
          <input value="ADD TO CART" type="submit" className="submit" />
        </form>
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

export default connect(
  mapStateToProps,
  { addToCart }
)(Product);

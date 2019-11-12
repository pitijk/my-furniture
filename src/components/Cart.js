import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../actions";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = props => {
  const renderProducts = () => {
    return props.products.map(({ name, img, price, quantity }) => {
      return (
        <div key={name} className="product">
          <img src={img} alt={name} className="product__img" />
          <div className="mid">
            <p className="product__name">{name}</p>
            <p className="product__price">
              price: <strong>{`${price}$`}</strong>
            </p>
            <p className="product__quantity">
              quantity: <strong>{`${quantity}`}</strong>
            </p>
            <p className="product__price">
              total price: <strong>{`${price * quantity}$`}</strong>
            </p>
          </div>
          <button
            onClick={() => props.deleteFromCart(name)}
            className="product__delete"
          >
            <i className="fas fa-times fa-2x"></i>
          </button>
        </div>
      );
    });
  };
  return (
    <div className="cart">
      <div className="cart__header">
        <Link to="/">back</Link>
        <h2 className="cart__title">Cart</h2>
      </div>
      <ul className="cart__products">{renderProducts()}</ul>
      <h3>{`Total price: ${props.totalValue}`}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  const { products, totalValue } = state.cart;
  return { products, totalValue };
};

export default connect(
  mapStateToProps,
  { deleteFromCart }
)(Cart);

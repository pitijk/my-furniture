import React from "react";
import { connect } from "react-redux";
import Carousel from "./Carousel";

const App = props => {
  const renderFurnitures = () => {
    return props.furnitures.map(({ type, collection }) => {
      return (
        <section key={type}>
          <h2>{type}</h2>
          <Carousel collection={collection} />
        </section>
      );
    });
  };
  return (
    <>
      <main>
        <h1>my</h1>
        <h1>furniture</h1>
        <button>
          <i className="fas fa-arrow-down"></i>
        </button>
      </main>
      {renderFurnitures()}
    </>
  );
};

const mapStateToProps = state => {
  return { furnitures: state.furnitures };
};

export default connect(mapStateToProps)(App);

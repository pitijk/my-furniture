import "../sass/index.scss";

import React from "react";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import Footer from "./Footer";

const App = props => {
  let fisrtSection;
  const renderFurnitures = () => {
    return props.furnitures.map(({ type, collection }, i) => {
      if (i === 0) {
        return (
          <section ref={el => (fisrtSection = el)} key={type}>
            <h2 className="section__title">{type}</h2>
            <Carousel collection={collection} />
          </section>
        );
      } else {
        return (
          <section key={type}>
            <h2 className="section__title">{type}</h2>
            <Carousel collection={collection} />
          </section>
        );
      }
    });
  };

  return (
    <>
      <main>
        <div className="title">
          <h1>my</h1>
          <h1>furniture.</h1>
        </div>
        <i
          onClick={() =>
            fisrtSection.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="fas fa-angle-double-down fa-4x"
        ></i>
      </main>
      {renderFurnitures()}
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return { furnitures: state.furnitures };
};

export default connect(mapStateToProps)(App);

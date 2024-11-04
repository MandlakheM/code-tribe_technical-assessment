import React from "react";
import "./itemDetails.css";
import Map from "../../components/map/Map";

function ItemDetails() {
  return (
    <section className="gutter info__container">
      <div className="item__image">
        <img
          src="https://img.freepik.com/free-photo/high-angle-controllers-headphones_23-2149829136.jpg?t=st=1730707509~exp=1730711109~hmac=99e0cf842fcd7486344ee1b20971d4d5aaff2125334858b366cdba8e1d8d0e6b&w=740"
          alt=""
        />
      </div>
      <div className="item__info">
        <p className="item__info__boldtext">x box</p>
        <p className="item__info__boldtext">R1500</p>
        <p>listed on: 2024-11-04 </p>
        <div className="action__buttons">
          <button>message</button>
          <button>save</button>
          <button>share</button>
          <button>add to cart</button>
        </div>
        <label htmlFor="">
          <b>Seller's description</b>
          <p className="item__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            exercitationem. Accusamus aperiam repellat, porro alias cum harum
            totam quaerat voluptatum voluptate, officiis iusto culpa mollitia
            facere ex molestiae at doloremque.
          </p>
        </label>
        {/* <div className="map__container"> */}
        <Map />
        {/* </div> */}
      </div>
    </section>
  );
}

export default ItemDetails;

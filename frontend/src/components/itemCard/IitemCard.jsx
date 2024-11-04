import React from "react";
import "./itemCard.css";

function IitemCard() {
  return (
    <div className="card">
      <div className="img__container">
        <img
          src="https://img.freepik.com/free-photo/high-angle-controllers-headphones_23-2149829136.jpg?t=st=1730707509~exp=1730711109~hmac=99e0cf842fcd7486344ee1b20971d4d5aaff2125334858b366cdba8e1d8d0e6b&w=740"
          alt=""
        />
      </div>
      <p>
        <b>R1500</b>
      </p>
      <p>Gauteng, Jozi</p>
    </div>
  );
}

export default IitemCard;

import React from "react";
import "./itemCard.css";
import { useNavigate } from "react-router-dom";

function IitemCard({ item }) {
  const navigate = useNavigate();

  const itemClicked = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="card">
      <div className="img__container">
        <img
          src={item.itemImg}
          alt={item.itemName}
            onClick={itemClicked}
        />
      </div>
      <p>
        <b>{item.itemPrice}</b>
      </p>
      <p>{item.itemLocation}</p>
    </div>
  );
}

export default IitemCard;

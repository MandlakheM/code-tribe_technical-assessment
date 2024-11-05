import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneItem } from "../../api";
import "./itemDetails.css";
import Map from "../../components/map/Map";

function ItemDetails() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getOneItem(id); 
        setItem(response.data);
        console.log(id)
        setLoading(false);
      } catch (err) {
        setError("Failed to load item details");
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading item details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="gutter info__container">
      <div className="item__image">
        <img src={item?.image} alt={item?.itemName} />
      </div>
      <div className="item__info">
        <p className="item__info__boldtext">{item?.itemName}</p>
        <p className="item__info__boldtext">{item?.itemPrice}</p>
        <p>listed on: {item?.listedDate}</p>
        <div className="action__buttons">
          <button>message</button>
          <button>save</button>
          <button>share</button>
          <button>add to cart</button>
        </div>
        <label htmlFor="">
          <b>Seller's description</b>
          <p className="item__description">{item?.itemDescription}</p>
        </label>
        <Map location={item?.itemLocation} />
      </div>
    </section>
  );
}

export default ItemDetails;

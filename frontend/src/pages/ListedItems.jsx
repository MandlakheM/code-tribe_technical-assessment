import { useState } from "react";
import "./listedItem.css";
import IitemCard from "../components/itemCard/IitemCard";

function ListedItems() {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "x box",
      itemPrice: "R1500",
      itemDescription: "saaaaaaaaaaaaaaaddddd",
      category: "electronics",
      itemLocation: "gauteng, jozi",
    },
    {
      id: 2,
      itemName: "laptop",
      itemPrice: "R6000",
      itemDescription: "sddd",
      category: "electronics",
      itemImg:
        "https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?t=st=1730726509~exp=1730730109~hmac=1dc659c1bd5160f273bc85f05872daf79b3e0daf71e3a810b08fe3ae18613efd&w=740",
    },
    {
      id: 3,
      itemName: "cellphone",
      itemPrice: "R4500",
      itemDescription: "saaaaaaaaaaaaaaaddddd",
      category: "electronics",
      itemImg:
        "https://img.freepik.com/free-photo/high-angle-controllers-headphones_23-2149829136.jpg?t=st=1730707509~exp=1730711109~hmac=99e0cf842fcd7486344ee1b20971d4d5aaff2125334858b366cdba8e1d8d0e6b&w=740",
    },
  ]);

  return (
    <div className="items__list">
      {items.map((item) => (
        <IitemCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ListedItems;

import React from "react";
import "./categoryHeader.css";
import { FaComputer } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { PiCarSimpleThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiGuitarDuotone } from "react-icons/pi";
import { MdOutlineSmartToy } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";

function CategoryHeader() {
  return (
    <nav className="cat__container gutter">
      <div className="category">
        <FaComputer />
        <h3>Electronics</h3>
      </div>
      <div className="category">
        <GiClothes />
        <h3>Fashion</h3>
      </div>{" "}
      <div className="category">
        <IoHomeOutline />
        <h3>Home</h3>
      </div>{" "}
      <div className="category">
        <PiCarSimpleThin />
        <h3>Cars</h3>
      </div>{" "}
      <div className="category">
        <IoGameControllerOutline />
        <h3>Games</h3>
      </div>{" "}
      <div className="category">
        <PiGuitarDuotone />
        <h3>Instruments</h3>
      </div>{" "}
      <div className="category">
        <MdOutlineSmartToy />
        <h3>Toys</h3>
      </div>{" "}
      <div className="category">
        <MdSportsSoccer />
        <h3>Sports</h3>
      </div>
      <div className="category">
        <GiFamilyHouse />
        <h3>Property</h3>
      </div>
    </nav>
  );
}

export default CategoryHeader;


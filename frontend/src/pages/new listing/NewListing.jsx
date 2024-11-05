import React, { useState } from "react";
import "./newListing.css";
import { FaFileUpload } from "react-icons/fa";

function NewListing() {
  const [file, setFile] = useState("");
  const [tossleStock, setToggleStock] = useState(false);

  return (
    <div className="form__container gutter">
      <h2>Create new item for sale</h2>
      <div className="new__item__img__container">
        <p>Item preview</p>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=""
        />
      </div>
      <form action="">
        <div>
          <label htmlFor="file">
            Upload image: <FaFileUpload />
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
        <h6>Required</h6>
        <p>Be as descriptive as possible</p>
        <div className="inputGroup">
          <label htmlFor="itemName">Item name</label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            placeholder="item name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="itemPrice">Item price</label>
          <input
            type="number"
            name="itemPrice"
            id="itemPrice"
            placeholder="item price"
            min={1}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="default">choose categoty</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion </option>
            <option value="home">Home</option>
            <option value="cars">Cars</option>
            <option value="games">Games</option>
            <option value="instruments">Musical Instruments</option>
            <option value="toys">Toys</option>
            <option value="sports">Sports</option>
            <option value="property">Property</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="itemDescription">Item description</label>
          <textarea name="itemDescription" id="itemDescription"></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="availability">Availability</label>
          <select name="availability" id="availability">
            <option value="single">List as single</option>
            <option value="inStock">List as in stock</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="default">All of South Africa</option>
            <option value="default">Gauteng</option>
            <option value="default">Western Cape</option>
            <option value="default">Eastern Cape</option>
            <option value="default">Kwa Zulu Natal</option>
            <option value="default">Free State</option>
            <option value="default">Mpumalanga</option>
            <option value="default">Limpopo</option>
            <option value="default">North West</option>
            <option value="default">Northern Cape</option>
          </select>
        </div>
        <button className="add__button" type="submit">
          Create new item
        </button>
      </form>
    </div>
  );
}

export default NewListing;

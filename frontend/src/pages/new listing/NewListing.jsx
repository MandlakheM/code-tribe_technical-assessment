import React, { useState, useEffect } from "react";
import "./newListing.css";
import { FaFileUpload } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebaseConfig";
import { createitem } from "../../api/index"; 

function NewListing() {
  const [file, setFile] = useState(null);
  const [per, setPerc] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [category, setCategory] = useState("default");
  const [itemDescription, setItemDescription] = useState("");
  const [availability, setAvailability] = useState("single");
  const [location, setLocation] = useState("default");

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
        },
        (error) => {
          console.log("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL); 
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please wait for the image to finish uploading.");
      return;
    }

    const newItem = {
      itemName,
      itemPrice,
      category,
      itemDescription,
      availability,
      location,
      image: imageUrl,
    };

    try {
      const response = await createitem(newItem);
      console.log("Item created successfully:", response.data);
      alert("Item created successfully!");
      setItemName("");
      setItemPrice("");
      setCategory("default");
      setItemDescription("");
      setAvailability("single");
      setLocation("default");
      setFile(null);
      setImageUrl("");
    } catch (error) {
      console.error("Failed to create item:", error);
      alert("Failed to create item");
    }
  };

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
          alt="Item preview"
        />
      </div>
      <form onSubmit={handleSubmit}>
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
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
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
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="default">choose category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
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
          <textarea
            name="itemDescription"
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="availability">Availability</label>
          <select
            name="availability"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="single">List as single</option>
            <option value="inStock">List as in stock</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="default">All of South Africa</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Western Cape">Western Cape</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Kwa Zulu Natal">Kwa Zulu Natal</option>
            <option value="Free State">Free State</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="Limpopo">Limpopo</option>
            <option value="North West">North West</option>
            <option value="Northern Cape">Northern Cape</option>
          </select>
        </div>
        <button className="add__button" type="submit" disabled={per !== null && per < 100}>
          {per && per < 100 ? `Uploading... ${Math.round(per)}%` : "Create new item"}
        </button>
      </form>
    </div>
  );
}

export default NewListing;

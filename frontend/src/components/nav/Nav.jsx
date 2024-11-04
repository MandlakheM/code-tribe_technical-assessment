import React from "react";
import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Nav() {
  return (
    <header className="header__container gutter">
      <div className="logo">
        <h1>sell a lot</h1>
      </div>
      <div className="search">
        <div class="dropdown">
          <button class="dropbtn">
            Category <RiArrowDropDownLine />
          </button>
          <div class="dropdown-content">
            <div class="header">
              <h2>Shop by category</h2>
            </div>
            <div class="row">
              <div class="column">
                <h3>Electronics</h3>
              </div>
              <div class="column">
                <h3>Fashion</h3>
              </div>
              <div class="column">
                <h3>Home</h3>
              </div>
              <div class="column">
                <h3>Cars</h3>
              </div>
              <div class="column">
                <h3>Games</h3>
              </div>
              <div class="column">
                <h3>Musical Instruments</h3>
              </div>
              <div class="column">
                <h3>Toys</h3>
              </div>
              <div class="column">
                <h3>Sports</h3>
              </div>
              <div class="column">
                <h3>Property</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="search__name">
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div className="search__location">
          <select name="" id="">
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
        <div>
          <button>search</button>
        </div>
      </div>
      <div className="auth">
        <button>log in</button>
        <button>sign in</button>
      </div>
    </header>
  );
}

export default Nav;

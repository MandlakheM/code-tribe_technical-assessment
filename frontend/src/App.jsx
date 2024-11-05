import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import IitemCard from "./components/itemCard/IitemCard";
import CategoryHeader from "./components/categoryHeader/CategoryHeader";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListedItems from "./pages/ListedItems";
import NewListing from "./pages/new listing/NewListing";
import YourListings from "./pages/your listings/YourListings";

function App() {
  return (
    <>
      <Nav />
      <CategoryHeader />
      <Routes>
        <Route path="/" element={<ListedItems />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/new-listing" element={<NewListing />} />
        <Route path="/my-listing" element={<YourListings />} />

      </Routes>
      {/* <ListedItems /> */}
      {/* <ItemDetails/> */}
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import IitemCard from "./components/itemCard/IitemCard";
import CategoryHeader from "./components/categoryHeader/CategoryHeader";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ListedItems from "./pages/ListedItems";

function App() {
  return (
    <>
      <Nav />
      <CategoryHeader />
      <Routes>
        <Route path="/" element={<ListedItems />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
      {/* <ListedItems /> */}
      {/* <ItemDetails/> */}
    </>
  );
}

export default App;

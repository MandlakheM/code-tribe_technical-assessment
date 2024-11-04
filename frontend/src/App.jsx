import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import IitemCard from "./components/itemCard/IitemCard";
import CategoryHeader from "./components/categoryHeader/CategoryHeader";

function App() {
  return (
    <>
      <Nav />
      <CategoryHeader />
      <IitemCard />
    </>
  );
}

export default App;

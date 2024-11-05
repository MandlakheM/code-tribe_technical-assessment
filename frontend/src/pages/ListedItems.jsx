import { useState, useEffect } from "react";
import "./listedItem.css";
import IitemCard from "../components/itemCard/IitemCard";
import { fetchItems } from "../api"; 

function ListedItems() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetchItems(); 
        setItems(response.data); 
        setLoading(false); 
      } catch (err) {
        setError("Failed to fetch items");
        setLoading(false);
      }
    };

    getItems(); 
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="items__list">
      {items.map((item) => (
        <IitemCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ListedItems;

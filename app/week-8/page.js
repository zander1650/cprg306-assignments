"use client";

import { useState, useEffect } from "react";


import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function ShoppingListPage() {
 

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Wait for auth state to load



 

  
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(itemName) {
    if (!itemName) return;

    const cleaned = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .split(",")[0]
      .trim()
      .toLowerCase();

    setSelectedItemName(cleaned);
  }

  return (
    <main className="flex flex-col md:flex-row gap-6 p-4">
      <div className="flex-1 space-y-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1 text-black">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

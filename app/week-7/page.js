"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black p-6">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Shopping List
        </h1>

        {/* Add Item Form */}
        <NewItem onAddItem={handleAddItem} />

        {/* Item List  shifted right to fit page better */}
        <div className="mt-6 w-full pl-24">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}

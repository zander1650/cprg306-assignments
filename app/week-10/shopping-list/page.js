"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

import { getItems, addItem, deleteItem } from "../_services/shopping-list-services";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) {
      setItems([]);
      return;
    }
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (e) {
      console.error("Error loading items: ", e);
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  // Add item
  const handleAddItem = async (newItem) => {
    if (!user) return;

    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id, ...newItem }]);
    } catch (e) {
      console.error("Error adding items:", e);
    }
  };

  // Delete item
  const onDeleteItem = async (itemId) => {
    await deleteItem(user.uid, itemId);
    await loadItems();
  };

  // Clean item name for meal ideas
  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();

    setSelectedItemName(cleanedName);
  };

  // If user not logged in
  if (!user) {
    return <p className="text-center text-lg text-gray-700">You are not logged in.</p>;
  }

  return (
    <main className="flex flex-col md:flex-row gap-6 p-4">
      {/* LEFT COLUMN */}
      <div className="flex-1 space-y-4">
        <NewItem onAddItem={handleAddItem} />

        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          onDeleteItem={onDeleteItem}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 text-black">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

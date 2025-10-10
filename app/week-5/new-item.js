"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { 
        name: name, 
        category: category, 
        quantity: quantity
    };
    console.log(newItem); 
    alert(
      "Item added!" + "\n" +
      "Name:" + newItem.name + "\n" +
      "Category:" + newItem.category + "\n" +
      "Quantity" + newItem.quantity
    );
    setName("");
    setCategory("produce");
    setQuantity(1);
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-black bg-white rounded w-96 p-4">
            <input 
              type="text" 
              placeholder="Item Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="border border-gray-500 rounded p-2 w-full text-2xl"
            />
            <div className="flex space-x-20">
                <div className="flex space-x-5">
                    <div className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-lg text-2xl font-semibold text-black">
                        {quantity}
                    </div>
                    <button
                        onClick={decrement}
                        type="button"
                        disabled={quantity === 1}
                        className="w-14 h-14 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        -
                    </button>

                    <button
                        onClick={increment}
                        type="button"
                        disabled={quantity === 20}
                        className="w-14 h-14 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        +
                    </button>
                </div>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)} 
                  className="border border-gray-500 text-black rounded w-full"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Foods</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <button 
                type="submit"
                className="w-full h-14 bg-blue-500 text-white rounded"
            >
                Add Item
            </button>
      </form>
    </div>
  );
}

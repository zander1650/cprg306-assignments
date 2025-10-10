
"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

function increment() {
  if (quantity < 20) {
    const newQuantity = quantity + 1; 
    setQuantity(newQuantity);        
  }
}

function decrement() {
  if (quantity > 1) {
    const newQuantity = quantity - 1; 
    setQuantity(newQuantity);        
  }
}

  return (
    <div className="p-6 max-w-xs mx-auto text-center">
      <h2 className="mb-4 text-xl font-medium"></h2>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-3 py-1 rounded bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          -
        </button>

        <div className="min-w-[2rem] text-lg">{quantity}</div>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-1 rounded bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

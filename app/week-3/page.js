"use client";

import ItemList from "./item-list";   

export default function Week3Page() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1> 
      <ItemList /> 
    </main>
  );
}

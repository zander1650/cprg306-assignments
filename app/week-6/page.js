import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-center min-h-screen bg-black pl-24">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

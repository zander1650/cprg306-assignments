import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <h1 className="text-3xl font-bold text-white m-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

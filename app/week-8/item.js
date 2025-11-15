export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer"
    >
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">
        {quantity} — {category}
      </div>
    </li>
  );
}
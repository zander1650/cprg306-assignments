function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-white rounded-lg shadow">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-700">Qty: {quantity}</div>
      <div className="text-sm text-gray-500 italic">{category}</div>
    </li>
  );
}

export default Item;

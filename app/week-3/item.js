function Item({ name, quantity, category }) {
  return (
    <li className="items-center mb-2 p-3 bg-white rounded-lg shadow">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-700">  Qty: {quantity} in {category}</div>
    </li>
  );
}

export default Item;

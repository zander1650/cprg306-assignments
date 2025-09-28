
function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-white rounded-lg shadow">
      <li className="font-semibold">{name} <br></br> Buy {quantity} in {category}   </li>
     
    </li>
  );
}

export default Item; 

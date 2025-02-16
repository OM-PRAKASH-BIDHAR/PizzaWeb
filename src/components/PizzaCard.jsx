import { useCart } from "../context/CartContext";

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart(); // Access cart functions

  return (
    <div className="w-116 h-86 bg-amber-500 shadow-lg rounded-xl overflow-hidden p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-36 object-cover rounded-md"
      />
      <div className="mt-3 flex flex-col items-center flex-grow text-center">
        <h2 className="text-lg font-semibold text-white">{pizza.name}</h2>
        <p className="text-sm text-black font-medium">{pizza.description}</p>
        <p className="text-lg font-bold text-yellow-300 mt-1">${pizza.price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(pizza)}
        className="mt-2 w-full py-2 bg-red-800 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;

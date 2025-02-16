import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const navigate = useNavigate();

  const handleBrowseMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/pizza.png')] bg-cover bg-center p-6">
    
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0.8"></div>

      <div className="relative z-10 w-full max-w-lg bg-red-700 bg-opacity-95 p-6 rounded-2xl shadow-2xl border border-yellow-500">
     
        <div className="flex justify-center items-center gap-3 mb-6 text-white text-3xl font-bold drop-shadow-md">
          <FaPizzaSlice className="text-yellow-500" />
          <h1>Your Pizza Cravings</h1>
        </div>

  
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-white">
              Oops! Your cart is empty. Time to add some cheesy goodness! 🍕🔥
            </p>
            <button
              onClick={handleBrowseMenu}
              className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-400 transition-all cursor-pointer"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div>
            {cart.map((pizza) => (
              <div
                key={pizza.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4"
              >
           
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-16 h-16 rounded-md shadow-md"
                />

           
                <div className="flex flex-col flex-1 ml-4">
                  <p className="text-lg font-semibold text-white">
                    {pizza.name}
                  </p>
                  <p className="text-white font-bold">
                    ${pizza.price.toFixed(2)}
                  </p>
                </div>

                {/* 🔢 Quantity Controls & Remove Icon */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(pizza.id)}
                    className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-lg font-semibold text-white">
                    {pizza.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(pizza.id)}
                    className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                  >
                    <IoMdAdd />
                  </button>

                  <button
                    onClick={() => removeFromCart(pizza.id)}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}

       
            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-4 px-6 py-3 bg-red-400 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-red-500 transition-all cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { useCart } from "../context/CartContext";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some pizzas first.");
      return;
    }

    const totalPrice = getTotalPrice()?.toFixed(2) || "0.00"; 
    clearCart();
    navigate("/confirm-order", { state: { totalPrice } }); 

  return (
    <div className="relative h-screen w-full">
      {/* Background Wrapper with Blur */}
      <div className="absolute inset-0 bg-[url('/pizza.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 gap-5">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Your Delicious Order 🍕
        </h1>

        {cart.length > 0 ? (
          <div className="w-full max-w-md bg-red-700 bg-opacity-90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Order Summary
            </h2>
            {cart.map((pizza) => (
              <div
                key={pizza.id}
                className="flex justify-between items-center py-2 border-b border-gray-300"
              >
                <p className="text-lg font-medium text-white">
                  {pizza.name} (X{pizza.quantity})
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(pizza.id)}
                    className="w-9 h-9 flex items-center justify-center bg-yellow-300 rounded-full hover:bg-yellow-500 transition"
                  >
                    <FaMinus className="text-lg" />
                  </button>
                  <button
                    onClick={() => increaseQuantity(pizza.id)}
                    className="w-9 h-9 flex items-center justify-center bg-yellow-300 rounded-full hover:bg-yellow-500 transition"
                  >
                    <IoMdAdd className="text-lg" />
                  </button>
                  <button
                    onClick={() => removeFromCart(pizza.id)}
                    className="w-9 h-9 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 transition"
                  >
                    <MdDelete className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex text-white justify-between font-bold text-xl mt-4">
              <span>Total:</span>
              <span className="text-white">
                ${getTotalPrice()?.toFixed(2) || "0.00"}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-white text-lg font-medium">
            Your cart is empty. Add some delicious pizzas!
          </p>
        )}

        <button
          onClick={handleConfirmOrder}
          className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-600 transition cursor-pointer"
        >
          Confirm Order 🍽️
        </button>
      </div>
    </div>
  );
};

export default Checkout;

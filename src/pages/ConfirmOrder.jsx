import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const totalPrice = location.state?.totalPrice || "0.00"; 

  const [showGlow, setShowGlow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 relative">
      <div className="absolute inset-0 bg-[url('/pizza.png')] bg-cover bg-center opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-red-800 bg-opacity-90 p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border border-red-600"
      >
        {showGlow && (
          <div className="absolute inset-0 rounded-2xl border-4 border-red-500 animate-pulse"></div>
        )}

        <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Order Confirmed! 🎉</h1>
        <p className="text-lg mb-4">
          Thank you for ordering from LaPizzaria! 🍕
        </p>

        <div className="bg-red-400 p-4 rounded-lg shadow-md text-left border border-gray-700">
          <p className="text-lg font-bold text-red-900">
            Order Number: <span className="text-red-900">#123456</span>
          </p>
          <p className="text-lg text-red-900 font-bold">
            Estimated Delivery: <span className="font-bold">30-40 mins</span>
          </p>
          <p className="text-lg text-red-900 font-bold">
            Total: <span className="font-bold text-red-800">${totalPrice}</span>
          </p>
        </div>

        <div className="flex justify-around items-center gap-4 mt-6">
          <button
            onClick={() => navigate("/order-tracking")}
            className="flex items-center w-[170px] h-[48px] px-9 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-400 transition cursor-pointer"
          >
            Track Order
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center w-[170px] h-[48px] px-6 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-400 transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmOrder;

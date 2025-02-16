// OrderTracking.jsx
const OrderTracking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">
        Track Your Order
      </h1>
      <p className="text-lg  text-gray-200 text-center max-w-2xl">
        Enter your order number below to track your delicious pizza!
      </p>
      <input
        type="text"
        placeholder="Enter Order Number"
        className="mt-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button className="border border-white mt-4 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
        Track Order
      </button>
    </div>
  );
};

export default OrderTracking;

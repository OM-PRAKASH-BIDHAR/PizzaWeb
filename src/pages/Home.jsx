import { Link } from "react-router";
const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/landing.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6 gap-4">
        <h1 className="text-6xl font-bold mb-4 font-poppins ">
          Welcome to LaPizzaria
        </h1>
        <p className="text-2xl max-w-lg font-sans">
          <i>
            Enjoy the best handmade pizzas with fresh ingredients and delicious
            flavors.
          </i>
        </p>
        <Link
          to="/menu"
          className="flex items-center font-semibold mt-6 bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-full text-[22px] shadow-amber-50 cursor-pointer"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Home;

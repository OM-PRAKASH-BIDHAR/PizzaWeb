import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";
import { useCart } from "../context/CartContext"; // Import Cart Context

const Navbar = () => {
  const { cart } = useCart(); // Get cart items

  return (
    <nav className="bg-red-800 h-20 px-7 text-white shadow-md text-[18px] flex items-center ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="flex items-center gap-5 text-3xl font-bold">
          <CiPizza className="text-6xl text-amber-500" />
          LaPizzaria
        </h1>
        <ul className="flex justify-around items-center gap-8 font-semibold text-1.3xl cursor-pointer">
          <li>
            <Link
              to="/"
              className="hover:text-amber-100 hover:underline transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="hover:text-amber-100 hover:underline transition-all duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-amber-100 hover:underline transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-amber-100 hover:underline transition-all duration-300"
            >
              Contact
            </Link>
          </li>

          {/* Cart Icon with Badge */}
          <li className="relative flex items-center">
            <Link
              to="/cart"
              className="text-3xl text-amber-500 transition-transform duration-300 hover:scale-110 hover:text-amber-200 "
            >
              <FaCartPlus />
            </Link>

            {/* Badge showing cart item count */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

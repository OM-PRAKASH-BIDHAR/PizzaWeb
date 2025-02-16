import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-800 h-20 px-7 text-white shadow-md flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">LaPizzaria</h1>
          <p className="text-sm text-white">
            The best pizza in town, made with love!
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-around items-center gap-8 font-semibold text-[16px]">
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
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-5 text-2xl">
          <a
            href="#"
            className="hover:text-amber-100 transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-amber-100 transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-amber-100 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly md:flex-row items-start w-full min-h-screen bg-black bg-opacity-90 p-6 bg-opacity-90  bg-[url(/contact_bg.jpg)] bg-cover bg-center bg-no-repeat backdrop-blur-lg ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/contact-bg.png)]"
        style={{ filter: "blur(5px)", opacity: 0.9 }}
      ></div>

   
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full md:w-[450px] drop-shadow-2xl"
      >
        <h1 className="text-3xl text-black font-serif font-bold text-center mb-6">
          Get In Touch
        </h1>
        <form className="flex flex-col gap-4">
          <label className="text-white font-medium">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-red-400 w-full h-12 px-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
          />

          <label className="text-white font-medium">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-red-400 w-full h-12 px-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
          />

          <label className="text-white font-medium">Message:</label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="border border-red-400 w-full px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-500 transition-all cursor-pointer"
          >
            Send Message
          </motion.button>
        </form>

        <div className="flex justify-center gap-6 mt-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-black text-2xl"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-black text-2xl"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-black text-2xl"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-black text-2xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="ml-10 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg drop-shadow-2xl w-full md:w-[400px] text-black self-center"
      >
        <h2 className="text-[25px] text-black font-bold mb-4">
          Contact Information
        </h2>
        <p className="flex items-center gap-2 mb-2 text-[20px]">
          <FaMapMarkerAlt className="text-red-500 " /> 123 Pizza Street, Food
          Town, USA
        </p>
        <p className="flex items-center gap-2 mb-2 text-[20px]">
          <FaPhone className="text-red-500" /> +1 234 567 890
        </p>
        <p className="flex items-center gap-2 mb-4 text-[20px]">
          <FaEnvelope className="text-red-500" /> contact@pizzapalace.com
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[25px]">Opening Hours</h2>
        <p className="flex items-center gap-2 text-[20px]">
          <FaClock className="text-red-500" /> Mon-Sun: 10 AM - 11 PM
        </p>
      </motion.div>
    </div>
  );
};
export default Contact;

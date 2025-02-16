import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('/pizza-bg.jpg')] bg-fixed bg-cover bg-center opacity-20"></div>

      {/* Container for Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-16">
        {/* Flexbox Layout for Image & Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg"
          >
            <ImageSlider />
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-6">
              Our Story 🍕
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Welcome to{" "}
              <span className="text-red-500 font-semibold">
                <b>LaPizzaria</b>
              </span>
              ! What started as a small family passion has grown into a place
              where people come together to enjoy authentic, handcrafted pizzas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our secret? Fresh ingredients, traditional techniques, and a whole
              lot of love. Every slice is made with dedication, bringing a taste
              of Italy to your table.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're here for a classic Margherita or an adventurous new
              flavor, we welcome you to{" "}
              <b>
                <i>taste the difference.</i>
              </b>
            </p>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <div className="w-40 h-1 bg-red-600 mx-auto my-10 rounded-full"></div>

        {/* Key Milestones Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-yellow-400 text-center">
            A Journey of Flavors 🍕🔥
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-red-700 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold text-red-300">1995</h4>
              <p className="text-gray-300 mt-2">
                LaPizzaria was born in a small family kitchen 🍽️
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-red-700 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold text-red-300">2010</h4>
              <p className="text-gray-300 mt-2">
                We opened our first restaurant! 🎉
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-red-700 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold text-red-300">2024</h4>
              <p className="text-gray-300 mt-2">
                Now serving thousands of pizza lovers worldwide! 🌍
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

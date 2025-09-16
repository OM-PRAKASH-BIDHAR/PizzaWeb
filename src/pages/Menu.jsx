import PizzaCard from "../components/PizzaCard";


const pizzaList = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with extra cheese.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh basil, mozzarella, and tomato sauce.",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // valid image URL
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce with grilled chicken.",
    price: 13.99,
    image:
      "https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // valid image URL
  },
  {
    id: 4,
    name: "Paneer Pizza",
    description:
      "Delicious paneer cubes, bell peppers, and onions on a flavorful base.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Mushroom Delight",
    description:
      "A rich and savory pizza topped with fresh mushrooms and mozzarella cheese .",
    price: 14.99,
    image:
      "https://plus.unsplash.com/premium_photo-1663858366999-aa1ce123a972?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 6,
    name: "Vegetarian Pizza",
    description:
      "A mix of fresh vegetables like bell peppers, onions, and olives.",
    price: 10.49,
    image:
      "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // valid URL from Unsplash
  },

  {
    id: 7,
    name: "Hawaiian Pizza",
    description: "Ham and pinapple for a sweet and savory combo.",
    price: 11.99,
    image: "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg", // valid image URL
  },

  {
    id: 8,
    name: "7 in 1 Veg Pizza",
    description: "Loaded with 7 different veggies for a burst of flavors.",
    price: 20.99,
    image: "https://feenix.co.in/wp-content/uploads/2025/04/0846673d-1d5d-4c2a-ba2e-1570aa0fdb62_HomeProductV1BigBigPizzaVeg-430x430.webp",
  },

  {
    id: 9,
    name : "7 in 1 Non-Veg Pizza",
    description: "A meat lover's dream with 7 types of delicious meats.",
    price: 22.99,
    image: "https://feenix.co.in/wp-content/uploads/2025/03/875ced16-9c5b-4c88-b6a7-d101d1d76ce8_HomeProductBigBigPizzaNonVeg.webp",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-red-700 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-6 font-serif">
        <strong>
          <i>Our Menu</i>
        </strong>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pizzaList.map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

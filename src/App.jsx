import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"; // ✅ Ensure this is correctly imported
import Footer from "./components/Footer";
import ConfirmOrder from "./pages/ConfirmOrder";

function App() {
  return (
    <CartProvider className="width-[1400px]">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar /> {/* ✅ Navbar should be here */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirm-order" element={<ConfirmOrder />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

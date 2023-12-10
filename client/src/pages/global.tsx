import "../assets/css/style.css";
import { Route, Routes } from "react-router";
import Navbar from "../components/navbar";
import Home from "./home";
import Error from "./error";
import Shop from "./shop";
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";
import FAQ from "./faq";
import Cart from "./cart";
import Footer from "../components/footer";
import Checkout from "./checkout";
import Product from "./product";
const Global = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Global;

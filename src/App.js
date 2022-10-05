import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import Products from "./Products";
import SingleProducts from "./SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/singleproducts/:id" element={<SingleProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

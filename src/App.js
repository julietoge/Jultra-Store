import React from "react";
import { Route, Routes } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import Product from "./Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FeaturedProducts />} />
      <Route exact path="/products/:id" element={<Product />} />
    </Routes>
    // https://betterprogramming.pub/setting-up-dynamic-routing-in-react-23ca07d59057
  );
};

export default App;

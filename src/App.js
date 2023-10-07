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
     );
};

export default App;

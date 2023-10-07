import axios from "axios";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products?limit=12")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Jultra Store</h1>
      <div className="item-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <Link to={`/products/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

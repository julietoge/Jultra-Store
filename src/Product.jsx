import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Product.css'

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData([res.data]);
        console.log([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching user data:", err);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="Loading" >
        <h1>Loading...</h1></div>;
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="product-container" key={item.id}>
            <div>
              <img className="prod-image" src={item.image} alt="" />
            </div>
            <div>
              <h1 className="title">{item.title}</h1>
              <h2>{item.category}</h2>
              <p>{item.description}</p>
              <p>
                <strong>Price:</strong> &#36;{item.price}
              </p>
              <p>
                <strong>Rate:</strong> 
                {item.rating.rate}
              </p>
              <p>
                <strong>Count:</strong> 
                {item.rating.count}
              </p>
            </div>
          </div>
        );
      })}
      <div className='back'>
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  );
};

export default Product;

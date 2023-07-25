
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/style.css'
export default function () {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchProducts();
    }, []);
    const fetchProducts = () => {
      axios
        .get('https://fakestoreapi.com/products')
        .then((res) => {
          console.log(res);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div>
    <h1>Featured Products</h1>
    <div className='item-container'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='' />
         <h6>{product.category}</h6>
          price:<p>{product.price}</p>
        </div>
    
      ))}
    </div>
  </div>
  )
}

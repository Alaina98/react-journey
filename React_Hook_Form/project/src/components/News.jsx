
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
        .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4eaa0c0e25894dbebaa813ed9b5aff9c')
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
    <h1>News</h1>
    <div className='item-container'>
      {products.map((product) => (
        <div className='card' >
          {/* <img src={product.image} alt='' /> */}
         <h6>{product.status}</h6>
         
        </div>
    
      ))}
    </div>
  </div>
  )
}

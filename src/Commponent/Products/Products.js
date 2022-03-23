import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    const {name, img, seller, price, ratings} = props.product
 
    // add cart button
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='prodcut-name'>{name}</p>
            <p className='product-price'>Price: {price}</p>
            <p className='product-seller'><small>Manufacturer: {seller}</small></p>
            <p className='product-ratings'><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='product-btn'>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Products;
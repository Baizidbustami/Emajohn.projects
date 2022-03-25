import React, { useEffect, useState } from 'react';
import { addToDb, getDisplay } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart]=useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () => {
       const storedCart= getDisplay()
       const sevedCart = [];
       for(const id in storedCart){
           const addedProduct = products.find(product=>product.id===id)
        //    console.log(addedProduct)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity=quantity;
            sevedCart.push(addedProduct);
        }
       }
       setCart(sevedCart)
    },[products])

    const handleAddToCart =(selectedProduct) =>{ 
        // console.log(selectedProduct);
        let newCart =[];
        const exists = cart.find(product => product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart=[...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id)

    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
            products.map(product => <Products key={product.id} product={product} handleAddToCart={handleAddToCart}></Products>)
                }
            </div> 
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;
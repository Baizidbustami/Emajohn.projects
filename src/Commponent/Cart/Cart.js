import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { 
    let total =0;
    let shipping =0;
    let quantity =0;
    for (const product of cart){
        quantity = quantity+product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    
    }
    const tex = total*10/100; 
    const greand = total +shipping+tex
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Text: {tex}</p>
            <p>Grand Total: ${greand}</p>
        </div>
    );
};

export default Cart;
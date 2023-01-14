import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal.js'
function Checkout() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left' >
                <img
                    className='checkout__ad'
                    src='https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png' alt="" />
                <div>
                    <h2 className='checkout___title'>Your shopping Basket</h2>
                    {/* BasketItem  */}

{basket.map(item => (
    <CheckoutProduct 
id = {item.id}
title={item.title}
    image={item.image}
                price={item.price}
                rating={item.rating}
/>
))}




                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
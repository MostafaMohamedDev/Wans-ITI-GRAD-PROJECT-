import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
const CartItem = ({data}) => {

    const {addToCart,removeFromCart,cartItems,updateCartItem,} = useContext(ShopContext)

    const {id,name,price,image} = data;

  return (
    <div>
            <div>
                <img src={image} alt='proImg'/>
            </div>
            <p>{name}</p>
            <p>{price}</p>
            <div>
                <button onClick={()=>addToCart(id)}> + </button>
                <input type="number" value={cartItems[id]} onChange={(e)=>updateCartItem(+e.target.value,id)} />
                <button onClick={()=>removeFromCart(id)}> - </button>
            </div>
            
        </div>
  )
}

export default CartItem
import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


const Product = ({data}) => {

    //Fake Data From  API 

    const {id,name,price,image} = data

    // console.log(id);
    
    // Cart items 
    const {addToCart,cartItems} = useContext(ShopContext)

    const cartItemCount = cartItems[id];

  return (
    <div>
        {/* <h1>{data.id}</h1> */}
        <div>
            <div>
                <img src={image} alt='proImg' width={500}/>
            </div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>addToCart(id)}>Add To Cart 
            {cartItemCount > 0 && <span> ( {cartItemCount} ) </span>}</button>
        </div>
    </div>
  )
}

export default Product
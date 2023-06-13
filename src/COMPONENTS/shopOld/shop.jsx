import React from 'react'
// import { PRODUCTS } from '../../products'
import Product from './product'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const Shop = () => {

  const {productItems} = useContext(ShopContext)
  // console.log(PRODUCTS);
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Pets Shop</h1>
        </div>
        <div className='product'>
            {productItems.map((product)=>(
                <Product key={product.id} data={{...product}}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
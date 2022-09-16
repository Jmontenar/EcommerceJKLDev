import React from 'react'
import './ProductPurchase.css'

const ProductPurchase = ({product}) => {
console.log(product)
  return (
    <li className='card_purchase__item'>
        <h4 className='card_purchase__name'>{product.title}</h4>
        <span className="card_purchase__quntity">{product.productsInCart.quantity}</span>
        <span className="card_purchase__price">{product.price}</span>
    </li>
  )
}

export default ProductPurchase
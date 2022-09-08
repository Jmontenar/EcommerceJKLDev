import React from 'react'

const ProductPurchase = ({product}) => {

  return (
    <li className='card_purchase__item'>
        <h4 className>{product.title}</h4>
    </li>
  )
}

export default ProductPurchase
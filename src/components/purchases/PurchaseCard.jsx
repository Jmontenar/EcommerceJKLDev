import React from 'react'
import ProductPurchase from './ProductPurchase'

export const PurchaseCard = ({purchase}) => {
    console.log(purchase)
  return (
    <article className="card_purchase">
        <h3 className="card_purchase_date">{purchase.createdAt}</h3>
        <ul className="card_purchase_body">
            {
                purchase.cart.products.map(product => (
                  <ProductPurchase 
                  key={product.id}
                  product={product}
                  />  
                ))
            }
        </ul>

    </article>
  )
}

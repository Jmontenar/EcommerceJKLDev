import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './ProductCartInfo.css'



const ProductCartInfo = ({product, getAllProductsCard}) => {
  const handdleDeleteProduct = () =>{
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCard())
      .catch(err=>console.log(err))
  }
  return (
    <article className="cart__item">
        <header className="cart__item-header">
        <h4 className="cart__category">{product.brand}</h4>
        <h3 className="cart__name">{product.tittle}</h3>
        </header>
        <div onClick={handdleDeleteProduct} className="cart__trash"><i className="fa-regular fa-trash-can"></i></div>
        <div>
            <span className="cart__total-label">Total:  </span>
        <span className="cart__quantity">{product.productsInCart.quantity}</span>
            <p className="cart__total-number">{product.price}</p>
        </div>
    </article>
  )
}

export default ProductCartInfo
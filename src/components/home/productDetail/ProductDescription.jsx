import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import getConfig from '../../../utils/getConfig'
import './ProductDescription.css'

const ProductDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)
    const handlePlus = () => setCounter(counter +1)
    const handleMinus = () => {
        if (counter -1>=1){
            setCounter(counter -1)
        }
    }

const handleAddCart = () =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
            id: productInfo.id,
            quantity: counter
    }
    axios.post(URL, obj, getConfig())
    .then(res =>console.log(res.data))
    .catch(err =>console.log(err))
}

  return (
        <section className="product-info">
        <div className="product_home">
            <NavLink className="product__info_link"  to="/">
            <ul><li>Home</li></ul>
            </NavLink>
        <h2 className="product-info-name">{productInfo?.title}</h2>
        </div>
        <div className="product_img_description">
        <article className="product-info-img"><img src={productInfo?.productImgs[0]} alt='' /> </article>        
        <p className="product-info-description">{productInfo?.description}</p>
        </div>
        <div className="product-info-body">
            <article className="product-info-price">
                <h3 className="product-info-price-label">Price</h3>
                <span className="product-info-price_value">{productInfo?.price}</span>
            </article>
            <article className="product-info_quantity">
                <h3 className="product-info_quantity_label">Quantity</h3>
                <div className="product-info__quantity-product">
                    <button className="product-info_btn" onClick={handleMinus}>-</button>
                    <div>{counter}</div>
                    <button className="product-info_btn" onClick={handlePlus}>+</button>
                </div>
            </article>
                <button onClick={handleAddCart} className="product-info_add">Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
        </div>
    </section>
  )
}

export default ProductDescription
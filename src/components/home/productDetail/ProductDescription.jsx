import axios from 'axios'
import React, { useState } from 'react'
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

const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react-.herokuapp.com/api/v1/cart'
    const obj = {
        id: productInfo.id,
        quantity: counter
    }
    axios.post(URL, obj, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

  return (
    <div className="description__container">
    <section className="product-info">
        <h2 className="product-info-name">{productInfo?.title}</h2>
        <article className="product-info-img"><img src={productInfo?.productImgs[0]} alt='' /> </article>
        <p className="product-info-description">{productInfo?.description}</p>
        <div className="product-info-body">
            <article className="product-info-price">
                <h3 className="product-info-price-label">Price</h3>
                <span className="product-info-price_value">{productInfo?.price}</span>
            </article>
            <article className="product-info_quantity">
                <h3 className="product-info_quantity_label">Quantity</h3>
                <div className="product-info_quantity_">
                    <button onClick={handleMinus}>-</button>
                    <div>{counter}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
            </article>
                <div onClick={handleAddCart} className="product-info_add"><h4>Add to cart</h4><i className="fa-solid fa-cart-shopping"></i></div>
        </div>
    </section>
    </div>
  )
}

export default ProductDescription
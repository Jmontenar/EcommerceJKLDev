import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import './Cart.css'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const getAllProductsCard =()=>{
        const URl = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URl, getConfig())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts()) 
    }
    useEffect(() => {
        getAllProductsCard()
    }, [])


    const handdleCheckout = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Atlantico",
            colony: "Soledad",
            zipCode: 12345,
            city: "Colombia",
            references: "Some references"
        }
        axios.post(URL, obj, getConfig())
        .then(res => {
            console.log(res.data)
            getAllProductsCard()   
        })
        .catch(err => console.log(err))
    }

  return (
    <article className="cart">
        <h2 className="cart__title">Cart</h2>
        {
            cartProducts?.map(product => (
            <ProductCartInfo
                key={product.id}
                product={product}
                getAllProductsCard={getAllProductsCard}
            />    
            ))
            }
        <hr className='hr'/>
        <footer  className='footer'>
            <span className="cart__total-globall-label">Total:</span>
            <p className="cart__total-globall-label-value">1350</p>
            <button onClick={handdleCheckout} className="cart__btn">Checkout</button>
        </footer>
    </article>
  )
}

export default Cart
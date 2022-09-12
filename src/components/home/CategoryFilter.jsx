import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../store/slices/product.slice'

const CategoryFilter = () => {

    const [categories, setCategories] = useState()
    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
        .then(res =>setCategories(res.data.data.categories))
        .catch(err=>console.log(err))
    }, [])
    console.log(categories)

    const dispatch = useDispatch()

    const handleClickCategory = id => {
        dispatch(getProductsByCategory(id))
    }
    
    const products = useSelector(state => state.products)
    console.log(products)

  return (
    <div>
        <h2>Category</h2>
        <ul>
        <li>All Products</li>
        {
            categories?.map(category => (
                <li onClick={() =>{handleClickCategory(category.id)}} key={category.id}>{category.name}</li>
            ))
        }
        </ul>
       
    </div>
  )
}

export default CategoryFilter
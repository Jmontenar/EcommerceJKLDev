import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/product.slice'
import './CategoryFilter.css'

const CategoryFilter = () => {

    const [categories, setCategories] = useState()
    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
        .then(res =>setCategories(res.data.data.categories))
        .catch(err=>console.log(err))
    }, [])
    
    const dispatch = useDispatch()
    const handleClickCategory = id => {
        dispatch(getProductsByCategory(id))
    }
    const handleClickAllproducts = () =>{
        dispatch(getAllProducts())
    }


  return (
    <div className='filter__container'>
        <h2 className='filter__title'>Category</h2>
        <br></br>
        <ul className='filter__list__items'>
        <li onClick={handleClickAllproducts}>All Products</li>
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
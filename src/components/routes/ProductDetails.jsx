import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../home/productDetail/ProductDescription'
import SimilarProducts from '../home/productDetail/SimilarProducts'
import LoadingProductDetails from './LoadingProductDetails'


const ProductDetails = () => {
  
  const  { id } = useParams()
  const [productInfo, setProductInfo] = useState()

  

useEffect(() => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  axios.get(URL)
  .then(res => setProductInfo(res.data.data.product))
  .catch(err =>console.log(err))
}, [])
const [isLoadingP, setisLoadingP] = useState(true)
  useEffect(() => {
    setisLoadingP(false)
    }, [])

if(isLoadingP){
  return <LoadingProductDetails />
  }else{
  return (
    <div><ProductDescription productInfo={productInfo} />
        <SimilarProducts
        productInfo={productInfo}
        />
    </div>
  )
}
}
export default ProductDetails
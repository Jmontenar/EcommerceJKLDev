import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../CardHome'
import './similarProducts.css'

const SimilarProducts = ({productInfo}) => {
    const [filterProducts,setFilterProducts] = useState()

    const products = useSelector(state=>state.products)

    useEffect(() => {
      if(productInfo){
        const filter = products.filter(e =>e.category.name === productInfo.category)
        setFilterProducts(filter)
      }
    }, [productInfo])  

  return (
    <div className="container_similar_products">
      <h3>Discover Similar Products</h3>
        {
            filterProducts?.map(product =>{
                if(product.title !== productInfo.title){
                    return <CardHome 
                    key={product.id}
                    product={product}
                    />
                }
            })
        }
        
    </div>
  )
}

export default SimilarProducts
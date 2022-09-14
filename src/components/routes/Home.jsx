import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import FilterPrice from '../home/FilterPrice'
import InputSearch from '../home/InputSearch'
import './Home.css'
import Loading from './Loading'

const Home = () => {
  const [inputSearch, setInputSearch] =useState('')
  const [filterProducts, setFilterProducts] = useState()
  const products = useSelector(state => state.products)
  const [filterPrice, setFilterPrice] = useState('')
//Filtro por categoria
  useEffect(() => {
    if(inputSearch.length !== 0){
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
      setFilterProducts(filter)    
    }else{
      setFilterProducts('')
    }
  }, [inputSearch])
//Filtro por precio
  useEffect(() => {
const filterprice = products?.filter(product => {
  const price = +(product.price)
  const minPrice = filterPrice.from
  const maxPrice = filterPrice.to
  if (minPrice && maxPrice){
    return  minPrice <= price && price <= maxPrice
  }else if(minPrice && !maxPrice){
    return  minPrice <= price
  }else if(!minPrice && maxPrice){
    return price <= maxPrice
  }else{
    return true
  }
})
setFilterProducts(filterprice)
  }, [filterPrice.to && filterPrice.from])
  
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])

if(isLoading){
  return <Loading />
  }else{
    
  return (
    <div className='home'>
      <InputSearch setInputSearch={setInputSearch} />
      <CategoryFilter />
      <FilterPrice setFilterPrice={setFilterPrice} />
      <div className="home__container-card">
        {
          filterProducts ? 
            filterProducts?.map(product =>(
            <CardHome 
              key={product.id}
              product={product} />
              ))
              :
          products?.map(product =>(
            <CardHome 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}
}
export default Home
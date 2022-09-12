import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import CategoryFilter from '../home/CategoryFilter'
import InputSearch from '../home/InputSearch'
import './Home.css'
import Loading from './Loading'

const Home = () => {
  const [inputSearch, setInputSearch] =useState('')
  const [filterProducts, setFilterProducts] = useState()
  const products = useSelector(state => state.products)

  useEffect(() => {
    if(inputSearch.length !== 0){
      const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
      setFilterProducts(filter)
    }
    setFilterProducts('')
    
  }, [inputSearch])

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
      <div className="home__container-card">
        {
          filterProducts ? 
          filterProducts?.map(product =>(
            <CardHome 
              key={product.id}
              product={product} />))
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
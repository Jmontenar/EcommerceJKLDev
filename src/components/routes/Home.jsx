import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../store/slices/product.slice'
import {useDispatch, useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import './Home.css'
import Loading from './Loading'

const Home = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])
const products = useSelector(state =>state.products)
if(isLoading){
  return <Loading />
  }else{
    
  return (
    <div className='home'>
      <div className="home__container-card">
        {
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
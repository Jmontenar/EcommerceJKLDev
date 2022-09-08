import { useEffect, useState } from 'react'
import './App.css'
import './components/home/CardHome.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetails from './components/routes/ProductDetails'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import Cart from './components/shared/Cart'
import ProtectedRoute from './components/routes/ProtectedRoute'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/product.slice'
import Footer from './components/shared/Footer'

function App() {
const dispatch = useDispatch()
useEffect(() => {
dispatch(getAllProducts())
}, [])  
  return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
    </Routes>
    <Footer />
    </div>
  )
}

export default App

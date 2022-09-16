import React from 'react'
import './Loading.css'

const LoadingLogin = () => {
  return (
    <div className="container">
    <div className="cubo">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="loading">
      <div>
        <h1>Login is Loading</h1>
        <p>...</p>
      </div>
    </div>
  </div>
  )
}

export default LoadingLogin
import React from 'react'
import './Loading.css'

const Loading = () => {
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
        <h1>E-commerce is Loading</h1>
        <p>...</p>
      </div>
    </div>
  </div> 

  )
}

export default Loading
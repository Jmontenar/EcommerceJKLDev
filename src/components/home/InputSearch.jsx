import React from 'react'
import './InputSearch.css'




const InputSearch = ({setInputSearch}) => {
  const handleChange = e => {
    setInputSearch(e.target.value.trim())
  }

  return (
    <div className='input__container'>
      <input className='input' onChange={handleChange}  type="text" placeholder='Search' />
    </div>
  )
}

export default InputSearch
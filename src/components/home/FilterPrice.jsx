import React from 'react'
import './FilterPrice.css'

const FilterPrice = ({setFilterPrice}) => {
    const submit = e => {
        e.preventDefault()
        const obj = {
            from: +e.target.fromPrice.value,
            to: +e.target.toPrice.value
        }
        setFilterPrice(obj)
    }

  return (
    <form className='Filter__price__container' onSubmit={submit}>
        <h3>Price</h3>
        <br></br>
        <ul className='Filter__price__list' >
            <li>
                <label htmlFor='fromPrice'>From</label>
                <input className='Filter__price__input from' type='number' id='fromPrice' />
            </li>
            <li>
                <label htmlFor='toPrice'>To</label>
                <input className='Filter__price__input to' type="text" id='toPrice' />
            </li>
        </ul>
        <button className='Filter__price__button'>Filter Price</button>

    </form>
  )
}

export default FilterPrice
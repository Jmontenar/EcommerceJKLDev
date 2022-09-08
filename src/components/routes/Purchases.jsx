import axios from 'axios'
import React, {useEffect, useState} from 'react'
import getConfig from '../../utils/getConfig'
import { PurchaseCard } from '../purchases/PurchaseCard'

const Purchases = () => {
  const [purchases, setPurchases] = useState()
useEffect(() => {
const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

axios.get(URL, getConfig())
.then(res => setPurchases(res.data.data.purchases))
.catch(err => console.log(err))
}, [])



  return (
    <div className='purchase'>
      <h2 className="purchase_tittle">Purchases</h2>
      <div className="purchase_container">
      {
        purchases?.map(purchase =>
          <PurchaseCard 
            key={purchase.id}
            purchase={purchase}
          />)
      }
    </div>
    </div>
  )
}

export default Purchases
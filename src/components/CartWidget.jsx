import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <span>0</span>
    </div>
  )
}

export default CartWidget
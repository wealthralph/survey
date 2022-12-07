import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { handleToken } from "../utilities/slices/authSlice"
import { useDispatch } from 'react-redux'

const Payment = () => {
    const dispatch = useDispatch()

  return (
    <StripeCheckout
    name='Emaily'
    description='Payment for 5 Credit'
    amount={500}
    token= {token => dispatch(handleToken(token))}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  )
}

export default Payment
import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { shoppingBag, corrency, deliveryFee, getCartAmount } = useContext(ShopContext);
  
  
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title title1={'Total'} title2={'Value'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <h3>Subtotal</h3>
                <h3>{corrency} { getCartAmount() }</h3>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <h3>Shipping Fee</h3>
                <h3>{corrency} {deliveryFee}</h3>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{corrency} { getCartAmount() + deliveryFee}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
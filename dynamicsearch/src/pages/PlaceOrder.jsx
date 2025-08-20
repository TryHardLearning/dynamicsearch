import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cash');

  const { navigate } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Place for the left side content*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title title1={'Delivery '} title2={'Information'} />
        </div>
        <input type='text' placeholder='Name' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
        <input type='email' placeholder='Email address' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />

        <div className='flex items-center gap-3'>
          <input type='text' placeholder='Street' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
          <input type='text' placeholder='Number' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex items-center gap-3'>
          <input type='text' placeholder='City' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
          <input type='text' placeholder='State' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
        </div>
        <input type='text' placeholder='Zip Code' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
        <input type='text' placeholder='Phone' className='border border-gray-300 p-2 rounded-[8px] py-1.5 px-3.5 w-full' />
      </div>

      {/* Place for the right side content*/}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title title1={'Payment '} title2={'Method'} />
          {/* Payment method options */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-500' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4 ' alt='stripe icon' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-500' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4 ' alt='razorpay icon' />
            </div>
            <div onClick={() => setMethod('cash')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cash' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-600 text-sm font-medium mx-4'>Pay in the Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>

            <button className='active:bg-black active:text-orange-600 lg:text-sm my-8 px-8 py-3 sm:text-sm bg-white border-black border-1  text-black shadow-gray-900 shadow-[2px_4px_2px]'
            onClick={()=> navigate('/orders')}>
              
              Place Order
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder
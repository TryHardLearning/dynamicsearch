import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, corrency, shoppingBag, updateQuantity, navigate } = useContext(ShopContext);

  const [shoppingBagData, setShoppingBagData] = useState([]);

  const onChangeQuantityValue = (e, productId, size) => {
    if (e.target.value !== '') {
      updateQuantity(productId, size, parseInt(e.target.value));
    }
  }

  useEffect(() => {
    const tempShoppingBagData = [];
    for (const productId in shoppingBag) {
      for (const size in shoppingBag[productId]) {
        if (shoppingBag[productId][size] > 0) {
          tempShoppingBagData.push({
            _id: productId,
            size: size,
            quantity: shoppingBag[productId][size],
          });
        }
      }
    }
    console.log(tempShoppingBagData);
    setShoppingBagData(tempShoppingBagData);
  }, [shoppingBag])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title title1={'Your'} title2={'Shopping Bag'} />
      </div>
      <div className=''>
        {
          shoppingBagData.length > 0 ? (
            shoppingBagData.map((item, index) => {
              const producData = products.find(product => product._id === item._id)

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' >
                  <div className='flex items-start gap-6'>
                    <img src={producData.image[0]} className='w-16 sm:w-20' />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{producData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p className='px-2 sm:px-3 sm:py-1 rounded-[3px_2px] shadow-gray-300 shadow-[2px_4px]'>{corrency} {producData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 rounded-[3px_2px] shadow-gray-300 shadow-[2px_4px]'>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input type='number' onChange={(e) => onChangeQuantityValue(e, item._id, item.size)}
                    min={0} defaultValue={item.quantity}
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                  <img src={assets.bin_icon} onClick={() => updateQuantity(item._id, item.size, 0)} className='w-3 mt-4 sm:w-5 cursor-pointer' />
                </div>
              )

            })
          ) : (
            <p className='text-gray-500'>Your shopping bag is empty.</p>
          )
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end '>
            <button className='active:bg-black active:text-orange-600 lg:text-[1.1rem] my-8 px-8 py-3 sm:text-sm bg-white border-black border-1  text-black shadow-gray-900 shadow-[2px_4px_2px]'
              onClick={() => navigate('/place-order')} >
              Complete the Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
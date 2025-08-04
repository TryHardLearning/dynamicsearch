import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/*Left Side*/}
      <div className='w-full sm:w-1/2 xl:flex-col justify-center flex items-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
        </div>
        <h1 className='text-3x1 sm:py-3 lg:text-5x1 xl:text-xl leading-relaxed p-2'>Discover the Best of Our Collection</h1>
        <div className='flex items-center gap-2'>
          <p className='text-[#414141] font-medium text-sm md:text-base'>SHOP NOW</p>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
      </div>
      {/*Right Side*/}
      <img src={assets.hero_img} className='w-full sm:w-1/2 object-cover' alt='Hero' />
    </div>
  )
}

export default Hero
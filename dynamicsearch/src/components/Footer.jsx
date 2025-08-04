import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-medium'>
            <div>
                <img src={assets.logo} className='w-32 mb-5' alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Welcome to our online store, where you can find the latest trends and timeless classics. Explore our wide range of products and enjoy a seamless shopping experience.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    Quick Links
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+55 46 98830-1339</li>
                    <li>LucasCaladoOne@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
                <hr/>
                <p className='py-5 text-sm text-center'>
                    Copyright © 2025 Lucas Calado Bresolino. All rights reserved.
                </p>
            </div>
    </div>
  )
}

export default Footer
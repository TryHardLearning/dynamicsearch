import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>
            Subscribe to our Newsletter
        </p>
        <p className='text-gray-400 mt-3'>
            Stay updated with our latest news and offers. Subscribe to our newsletter and never miss an update!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>
                Subscribe
            </button>
                
        </form>
    </div>
  )
}

export default NewsLetterBox
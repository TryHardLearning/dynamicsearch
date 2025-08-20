import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sing Up');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-90 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex gap-2 items-center mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700' />
      </div>
      {currentState !== 'Sing Up' ? '' :
        <input type='text' placeholder='Name' className='w-full px-3 py-2 border rounded-[8px] border-gray-800 ' required />
      }
      {currentState !== 'Sing Up' ? '' :
        <input type='text' placeholder='CPF' className='w-full px-3 py-2 border rounded-[8px] border-gray-800 ' required />
      }
      <input type='email' placeholder='Email' className='w-full px-3 py-2 border rounded-[8px] border-gray-800 ' required />
      <input type='password' placeholder='Password' className='w-full px-3 py-2 border rounded-[8px] border-gray-800 ' required />
      <div className='w-full flex justify-between flex-col text-center text-sm mt-[8px]'>
        {currentState !== 'Login' ? '' :
          <p className='cursor-pointer'>Forgot your Password?</p>
        }
        {currentState === 'Login' ?
          <p className='cursor-pointer' onClick={() => setCurrentState('Sing Up')}>Create an Account</p>
          :
          <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Already have an Account?</p>
        }
      </div>
      <button className='active:bg-black active:text-blue-500 lg:text-[1rem] my-4 px-8 py-2 sm:text-sm bg-white border-black border-1  text-black shadow-gray-500 shadow-[2px_4px_2px]'>
        {currentState === 'Login' ? 'Sing In' : 'Sing Up'}
      </button>
    </form>
  )
}

export default Login
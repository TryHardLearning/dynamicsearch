import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title title1={'Contact'} title2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px] rounded-[8px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-700'>Our Startup</p>
          <p className='text-gray-600'>R. Lídio Oltramari, 1628 - Fraron</p>
          <p className='text-gray-600'>Pato Branco - PR</p>
          <p className='font-semibold text-lg text-gray-700'>Put Your Brand  On This E-commerce</p>
          <a href='https://wa.me/5546988301339' target="_blank" className='text-gray-600'>Call Us in WhatsApp: +55 (46) 98830-1339</a>
          <a href='https://wa.me/5546988301339' target="_blank" className='text-gray-600'>Click Here for Second WhatsApp Customer Service Line.</a>
          <a href='mailto:lucascaladoone@gmail.com' target="_blank" className='text-gray-600'>Email: LucasCaladoOne@gmail.com</a>
          <a href='https://www.linkedin.com/in/lucas-c-bresolino/' target="_blank" className='text-gray-600'><b className='me-2'>&#10084;</b>Developer Linkedin</a>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title title1={'About'} title2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-[8px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
          <b className='text-gray-800 text-lg'>Our Mission</b>
          <p>
            Nossa empresa nasceu com a missão de oferecer roupas e artigos de vestuário que combinam estilo, conforto e qualidade. Acreditamos que a moda é uma forma de expressão pessoal e trabalhamos para trazer peças que atendam às necessidades e desejos de nossos clientes. Cada item em nossa coleção é cuidadosamente selecionado para garantir que você tenha acesso às últimas tendências, sem abrir mão da durabilidade e do bem-estar.
          </p>
          <p>
            Valorizamos a diversidade e buscamos criar um espaço onde todos possam encontrar algo que os represente. Seja para ocasiões casuais, eventos especiais ou para o dia a dia, nossas roupas são projetadas para se adaptar ao seu estilo de vida. Além disso, estamos comprometidos com práticas sustentáveis, procurando minimizar nosso impacto ambiental e contribuir para um futuro mais consciente.
          </p>
          <p>
          Nosso objetivo é não apenas vestir você, mas também inspirar confiança e autenticidade em cada escolha que você faz. Obrigado por fazer parte da nossa jornada e por nos permitir ser parte do seu closet!
          </p>
        </div>
      </div>
      <div className='text-2xl text-center pt-8 pb-6'>
        <Title title1={'Why'} title2={'Choose Us'} />
      </div>
      <div className='flex flex-col gap-2 rounded-[8px] md:flex-row text-sm mb-20'>
        <div className='flex flex-col gap-5 border border-gray-200 shadow-[2px_4px_2px] shadow-gray-300 px-10 md:px-16 py-8 sm:py-20 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>
          We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='flex flex-col gap-5 border border-gray-200 shadow-[2px_4px_2px] shadow-gray-300 px-10 md:px-16 py-8 sm:py-20 '>
          <b>Convenience:</b>
          <p className='text-gray-700'>
          With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className='flex flex-col gap-5 border border-gray-200 shadow-[2px_4px_2px] shadow-gray-300 px-10 md:px-16 py-8 sm:py-20 '>
          <b>Exception Customer Service:</b>
          <p className='text-gray-700'>
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
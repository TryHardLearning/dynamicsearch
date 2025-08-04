import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();

  const { products, corrency, addToShoppingBag } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [sizeSelect, setSizeSelect] = useState('');

  const fetchProductData = async () => {
    const product = products.find(product => product._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
    return;
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData == null ? (
    <div>
      <h1 className='text-center text-2xl my-10'>Product not found</h1>
    </div>
  ) : (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/** Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/** Product Image */}
        <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll scroll-none justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image && productData.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product Image ${index + 1}`}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  onClick={() => setImage(img)} />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img 
              className='w-full h-auto object-cover' 
              src={image} 
              alt='Product' 
            />
          </div>
        </div>
        {/** Product Details **/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl sm:text-2x1 mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3 ' />
            <img src={assets.star_icon} alt='' className='w-3 ' />
            <img src={assets.star_icon} alt='' className='w-3 ' />
            <img src={assets.star_icon} alt='' className='w-3 ' />
            <img src={assets.star_dull_icon} alt='' className='w-3 ' />
            <p className='pl-2'>(23)</p>
          </div>
          <h3 className='mt-5 text-gray-500 md:4/5  '>{productData.description}</h3>
          <p className='mt-5 text-3xl font-medium'>{corrency} {productData.price}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 mt-1'>

              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSizeSelect(size)}
                  className={` ${sizeSelect === size ? 'bg-gray-200 text-orange-600' : ''} border border-gray-300 px-4 py-2 rounded-[6px_4px] cursor-pointer shadow-gray-300 shadow-[2px_4px] hover:bg-gray-200 transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button 
          onClick={() => addToShoppingBag(productData._id, sizeSelect)}
          className='active:bg-black active:text-orange-600 px-8 py-3 mt-4 mb-4 text-sm bg-white border-black border-1  text-black shadow-gray-900 shadow-[2px_4px_2px] '>
              ADD TO CART
          </button>
          <hr className='mt-8 sm>w-4/5'/>
          <div className='flex flex-col gap-1  text-sm text-gray-500 mt-5 '>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy with in 7 days.</p>
          </div>
        </div>
      </div>
      {/** Description Details **/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '>
              Description
          </b>
          <p className='border px-5 py-3 text-sm'>Reviews (22)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
            <p>
              This premium quality wireless headphone is designed for music enthusiasts who value both style and performance. Featuring crystal-clear sound, deep bass, and noise-cancellation technology, it ensures an immersive audio experience. With a comfortable over-ear design and up to 30 hours of battery life, it's perfect for long listening sessions. Compatible with all Bluetooth-enabled devices, it also includes a built-in microphone for hands-free calls. Elevate your audio experience with this must-have accessory.
            </p>
              <table className='w-full border-collapse border border-gray-300'>
                <tbody>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-medium'>Brand</td>
                    <td className='border border-gray-300 px-4 py-2'>Uma marca qualquer</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-medium'>Model</td>
                    <td className='border border-gray-300 px-4 py-2'>Modelo de Teste de exibição Z-100</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-medium'>Battery Life</td>
                    <td className='border border-gray-300 px-4 py-2'>2 horas e 30 minutos</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-medium'>Connectivity</td>
                    <td className='border border-gray-300 px-4 py-2'>Wifi 5Ghz</td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-medium'>Weight</td>
                    <td className='border border-gray-300 px-4 py-2'>240 Gramas</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
      {/** Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  )
}

export default Product
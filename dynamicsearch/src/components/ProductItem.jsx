import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const {corrency} = useContext(ShopContext);

    return (
        <Link 
            className='text-gray-700 p-2 rounded-[4px] hover:shadow-md hover:shadow-gray-300 cursor-pointer transition-shadow duration-300 ease-in-out' 
            to={`/product/${id}`}
        >
            <div className='overflow-hidden rounded-[4px]'>
                <img className='hover:scale-110 transition-transform duration-300 ease-in-out' src={image[0]} alt={name} />
            </div>
            <p className='pt-3 pb-1 text-lg'>{name}</p>
            <p className='text-sm font-medium'>{corrency} {price}</p>
        </Link>
    )
}

export default ProductItem
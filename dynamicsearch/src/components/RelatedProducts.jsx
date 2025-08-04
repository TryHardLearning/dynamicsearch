import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {
  
    const { products } = useContext(ShopContext);

    const [related, setRelated] =  useState([]);

    useEffect(()=>{
        if(products.length > 0 ){
            let allProducts = products.slice();
            const categoryFiltered = allProducts.filter(product => product.category === category);
            const subCategoryFiltered = allProducts.filter(product => product.subCategory === subCategory);
            const uniqueProducts = [...new Map([...categoryFiltered, ...subCategoryFiltered].map(product => [product._id, product])).values()];
            setRelated(uniqueProducts);
        }
    },[products, category, subCategory])

    return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title title1={"Related"} title2={'Products'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((product, index)=>(
                <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />    
            ))}
        </div>

    </div>
  )
}

export default RelatedProducts
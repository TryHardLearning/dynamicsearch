import React, { use, useContext, useState, useEffect } from 'react'
import Product from './Product'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortBy, setSortBy] = useState('relavent');

  const handleCategoryChange = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(category.filter(cat => cat !== e.target.value));
    } else{
      setCategory(category => [...category, e.target.value]);
    }
  }

  const handleSubCategoryChange = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter(cat => cat !== e.target.value));
    } else{
      setSubCategory(subCategory => [...subCategory, e.target.value]);
    }
  }

  const applyFilters = () => {
    let filtered = products.slice();

    if(showSearch && search.length > 0) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    if(subCategory.length > 0) {
      filtered = filtered.filter(product => subCategory.includes(product.subCategory));
    }

    setFilteredProducts(filtered);
  }

  const handleSortProducts = (e) => {
    let sortedProducts = filteredProducts.slice();

    switch (sortBy) {
      case 'relavent':
        sortedProducts = products.slice();
        break;
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = products.slice();
    } 

    setFilteredProducts(sortedProducts);
  }

  useEffect(() => {
    applyFilters();
  }, [subCategory,category,search, showSearch]);

  useEffect(() => {
    handleSortProducts();
  }, [sortBy]);
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p className='flex items-center' onClick={()=> setShowFilters(!showFilters)}>
          <span className='pr-2'>FILTERS</span> <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} alt="dropdown icon" onClick={() => setShowFilters(!showFilters)} />
        </p>
        <div className={`border rounded-[6px] p-2 border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '> CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={handleCategoryChange} value={'Men'} type="checkbox" className='cursor-pointer w-3' />
              <span>Men</span>
            </p>
            <p className='flex gap-2'>
              <input onChange={handleCategoryChange} value={'Women'} type="checkbox" className='cursor-pointer w-3' />
              <span>Women</span>
            </p>
            <p className='flex gap-2'>
              <input onChange={handleCategoryChange} value={'Kids'} type="checkbox" className='cursor-pointer w-3' />
              <span>Kids</span>
            </p>
          </div>
        </div>
        <div className={`border rounded-[6px] p-2 border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input onChange={handleSubCategoryChange} value={'Topwear'} type="checkbox" className='cursor-pointer w-3' />
              <span>Topwear</span>
            </p>
            <p className='flex gap-2'>
              <input onChange={handleSubCategoryChange} value={'Bottomwear'} type="checkbox" className='cursor-pointer w-3' />
              <span>Bottomwear</span>
            </p>
            <p className='flex gap-2'>
              <input onChange={handleSubCategoryChange} value={'Winterwear'} type="checkbox" className='cursor-pointer w-3' />
              <span>Winterwear</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
          <div className='text-base flex justify-between sm:text-2xl mb-4'>
            <Title title1={'Our'} title2={'Collection'}/>
            <select 
              className='border-2 border-gray-300 text-sm px-2' 
              defaultValue="relavent"
              onChange={(e) => {
                setSortBy(e.target.value)
              }}
            >
              <option value='relavent'>Sort by Relavent</option>
              <option value='low-high'>Price: Low to High</option>
              <option value='high-low'>Price: High to Low</option>
            </select>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filteredProducts.map((product, index) => (
            <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Collection
import React, { use, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

    const location = useLocation();

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setShowSearch(true);
                break;
            case '/collection':
                setShowSearch(true);
                break;
            default:
                setShowSearch(false);
        }
    
    },[location]);

  return showSearch ? (
    <div className='border-t border-b text-center'>
        
        <img className='w-3 inline cursor-pointer' src={assets.cross_icon} alt='search icon' onClick={() => setShowSearch(false)} />

        <div className='inline-flex items-center justify-center border border-gray-700 shadow-[6px_8px] shadow-gray-300 px-5 py-2 my-5 mx-3 rounded-[8px] w-3/4 sm:w-1/2'>
            <input 
                type="text" 
                placeholder='Search for products' 
                className='outline-none flex-1 bg-inherit text-sm '
                value={search} 
                onChange={(e) => setSearch(e.target.value)} />
            <img className='w-4' src={assets.search_icon} alt='search icon' />
    
        </div>
    </div>
  ) : null;
}

export default SearchBar
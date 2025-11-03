import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return <div className='py-4 px-10'>
<div className="flex justify-between">
    <div>
        <p className='text-lg font-semibold'>
            RECIPE <span className='text-red-500'>BOOK</span>
        </p>
    </div>
    <div className='flex justify-center items-center gap-10'>
        <ul className='gap-8 hidden sm:flex '>
            <li className='hover:border-b-2
            border-primary uppercase'>Home</li>
             <li className='hover:border-b-2
            border-primary uppercase'>Recipes</li>
              <li className='hover:border-b-2
            border-primary uppercase'>About</li>
        </ul>
    </div>
    <div className=' text-gray-500'>
              <input className='border-0 rounded-sm bg-white focus:border-0 focus:border-amber-500'
              type='text' placeholder='Search for Recipes...'/>
              <FaSearch className='text-gray-400 absolute top-5 left-295 translateY(-50%) cursor-pointer'/>
            </div>
             

    
</div>
  </div>;
};

export default Navbar;
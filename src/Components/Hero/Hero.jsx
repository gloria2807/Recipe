import React from 'react';
import HeroImg from '../assets/delicious.png';

const Hero = () => {
  return (
  <div>
    <div className="px-10 grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[300px]">
        <div className='flex flex-col justify-center gap-8 text-center md:text-left pt-10 md:p-0 pb-10'>
            <h1 className='text-4xl lg:text-6xl font-semibold'>
                Delicious Food Is Waiting For You
            </h1>
            <p className=''>
                A world-class range of  recipes to deliver mouth-watering and aesthetically eye-pleasing food. Dive deep within and unleash your inner cook. </p>
            <div className='flex gap-4 items-center md:justify-start justify-center'>
                <button className='primary-btn hover:scale-105 duration-200 pointer-cursor'>View Recipes</button>
                <button className='secondary-btn text-black hover:scale-105 duration-200 pointer-cursor'>About Us</button>
            </div>
        </div>
         <div className='flex flex-col justify-center'>
                <img src={HeroImg} alt='' className='animate-spin-slow img-shadow w-[500px] mx-auto'/>
            </div>
    </div>
  </div>
)
};

export default Hero;
import React from 'react';
import Img2 from '../../assets/Pounded-Yam.jpg';
import Img1 from '../../assets/fufu.jpg';
import Img3 from '../../assets/eba.png';
import Img4 from '../../assets/Amala.jpg';
import Img5 from '../../assets/wheat.png';
import Img6 from '../../assets/semo.jfif';

const FoodData = [
    {
        image: Img1,
        name: "Fufu",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        buy: 'View Recipe',    
        link: "#",
    },
    {
        image: Img2,
        name: "Pounded Yam",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", 
        buy: 'View Recipe',    
        link: "#", 
    },
    {
        image: Img3,
        name: "Eba",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        buy: 'View Recipe',    
        link: "#",
    },
     {
        image: Img4,
        name: "Amala",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        buy: 'View Recipe',    
        link: "#",
    },
     {
        image: Img5,
        name: "Wheat",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        buy: 'View Recipe',    
        link: "#",
    },
    {
        image: Img6,
        name: "Semo",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        buy: 'View Recipe',    
        link: "#",
    }
];

const Swallow = () => {
  return (
    <div className='px-10 py-14'>
    <h1 className='text-center mb-6 text-2xl font-semibold text-orange-400'>SWALLOW RECIPES</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center'>
           {FoodData.map((item, index) => (
            <div
                key={index}
                className='bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300'>
                    <img
                    src={item.image}
                    alt=''
                    className='w-60 sm:w-40 sm:h-40 mx-auto object-cover rounded-full img-shadow' />
                    <div className='space-y-2'>
                        <p className='text-lg font-semibold'>{item.name}</p>
                        <p>{item.desc}</p>
                        <button className='!mt-5 mb-5 cursor-pointer bg-orange-400 rounded-md text-white text-sm px-2 py-1 w-[200px] h-[50px] hover:bg-primary hover:text-white duration-200'>
                        {item.buy}
                    </button>
                    </div>
            </div>
           ))}
             
        </div>
    </div>
  )
}

export default Swallow
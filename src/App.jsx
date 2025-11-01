import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import RecipeList from './Components/RecipeList/RecipeList';
import BgImage from './assets/tagliatelle.jpg';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

  const App = () => {
return (
<div style = {bgStyle} className="overflow-x-hidden">
  <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
    <Navbar />
    <Hero />
    <RecipeList />
    <Banner />
    <Footer />
  </div>
  
  </div>
);
  };


export default App;

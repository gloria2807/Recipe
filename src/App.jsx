import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import RecipeList from './Components/RecipeList/RecipeList';
import Rice from './Components/RecipeList/Rice';
import Snacks from './Components/RecipeList/Snacks';
import Swallow from './Components/RecipeList/Swallow';
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
    <Rice />
    <Swallow />
    <Snacks />
    <Banner />
    <Footer />
  </div>
  
  </div>
);
  };


export default App;

import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import BestEvent from "../components/Events/BestEvent";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import VoiceflowWidget from "../components/VoiceflowWidget";

const HomePage = () => {
  return (
    <div>
      <Header activeHea
      <Hero />
      <Categories />
      <BestDeals />  
      <BestEvent />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
      <VoiceflowWidget/>
    </div>
  )
}

export default HomePage
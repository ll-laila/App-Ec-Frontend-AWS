import React , {useEffect} from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import BestEvent from "../components/Events/BestEvent";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";


const HomePage = () => {


  // chatBot via voiceflow
  useEffect(() => {
    const loadVoiceflowWidget = () => {
      const script = document.createElement('script');
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '6643361d0727ee135bc09fb4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      };
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    };

    loadVoiceflowWidget();

  }, []);
  


  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />  
      <BestEvent />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  )
}

export default HomePage;
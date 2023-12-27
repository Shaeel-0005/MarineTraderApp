
import React from 'react';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Spotlight from '../../components/spotlight/spotlight';
import Services from '../../components/services_home/services';
import Footer from '../../components/footer/footer';
const HomePage = () => {
  return (
    <div className="homepage">
      
      <Header />
      
      <Banner/>

      <Spotlight/>

      <Services/>
      
      <Footer/>

    </div>
  );
};

export default HomePage;

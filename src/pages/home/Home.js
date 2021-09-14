import React, { useContext } from 'react';

import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import OpeningHours from '../../components/OpeningHours';
import OurStory from '../../components/OurStory';

import { AuthContext } from '../../Auth';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="homepage">
        <div className="item-1 hp-img-1"></div>
        <AboutUs />
        <div className="item-3 products">Products</div>
        <div className="item-4 hp-img-2"></div>
        <div className="item-5 hp-img-3"></div>
        <div className="item-6 hp-img-5"></div>
        <OurStory />
        <OpeningHours />
        <div className="item-9 hp-img-4"></div>
        <ContactUs />
      </div>
    </>
  );
};

export default Home;

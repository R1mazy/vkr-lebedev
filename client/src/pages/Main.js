import React from 'react';
import Banner from '../components/Banner';
import Platforms from '../components/Platforms';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return(
    <div >
        <Banner />
        <Platforms />
        <ContactForm />
        <Footer />
    </div>
  );
};

export default Main; 
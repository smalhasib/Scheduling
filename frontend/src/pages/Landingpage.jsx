import React from 'react'
import Features from '../components/Landingpage/Features';
import Footer from '../components/Landingpage/Footer';
import Home from '../components/Landingpage/Home';
import Navbar from '../components/Landingpage/Navbar'


const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Features/>
      <Footer/>
    </>
  );
}

export default Landingpage
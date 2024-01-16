import React from "react";

import 'typeface-roboto';
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/Navbar';
import PartnerCarousel from '../PartnerCarousel/PartnerCarousel';
import Map from '../Map/Map';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../Contact/Contact';
import Awards from '../Awards/Awards';
import Footer from '../Footer/Footer';
import ClutchWidget from '../Reviews/Reviews';
import Slider from "../Slider/Slider"
import About from '../About/About';
import Phases from "../phases/Phases"

const Home = () =>{
    return(
    <div className="App font-sans">
      <Navbar />
      <main className='main'>
        <Hero />
        <Slider />
      </main>
      <PartnerCarousel />
      <Map />
      <main className='main'> 
        <Services />
      </main>
      <Phases />
      <ClutchWidget />
      <Blogs />
      <About />
      <ContactUs />
      <Awards />
      <main className='main'>
        <Footer />
      </main>
    </div>
    )
}
export default Home;
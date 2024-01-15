import './App.css';
import 'typeface-roboto';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/NavBar/Navbar';
import PartnerCarousel from './Components/PartnerCarousel/PartnerCarousel';
import Map from './Components/Map/Map';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import ContactUs from './Components/Contact/Contact';
import Awards from './Components/Awards/Awards';
import Footer from './Components/Footer/Footer';
import ClutchWidget from './Components/Reviews/Reviews';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import Phases from './Components/phases/Phases';

function App() {
  return (
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
  );
}

export default App;
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection.js";
import Product from "./components/Product.js";
import WhoWeAre from "./components/WhoWeAre.js";
// import TimeLine from "./components/Timeline.js";
// import HowItWorks from "./components/HowItWorks.js";
import Services from "./components/Services.js";
import Footer from "./components/Footer.js";
import ContactUs from "./components/ContactUs.js";
import WhatWeOffer from "./components/WhatWeOffer.js";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      mirror: true,
      debounceDelay: 100,
      throttleDelay: 150,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <Product />
      {/* <HowItWorks />  */}
      <WhoWeAre />       
      {/* <TimeLine />        */}
      <WhatWeOffer />   
      <Services />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;

import "./App.css";
// import { Navbar, HeroSection, Product, WhoWeAre, TimeLine, HowItWorks, Services, Footer } from './components';

import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection.js";
// import Product from "./components/Product.js";
// import WhoWeAre from "./components/WhoWeAre.js";
// import TimeLine from "./components/Timeline.js";
// import HowItWorks from "./components/HowItWorks.js";
// import Services from "./components/Services.js";
// import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      {/* <Product />
      <WhoWeAre />
      <TimeLine />
      <HowItWorks />
      <Services />
      <Footer />
      <h1 className="text-primary_font opacity-60">Neha </h1>
      <button className="btn-yellow">Click me</button> */}
    </div>
  );
}

export default App;

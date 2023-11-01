import { useRef } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Vision from "./components/Vision";
import WhyUs from "./components/WhyUs";

function App() {


  return (
    <div id="top">
      <Navbar/>
      <Hero/>
      <div className="flex justify-center my-16" id='vision'><div className="md:w-[376px] w-72 h-[14px] line"></div></div>
      <Vision/>
      <div className="flex justify-center md:my-32 mt-24"><div className="md:w-[376px] w-72 h-[14px] line"></div></div>
      <Service/>
      <div className="flex justify-center md:my-20 my-24"><div className="md:w-[376px] w-72 h-[14px] line"></div></div>
      <WhyUs/>
      <div className="flex justify-center md:my-32 my-24"><div className="md:w-[376px] w-72 h-[14px] line"></div></div>
      <Hero2/>
      <div className="flex justify-center md:my-20 my-24"><div className="md:w-[376px] w-72 h-[14px] line"></div></div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

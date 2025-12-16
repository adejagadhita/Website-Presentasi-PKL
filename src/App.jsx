import DarkVeil from "./components/DarkVeil";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Navbar from "./Navbar";
import Hero from "./Hero";
import Biodata from "./biodata";
import Sejarah from "./Sejarah";
import VisMisi from "./VisMisi";
import Kosong from "./kosong";
import Tools  from "./Tools";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "./Footer";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return(
    <div className="relative ">
   

 <div className="relative   ">
    <Navbar />
      </div>

      <div className="relative ">
        <Hero />
      </div>

      <div className="relative">
        <Biodata />
      </div>

      <div className="relative">
        <Sejarah />
      </div>

      <div>
        <VisMisi />
      </div>
  
    <div>
      <Tools />
    </div>

      <div>
        <Kosong />
      </div>

      <div>
        <Footer />
      </div>
    

</div>
  )
}
export default App;
import DarkVeil from "./components/DarkVeil";
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
  return(
    <div className="relative ">
    {/* <div className="h-screen absolute inset-0  ">
  <DarkVeil />
</div> */}

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
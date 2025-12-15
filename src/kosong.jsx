import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PDSimulator from "./assets/image.png";
import LandingPage from "./assets/Screenshot 2025-11-27 160551.png";
import Sriat from "./assets/Screenshot 2025-11-27 161423.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";




export default function Kosong() {
    return (
        
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col mb-10">
                <div className="text-[65px] text-[#700AE5] font-semibold">
                <h2 className="">PROJECTS</h2>
                </div>
                <div className="text-white font-regular text-[30px] -mt-5">
                    <h3>FIND MY JOB</h3>
                </div>
                </div>

        <div className="relative w-full max-w-4xl mx-auto ">

          {/* Tombol Prev */}
          <button
            className="custom-prev absolute left-[-60px] top-1/2 -translate-y-1/2 
                       bg-[#6409ce] text-white px-4 py-2 rounded-full cursor-pointer z-20"
          >
            &lt;
          </button>

          {/* Tombol Next */}
          <button
            className="custom-next absolute right-[-60px] top-1/2 -translate-y-1/2
                       bg-[#6409ce] text-white px-4 py-2 rounded-full cursor-pointer z-20"
          >
            &gt;
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={1000}
            className="rounded-xl"
          >
            <SwiperSlide>
              <div className=" h-100 bg-[#0d0d0d] border border-[#6409ce]/40 rounded-2xl gap-10 flex items-center hover:border-[#6409ce] transition duration-300  ">
                <div className="h-55  w-100   ml-10 rounded-xl flex items-center justify-center transition duration-300 hover:scale-105 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300  hover:shadow-[0_0_50px_rgba(112,10,229,0.6)]  cursor-pointer">
                <img className="rounded-xl " src={PDSimulator} alt="" />
                </div>

                <div className="flex flex-col">
                <div>
                    
                    <a className="text-[#5908b7] text-[40px] font-semibold" href="https://adejagadhita.github.io/Pokemon-Simulator/">Project 1</a>
                </div>

                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Qui quam rerum quia tempore, neque quis <br /> in accusamus nihil magnam eaque repellendus, <br /> a est quas incidunt facere velit inventore <br /> ipsum modi.</p>
                </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-100 bg-[#0d0d0d] border border-[#6409ce]/40 rounded-2xl gap-10 flex items-center hover:border-[#6409ce] transition duration-300  ">
                <div className="h-55  w-100   ml-10 rounded-xl flex items-center justify-center transition duration-300 hover:scale-105 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300  hover:shadow-[0_0_50px_rgba(112,10,229,0.6)]  cursor-pointer">
               <img className="rounded-xl w-150" src={LandingPage} alt="" />
                </div>

                <div className="flex flex-col">
                  <div>
                  <a className="text-[#5908b7] text-[40px] font-semibold" href="https://adejagadhita.github.io/Landing-Page-Positivus/">Project 2</a>
                </div>

                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Qui quam rerum quia tempore, neque quis <br /> in accusamus nihil magnam eaque repellendus, <br /> a est quas incidunt facere velit inventore <br /> ipsum modi.</p>
                </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className=" h-100 bg-[#0d0d0d] border border-[#6409ce]/40 rounded-2xl gap-10 flex items-center hover:border-[#6409ce] transition duration-300  ">
                <div className="h-55  w-100   ml-10 rounded-xl flex items-center justify-center transition duration-300 hover:scale-105 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300  hover:shadow-[0_0_50px_rgba(112,10,229,0.6)]  cursor-pointer">
                <img className="rounded-xl w-150" src={Sriat} alt="" />
                </div>

                <div className="flex flex-col">
                <div>
                   <a className="text-[#5908b7] text-[40px] font-semibold" href="https://adejagadhita.github.io/Sriat-Jewellery/">Project 3</a>
                </div>

                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Qui quam rerum quia tempore, neque quis <br /> in accusamus nihil magnam eaque repellendus, <br /> a est quas incidunt facere velit inventore <br /> ipsum modi.</p>
                </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>

        </div>

      </div>
    </section>

        
    )
}
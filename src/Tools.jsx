import GmbrReact from "./assets/9b4ee057076232fb57c48cf80947f8a7-removebg-preview.png";
import VsCode from "./assets/download-removebg-preview.png";
import Figma from "./assets/Figma__The_Collaborative_Interface_Design_Tool-removebg-preview.png";
import Tailwind from "./assets/Guía_para_usar_fuentes_personalizadas_en_proyectos_de_diseño_gráfico_con_Tailwind-removebg-preview.png";

import { useState } from "react";


export default function Tools() {

    const [activeCard, setActiveCard] = useState(null);

   
    return (
        <section id="tools" className="w-full bg-black text-white py-16"> 
            <div className="max-w-6xl mx-auto px-6">
            <div className="text-[#700AE5] font-semibold text-[50px] flex justify-center mb-10">
                <h1>TOOLS</h1>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center gap-10" >

                <div className="h-auto w-200  rounded-2xl flex items-center  p-2 border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer   "
                   >
                        <img src={GmbrReact} alt="React Icon" className="h-30 " />
                    
                    
                    <p className="text-">React.js adalah library JavaScript untuk membuat antarmuka web yang interaktif dan cepat.React.js adalah library JavaScript untuk membuat antarmuka web yang interaktif dan cepat.</p>
                   
                </div>

                <div className="h-auto w-200  rounded-2xl flex items-center  p-2 border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer     "
                   >
                        <img src={VsCode} alt="React Icon" className="h-30 " />
                    
                    
                    <p className="text-">Visual Studio Code (VS Code) adalah text editor ringan dan gratis yang digunakan untuk menulis dan mengedit kode dengan dukungan banyak bahasa pemrograman serta berbagai ekstensi.</p>
                   
                </div>

                <div className="h-auto w-200  rounded-2xl flex items-center  p-2 border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer     "
                   >
                        <img src={Figma} alt="React Icon" className="h-30 " />
                    
                    
                    <p className="text-">Figma adalah aplikasi desain berbasis cloud yang digunakan untuk membuat desain UI/UX secara kolaboratif dan real-time.</p>
                   
                </div>


                <div className="h-auto w-200  rounded-2xl flex items-center  p-2 border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer     "
                   >
                        <img src={Tailwind} alt="React Icon" className="h-30 " />
                    
                    
                    <p className="text-">Tailwind CSS adalah framework CSS berbasis utility yang memudahkan pembuatan desain web secara cepat dan konsisten langsung di dalam HTML.</p>
                   
                </div>


              
            </div>
            </div>
        
        </section>
    )
}
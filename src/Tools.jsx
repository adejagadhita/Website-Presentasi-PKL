import GmbrReact from "./assets/9b4ee057076232fb57c48cf80947f8a7-removebg-preview.png";
import VsCode from "./assets/download-removebg-preview.png";
import Figma from "./assets/Figma__The_Collaborative_Interface_Design_Tool-removebg-preview.png";
import Tailwind from "./assets/Guía_para_usar_fuentes_personalizadas_en_proyectos_de_diseño_gráfico_con_Tailwind-removebg-preview.png";

export default function Tools() {
  const tools = [
    {
      img: GmbrReact,
      text: "React.js adalah library JavaScript untuk membuat antarmuka web yang interaktif dan cepat.",
    },
    {
      img: VsCode,
      text: "Visual Studio Code (VS Code) adalah text editor ringan dan gratis dengan dukungan banyak bahasa dan ekstensi.",
    },
    {
      img: Figma,
      text: "Figma adalah aplikasi desain berbasis cloud untuk membuat UI/UX secara kolaboratif dan real-time.",
    },
    {
      img: Tailwind,
      text: "Tailwind CSS adalah framework CSS berbasis utility untuk membuat desain web cepat dan konsisten.",
    },
  ];

  return (
    <section id="tools" className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Judul */}
        <h1
        data-aos="fade-down"
          className="
          text-[#700AE5] font-semibold
          text-4xl sm:text-5xl
          text-center mb-12
        ">
          TOOLS
        </h1>

        {/* Grid */}
        <div 
        data-aos="fade-right"
        data-aos-delay="200"
        className="
          grid grid-cols-1
          sm:grid-cols-2
          gap-8
        ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="
                rounded-2xl p-6
                border border-[#700AE5]/40
                bg-white/5
                flex flex-col sm:flex-row
                items-center gap-6
                shadow-[0_0_25px_rgba(112,10,229,0.35)]
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_50px_rgba(112,10,229,0.6)]
                hover:border-[#700AE5]/80
                hover:bg-white/10
                cursor-pointer
              "
            >
              <img
                src={tool.img}
                alt="Tool Icon"
                className="h-20 w-auto object-contain"
              />

              <p className="
                text-sm sm:text-base
                text-center sm:text-left
                leading-relaxed
              ">
                {tool.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

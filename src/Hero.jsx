import DarkVeil from "./components/DarkVeil";

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      
      {/* background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* content */}
      <div className="
        relative z-10 min-h-screen
        flex flex-col items-center justify-center
        text-white text-center px-6
      ">
        {/* judul baris 1 */}
        <h1
        data-aos="fade-right"
         className="
          text-3xl sm:text-4xl md:text-5xl
          font-semibold
        ">
          Presentasi <span className="font-thin italic">Praktik</span>
        </h1>

        {/* judul baris 2 */}
        <h2 
        data-aos="fade-left"
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-thin italic mt-2
        ">
          Kerja Lapangan
        </h2>

        {/* tombol */}
        <a
        data-aos="fade-up"
          href="#biodata"
          className="
            mt-6 px-8 py-3
            border rounded-xl
            text-base sm:text-lg
            hover:bg-white hover:text-black
            transition-all
          "
        >
          Explore
        </a>
      </div>

    </section>
  );
}

export default Hero;

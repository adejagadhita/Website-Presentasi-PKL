import DarkVeil from "./components/DarkVeil";

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">

      {/* background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-[50px] ml-[-180px]">
          Presentasi <i className="font-thin">Praktek</i>
        </div>

        <div className="text-[50px] font-thin mr-[-240px]">
          <i>Kerja Langsung</i>
        </div>

        <button  className="mt-5 border h-13 w-35 rounded-[15px] text-[20px] rounded-[15px]">
          <a href="#biodata">Explore</a>
        </button>
      </div>

    </section>
  );
}

export default Hero;

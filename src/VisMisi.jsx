export default function VisiMisi() {
  return (
    <section
      id="visiMisi"
      className="w-full min-h-screen bg-black py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== VISI ===== */}
        <div className="text-center">
          <h2 
          data-aos="fade-down"
          className="
            text-4xl sm:text-5xl md:text-[65px]
            font-semibold text-[#700AE5]
          ">
            VISI
          </h2>

          <p
          data-aos="fade-up"
          className="
            mt-4 text-white
            text-base sm:text-lg md:text-xl
            leading-relaxed
          ">
            “Menjadi lembaga pendidikan dan pelatihan terdepan dalam <br /> mempersiapkan
            generasi pemenang untuk  Indonesia Maju 2045.”
          </p>

          {/* garis */}
          <div className="flex justify-center mt-6">
            <div
              className="w-40 sm:w-56 md:w-64 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(112,10,229,0) 0%, rgba(112,10,229,0.95) 35%, rgba(112,10,229,0.95) 65%, rgba(112,10,229,0) 100%)",
                boxShadow: "0 8px 30px rgba(112,10,229,0.24)",
              }}
            />
          </div>
        </div>

        {/* ===== MISI ===== */}
        <div className="mt-20 text-center">
          <h2 
          data-aos="fade-down"
          className="
            text-4xl sm:text-5xl md:text-[65px]
            font-semibold text-[#700AE5]
          ">
            MISI
          </h2>

          {/* card container */}
          <div 
          data-aos="fade-up"
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8 mt-10
          ">
            {[
              "Menyelenggarakan Bimbingan Belajar seleksi masuk PTN, PTK, ASN, TNI, Polri.",
              "Mengelola Kursus & Pelatihan Kerja di bidang teknologi digital & industri.",
              "Membangun karakter profesional dan berintegritas melalui penguatan soft skills.",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  min-h-[160px] p-6
                  border rounded-3xl
                  border-[#700AE5]/40
                  bg-white/5
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(112,10,229,0.35)]
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_50px_rgba(112,10,229,0.6)]
                  hover:border-[#700AE5]/80
                  hover:bg-white/10
                  cursor-pointer
                "
              >
                <p className="
                  text-white text-center
                  text-sm sm:text-base
                  leading-relaxed
                ">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

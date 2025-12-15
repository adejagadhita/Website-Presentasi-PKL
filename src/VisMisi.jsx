export default function VisiMisi() {
    return (
        <div id="visiMisi" className="w-full min-h-screen bg-black py-20" >
            <div className="max-w-6xl mx-auto px-6 ">
                
            <div>
            <div className=" text-[65px] flex justify-center font-semibold text-[#700AE5]">
                <h2 >VISI</h2>
            </div>
            <div className="text-white flex justify-center text-center text-xl ">
                <p>“Menjadi lembaga pendidikan dan pelatihan terdepan dalam mempersiapkan <br /> generasi pemenang untuk Indonesia Maju 2045.”</p>
            </div>
            <div className="flex justify-center mt-5">
                <div
                    className="w-48 md:w-64 h-1 rounded-full"
                    style={{
                        background: 'linear-gradient(to right, rgba(112,10,229,0) 0%, rgba(112,10,229,0.95) 35%, rgba(112,10,229,0.95) 65%, rgba(112,10,229,0) 100%)',
                        boxShadow: '0 8px 30px rgba(112,10,229,0.24)'
                    }}
                />
            </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-25">
            <div className="text-[65px] text-[#700AE5] font-semibold " >
                    <h2>MISI</h2>
            </div>

                <div className="flex gap-10 mt-5">  
                <div className="h-40 w-60 p-5 border rounded-[30px] border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer">
                    <p className="text-white text-center">Menyelenggarakan Bimbingan Belajar seleksi masuk PTN, PTK, ASN, TNI, Polri.</p>
                </div>

                 <div className="h-40 w-60 p-5 border rounded-[30px] border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer">
                    <p className="text-white text-center">Mengelola Kursus & Pelatihan Kerja di bidang teknologi digital & industri.</p>
                </div>

                 <div className="h-40 w-60 p-5 border rounded-[30px] border-[#700AE5]/40 bg-white/5 flex items-center justify-center shadow-[0_0_25px_rgba(112,10,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(112,10,229,0.6)] hover:border-[#700AE5]/80 hover:bg-white/10 cursor-pointer">
                    <p className="text-white text-center">Membangun karakter profesional dan berintegritas melalui penguatan soft skills.</p>
                </div>
                </div>  

            </div>

            </div>
        </div>
    )
}
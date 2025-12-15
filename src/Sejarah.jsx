export default function Sejarah() {
    const timeline = [
        { year: "2018", desc: "Berdiri  di Denpasar, Bali di bawah PT Bina Taruna Wiratama \n (BTW). BTW bermula sebagai Bimbel Kedinasan yang \n digagasoleh  beberapa alumni Sekolah Kedinasan yang \n berprofesisebagai  birokrat dan pengajar." },
        { year: "2019", desc: "Pembukaan cabang pertama di Magelang sebagai \n awal ekspansi Bimbel BTW.​" },
        { year: "2020", desc: "Munculnya Pandemi Covid 19 mendorong inovasi platform \n pembelajaran melalui aplikasi belajar Smart BTW & pengembangan \n e-LMS Office BTW, membuka akses belajar digital." },
        { year: "2021", desc: "Perluasan cabang dengan membuka 5 cabang baru di \n Gianyar, Singaraja, Mengwi, Tegal, dan Palu." },
        { year: "2022", desc: "Smart BTW Transformasi menjadi BTW Edutech, platform \n berbasis teknologi dengan Asesmen Minat Bakat, Drilling System, \n & Analisis Peluang Lulus. Pembukaan 7 cabang baru di Negara, \n Amlapura, Malang, Semarang, Surakarta, Bekasi, dan Lampung." },
        { year: "2023", desc: "Bimbel BTW bertransformasi menjadi BTW academy dengan \n menghadirkan layanan kursus dan pelatihan bidang teknologi \n Digital. Pembukaan 2 cabang baru di Metro dan Tanjung Selor." },
        { year: "2024", desc: "BTW Academy mengembangkan sistem pengelolaan bagi hasil \n pada 15 cabang bimbel. Pembukaan 6 cabang baru di Surabaya, \n Kendari, Tomohon, Gorontalo, Malinau, dan Banjar." },
        { year: "2025", desc: "PT BTW mengembangkan skema waralaba untuk memperluas \n jangkauan siswa di seluruh Indonesia, serta memprakarsai berdirinya \n Asosiasi Instruktur Teknologi Digital Indonesia (AITDI) sebagai \n wadah kolaborasi dan inovasi para instruktur bidang pendidikan digital."}
    ];

    return(
        <div className="w-full bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className=" font-semibold  space-y-0 mb-16 ">
                    <h1 className="text-white text-[50px]">SEJARAH</h1>
                    <h1 className="-mt-6 text-[50px] text-[#700AE5]">PERUSAHAAN</h1>
                </div>

                <div className="relative">
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#700AE5] to-[#700AE5]"
                     style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #700AE5 0px, #700AE5 10px, transparent 10px, transparent 20px)', backgroundSize: '1px 20px' }}></div>

                   
                    <div className="space-y-8">
                        {timeline.map((item, idx) => (
                            <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                              
                                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <h1 className="text-2xl font-semibold text-[#700AE5] mb-2">{item.year}</h1>
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                                </div>

                               
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-2 w-4 h-4 bg-[#700AE5] rounded-full border-4 border-black"></div>

                              
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
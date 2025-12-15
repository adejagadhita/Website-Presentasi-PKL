import Foto from "./assets/pitc1catur.jpg";
export default function Biodata() {

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="flex flex-col justify-center md:flex-row items-center md:items-center gap-15">
          <div className="relative w-80 h-80 md:w-80 md:h-100 group">
            <div
              className="absolute inset-0 rounded-[50px] transition-shadow duration-300"
              style={{ boxShadow: '0 0 60px rgba(255,255,255,0.15), 0 30px 80px rgba(255,255,255,0.18)' }}
            />
            <div className="absolute inset-0 rounded-[50px] transition-shadow duration-300 opacity-0 group-hover:opacity-100"
              style={{ boxShadow: '0 0 60px rgba(255,255,255,0.12), 0 30px 80px rgba(255,255,255,0.1)' }}
            />
            <div className="overflow-hidden rounded-[50px] w-full h-full relative z-10">
              <img
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                src={Foto}
                alt="Foto"
              />
            </div>
          </div>
          

          <div className="">
             <div> <h2 className="text-[50px] font-semibold ">BIODATA</h2></div>
            <div className="space-y-2 text-lg">
              <div>
                <span className="font-medium">Nama:</span> I Made Ade jagadhita Artha
              </div>

              <div>
                <span className="font-medium">Kelas:</span> XI RPL 1
              </div>
              <div>
                <span className="font-medium">Absen:</span> 11
              </div>
            </div>
            <div className="mt-5">
                <span className="font-medium"> <p>"Antusias dalam teknologi, penuh rasa ingin tahu,<br/> dan selalu siap menghadapi tantangan baru."</p></span> 
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
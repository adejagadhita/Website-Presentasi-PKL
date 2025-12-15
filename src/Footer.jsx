import { Instagram, Mail, Phone} from "lucide-react";

export default function Tools() {
    return (
        <div id="footer" className="w-full bg-black text-white pt-16">
            <div className="max-w-6xl mx-auto px-6 ">
                <div className="rounded-tl-3xl rounded-tr-3xl bg-[#0d0d0d] h-30 flex justify-center  flex-col items-center pt-10 gap-2 ">
               
                <div className="text-[20px] font-medium font-bold">
                   <p>&copy; 2025 Ade Jagadhita</p>
                </div>

               
                <div className="h-50 text-blue-300 flex gap-10 ">
                    
                    <a className="flex gap-1" href="https://www.instagram.com/adejgdhta?igsh=dnVncGZpY2x6b3Vn"><i><Instagram /></i>Instagram</a>
                   
                    
                  
                    <a className="flex gap-1" href="mailto:adejagad345@gmail.com"><i><Mail /></i>Email</a>

                    <a className="flex gap-1" href="https://wa.me/6289524629950"><i><Phone /></i>Phone</a>
                   
                    
                </div>
                   
                </div>
            </div> 
        </div>
    )
}
function Navbar() {
    return(
        <div>
            <div className="text-white   " >
               <ul className="flex gap-10 justify-end h-15 items-center pr-5  bg-transparent fixed w-full top-0 backdrop-blur-sm ">
                <li><a href="">Biodata</a></li>
                 <li><a href="">Sejarah Perusahaan</a></li>
                  <li><a href="">Visi & Misi</a></li>
                  <li><a href="">Tools</a></li>
                   <li><a href="">Project</a></li>
                    <li><a href="">Contact</a></li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar;
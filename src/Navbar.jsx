export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-black/30 backdrop-blur-md
    ">
      <div className="max-w-7xl mx-auto px-8 h-15
                      flex items-center justify-end text-white">

                <ul className="flex gap-10  h-15 items-center pr-5 ">
                 <li>
                    <a href="#biodata">Biodata</a></li>
                 <li><a href="#sejarah">Sejarah Perusahaan</a></li>
                  <li><a href="#visiMisi">Visi & Misi</a></li>
                  <li><a href="#tools">Tools</a></li>
                   <li><a href="#project">Project</a></li>
                    <li><a href="#footer">Contact</a>
                    </li>
                    </ul>


      </div>
    </nav>
  );
}

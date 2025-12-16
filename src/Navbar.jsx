import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
          <span className="font-semibold text-lg"></span>

          {/* desktop menu */}
          <ul className="hidden md:flex gap-10">
            <li><a href="#biodata">Biodata</a></li>
            <li><a href="#sejarah">Sejarah</a></li>
            <li><a href="#visiMisi">Visi & Misi</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>

          {/* hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/60 z-40
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black/60 text-white z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6">
          <li><a onClick={() => setOpen(false)} href="#biodata">Biodata</a></li>
          <li><a onClick={() => setOpen(false)} href="#sejarah">Sejarah</a></li>
          <li><a onClick={() => setOpen(false)} href="#visiMisi">Visi & Misi</a></li>
          <li><a onClick={() => setOpen(false)} href="#tools">Tools</a></li>
          <li><a onClick={() => setOpen(false)} href="#project">Project</a></li>
          <li><a onClick={() => setOpen(false)} href="#footer">Contact</a></li>
        </ul>
      </aside>
    </>
  );
}

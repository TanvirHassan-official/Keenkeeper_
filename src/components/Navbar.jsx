/* eslint-disable @next/next/no-img-element */
"use client";
import { FaHome, FaClock, FaChartLine } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {
        const [open, setOpen] = useState(false);
        const pathname = usePathname()
        const isActive = (path) => pathname === path

    return (
    <div className="px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full px-2 sm:px-4">
        
        {/* Logo */}
        <div>
            <img 
                src={"/assets/logo.png"}
                alt="KeenKeeper Logo" 
            />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Link href="/"><button className={isActive('/') ? 'btn btn-active bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
                <FaHome />Home
            </button></Link></li>
          <li><Link href="/timeline"><button className={isActive('/timeline') ? 'btn btn-active bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
              <FaClock/> Timeline
            </button></Link></li>
          <li><Link href="/stats"><button className={isActive('/stats') ? 'btn btn-active bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
              <FaChartLine/>Stats
            </button></Link></li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/"><button className={isActive('/') ? 'btn btn-active btn-block bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
              <FaHome />Home
            </button></Link>
          <Link href="/timeline"><button className={isActive('/timeline') ? 'btn btn-active btn-block bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
              <FaClock/>Timeline
            </button></Link>
          <Link href="/stats"><button className={isActive('/stats') ? 'btn btn-active btn-block bg-[#244D3F] text-white' : 'btn btn-block hover:bg-[#244D3F] hover:text-white'}>
              <FaChartLine/>Stats
            </button></Link>
        </div>
      )}
    </div>
    );
};

export default Navbar;
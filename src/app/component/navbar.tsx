import { SheetDemo } from "@/components/menu";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-md">
      <header className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="text-black text-2xl font-serif font-semibold">
              Hooriya
              <span className="text-blue-700"> Fareed</span>
            </span>
          </a>
          <div className="md:hidden">
            <SheetDemo />
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="#About" className="hover:text-gray-900">About</Link>
          <Link href="#Skills" className="hover:text-gray-900">Skills</Link>
          <Link href="#Project" className="hover:text-gray-900">Projects</Link>
          <Link href="#Contact" className="hover:text-gray-900">Contact</Link>
        </nav>

        {/* CV Button */}
        <a target="_blank" href="/assests/cv/Profile (4).pdf">
          <button className="mt-4 md:mt-0 bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 flex items-center">
            Download CV
            <AiOutlineCloudDownload className="ml-2 text-lg" />
          </button>
        </a>
      </header>
    </div>
  );
};

export default Navbar;

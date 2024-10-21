"use client";
import { SheetDemo } from "@/components/menu";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 font-serif">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Flex container for heading and menu on small screens */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a className="flex title-font font-medium items-center text-gray-900">
              <span className="ml-3 text-black text-3xl font-serif font-semibold">
                Hooriya
                <span className="ml-3 text-3xl font-serif font-semibold text-blue-700">
                  Fareed
                </span>
              </span>
            </a>

            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden">
              <SheetDemo />
            </div>
          </div>

          {/* Navbar Links for Large Screens */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="#About" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="#Skills" className="mr-5 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#Project" className="mr-5 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#Contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <a target="_blank" href="/assests/cv/Profile (4).pdf">
            <button className=" inline-flex ml-6 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2  " />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

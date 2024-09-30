"use client"
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 font-serif">
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-blac text-3xl font-serif font-semibold ">
              Hooriya
              <span className="ml-3  text-3xl font-serif font-semibold text-blue-700">
                Fareed
              </span>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"#About"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"#Skills"} className="mr-5 hover:text-gray-900">
            Skills
          </Link>
          <Link href={"#Project"} className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link href={"#Contact"} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
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

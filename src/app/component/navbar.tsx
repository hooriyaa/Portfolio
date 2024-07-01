import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 font-serif">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <h1 className="text-3xl mr-7 -ml-6 font-serif font-semibold mb-2">
              Hooriya
              <span className="  text-3xl text-blue-700 font-serif font-semibold ml-[9px] ">
                Fareed
              </span>
            </h1>
          </a>

          <nav className="md:ml-auto md:mr-66 flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
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

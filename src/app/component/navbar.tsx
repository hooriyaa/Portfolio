import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineCloudDownload} from 'react-icons/ai';


const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assests/pictures/Portfolio-header.webp")}
              width={180}
              height={180}
              alt="My Portfolio"
              className="w-[200px] h-[75px]"
            />
            <span className="ml-3 text-xl">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              skills
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              projects
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
            <a href="/assests/cv/Profile (4).pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
           <AiOutlineCloudDownload className="text-xl ml-2"/>
          </button>
           </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-blue-50 font-serif">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className=" flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../public/assests/pictures/portfolio.png")}
              width={180}
              height={180}
              alt="My Portfolio"
              className="w-[300px] rounded-3xl h-[110px]"
            />
            <span className="ml-7 font-bold font-serif text-2xl">
              MY
              <span className=" font-bold ml-2 font-serif text-2xl text-blue-700">
                PORTFOLIO
              </span>
            </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 font-serif sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 MY PORTFOLIO
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/hooriyaa"}
              className="text-gray-500 text-3xl hover:text-[#0a0a0a]"
            >
              <ImGithub />
            </Link>

            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/hooriya-muhammad-fareed-57a320302/"
              }
              className="text-gray-500 text-3xl hover:text-[#0077B5] ml-2"
            >
              <ImLinkedin />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

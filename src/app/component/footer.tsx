import Image from "next/image";
import Link from "next/link";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import footerImage from "../../../public/assests/pictures/portfolio.png";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
            src={footerImage}
            width={180}
            height={180}
            alt="Portfolio"
            className="w-40 h-16 rounded-xl mx-5"
          />
          <span className="ml-3 font-bold text-xl  font-serif pr-3">
            MY
            <span className=" font-bold ml-2 font-serif  text-xl  text-blue-700">
              PORTFOLIO
            </span>
          </span>
        </a>

        {/* Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-5 ">
          <Link
            target="_blank"
            href={"https://github.com/hooriyaa"}
            className="text-gray-500 text-3xl hover:text-[#0a0a0a]"
          >
            <ImGithub />
          </Link>
          <Link
            target="_blank"
            href={"https://www.youtube.com/@techtalesbyhoor"}
            className="text-gray-500 text-3xl hover:text-[#FF0000] ml-2"
          >
            <IoLogoYoutube />
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
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/hooriya.fareed?igsh=MWxja2ZqbDQzazA4dg=="
            }
            className="text-gray-500 text-3xl hover:text-[#e4405f] ml-2"
          >
            <FiInstagram />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

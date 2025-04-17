"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import heroImage from "../../../public/assests/pictures/pic.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-16 md:py-24">
          <div className="lg:flex-grow md:w-1/2 flex flex-col font-serif items-center md:items-start text-center md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif font-bold text-black">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Web Developer",
                     "Programmer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700 mb-2"></div>
            <p className="mb-8 leading-relaxed text-white font-serif">
              Hello!
              <span className="text-white ml-2 font-serif">
                I am Hooriya Muhammad Fareed
              </span>
              <br />I am a passionate Frontend Developer with a sharp eye for design,
               performance, and AI-driven innovation. I craft responsive, user-first web experiences
                that are both visually stunning and technically seamless.

            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white font-serif bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <Image
              className="object-cover w-full max-w-xs sm:max-w-sm border-none object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src={heroImage}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

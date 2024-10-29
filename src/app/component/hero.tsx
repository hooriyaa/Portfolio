"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col font-serif md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif font-bold text-black">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
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
              <span className="text-black ml-2 font-serif">
                I am Hooriya Muhammad Fareed
              </span>
              <br />I am a Full Stack Developer with a backend focus and a
              passion for Generative AI. I excel in creating scalable, efficient
              web solutions by integrating state-of-the-art technologies and AI
              into enterprise-level applications.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white font-serif bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <Image
              className="object-cover w-[22rem] h-[25rem] border-none object-center mx-auto rounded"
              alt="hero"
              width={500}
              height={500}
              src={require("../../../public/assests/pictures/pic.png")}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

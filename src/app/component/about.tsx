"use client"
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div  data-aos="zoom-in-right" data-aos-duration="1000"  className="container mx-auto flex flex-col md:flex-row items-center px-5 py-8 md:py-24">
          <div className="lg:w-1/2 mb-10 md:mb-0">
            <Image
              className="mx-auto w-[700px] h-[590px] rounded-full"
              alt="hero"
              width={510}
              height={490}
              src={require("../../../public/assests/pictures/digital_girl_pic.jpg")}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 flex font-serif  flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-serif  text-3xl md:text-5xl mb-4  font-bold text-gray-900">
              About
              <span className="text-3xl ml-3 md:text-5xl text-blue-700 font-serif font-bold">
                Me
              </span>
            </h1>
            <div className="mb-8 leading-relaxed">
              <p className="mb-4 font-serif ">
                👋 Hello! I am
                <span className="text-black ml-3 font-serif ">
                  Hooriya Muhammad Fareed
                </span>
              </p>
              <p className="mb-4">
                I am a passionate Full Stack Developer with a backend focus and a
                passion for Generative AI 🚀.I excel in creating scalable,
                efficient web solutions by integrating state-of-the-art
                technologies and AI into enterprise-level applications.
              </p>
              <p className="mb-4">
                🌟 Innovative Developer & Tech Enthusiast
                <br />
                📚 Lifelong Learner Committed to Excellence
                <br />
                🔧 Expert in Solving Complex Tech Challenges
              </p>
              <p className="mb-4">
                💼 <span className="text-black">Professional Overview:</span>
                <br />
                With a solid foundation in full-stack development, I excel at
                crafting innovative applications that seamlessly integrate
                Artificial Intelligence. My mission is to deliver robust,
                scalable, and efficient software solutions tailored to meet your
                business needs.
              </p>

              <p className="mb-4">
                🛠 <span className="text-black">Technical Expertise:</span>
                <br />
                <span className="text-black">Languages:</span> TypeScript,
                JavaScript
                <br />
                <span className="text-black">Frameworks:</span> Next.js,
                Tailwind CSS
              </p>
              <p className="mb-4 font-serif ">
                📬 Lets Collaborate: I am always excited to take on new
                projects, collaborations, and discussions. Lets connect and
                explore how we can work together to create something
                exceptional!
              </p>
              <p className="mb-4 font-serif ">
                Ready to elevate your web presence? Lets make it happen
                together!
              </p>
              <span className="text-black">Email:👇</span>
              <p className="mb-5 leading-relaxed font-serif  text-blue-500 hover:underline cursor-pointer">
                guujarmahnoor0312@gmail.com
              </p>
              <div className="flex justify-center">
                <a target="_blank" href={"/assests/cv/Profile (4).pdf"}>
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    View CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

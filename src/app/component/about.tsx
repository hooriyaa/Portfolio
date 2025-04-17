"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../../../public/assests/pictures/digital_girl_pic.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-8 md:py-24">
          <div
            className="lg:w-1/2 mb-10 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto w-[700px] h-[590px] rounded-full"
              alt="hero"
              width={500}
              height={400}
              src={aboutImage}
            />
          </div>
          <div
            className="lg:w-1/2 lg:pl-12 flex font-serif flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h1 className="title-font font-serif text-3xl md:text-5xl mb-4 font-bold text-gray-900">
              About
              <span className="text-3xl ml-3 md:text-5xl text-blue-700 font-serif font-bold">
                Me
              </span>
            </h1>
            <div className="mb-8 leading-relaxed">
              <p className="mb-4 font-serif">
                👋 Hello! I am
                <span className="text-black ml-2 font-serif">
                  Hooriya Muhammad Fareed
                </span>
              </p>
              <p className="mb-4">
                I am a passionate <strong>Frontend Developer</strong> with a
                strong eye for design and a growing interest in Generative AI 🚀. I love building modern,
                responsive, and scalable web experiences that bring ideas to
                life!
              </p>
              <p className="mb-4">
                🌟 Creative Developer & Tech Explorer
                <br />
                📚 Lifelong Learner Committed to Growth
                <br />
                🔧 Focused on Crafting Beautiful UI/UX
              </p>
              <p className="mb-4">
                💼 <span className="text-black">Professional Overview:</span>
                <br />
                I specialize in frontend development using cutting-edge tools to
                design sleek and user-friendly web applications. My focus is on
                performance, accessibility, and user-centered design.
              </p>
              <p className="mb-4">
                🛠 <span className="text-black">Technical Expertise:</span>
                <br />
                <span className="text-black">Languages:</span> TypeScript,
                JavaScript, Python
                <br />
                <span className="text-black">Frameworks & Libraries:</span>{" "}
                Next.js, Tailwind CSS, ShadCN UI, Framer Motion, Streamlit
                <br />
                <span className="text-black">Databases:</span> SQLite3
                <br />
                <span className="text-black">Tools:</span> Clerk, Sanity,
                Stripe, Figma
              </p>

              <div className="mb-4">
                <p>🚀 What I Offer:</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>Clean, maintainable, and scalable code</li>
                  <li>Seamless user experiences & fast load times</li>
                  <li>Mobile-first & responsive designs</li>
                  <li>UI animations and modern design aesthetics</li>
                  <li>AI-powered Interview Preparation Agent</li>
                  <li>Password Generator & Unit Converter tools</li>
                  <li>Conversational Chatbot features</li>
                  <li>User-friendly utility web apps using Python & Streamlit</li>
                </ul>
              </div>

              <p className="mb-4 font-serif">
                📬 Lets Collaborate: I am always open to exciting new projects,
                ideas, and teamwork. Lets connect and build something amazing
                together!
              </p>
              <p className="mb-4 font-serif">
                Ready to elevate your web presence? Lets make it happen!
              </p>
              <span className="text-black">Email:👇</span>
              <p className="mb-5 leading-relaxed font-serif text-blue-500 hover:underline cursor-pointer">
                guujarmahnoor0312@gmail.com
              </p>
              <div className="flex sm:justify-start justify-center">
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

"use client";
import Image from "next/image";
import image1 from "../../../public/assests/projects/facebook_login_page_clone.png";
import image2 from "../../../public/assests/projects/calculator.png";
import image3 from "../../../public/assests/projects/amazon_clone.png";
import image4 from "../../../public/assests/projects/e-commerce_website.png";
import image5 from "../../../public/assests/projects/blog-site.png";
import image6 from "../../../public/assests/projects/to-do-app.png";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl  text-5xl font-serif font-bold title-font mb-4 text-gray-900">
              My
              <span className=" text-5xl ml-3 text-blue-700 sm:text-5xl font-serif font-bold">
                Projects
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt=" Facebook Login Page Clone"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    Facebook Login Page Clone Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    Facebook login page clone
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    This project was all about honing my front-end skills and
                    focusing on the design aspects of web development:
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://facebook-login-page-clone-by-hooriya.netlify.app/"
                    }
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Calculator Web App"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    Calculator Web App Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    This project pushed my web dev skills and was a blast to
                    build! If you love coding or need a cool project idea,
                    building a calculator is a fantastic way to hone your skills
                    and create something awesome! 💪
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://calculator-by-hooriya-muhammad-fareed.netlify.app/"
                    }
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt=" Amazon Clone"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    Amazon Clone Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    Amazon Clone
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    I recreated the Amazon homepage using only HTML and CSS,
                    highlighting sleek design and responsive layouts. It is a
                    powerful example of what can be achieved with pure front-end
                    skills.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://amazon-clone-project-by-hooriya.netlify.app/"
                    }
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt=" E-commerce Website "
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    E-commerce Website Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    E-commerce Website
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    I developed an e-commerce platform that integrates product
                    data for seamless display and management. This includes
                    &apos;Add to Cart&apos; functionality and detailed product
                    pages, alongside API routes for efficient server-side
                    operations. The project leverages both static and dynamic
                    pages to ensure optimal performance.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://ecommerce-site-by-hooriya.netlify.app/"}
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt=" E-commerce Website "
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    Dynamic Multi-Page Blog Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    Dynamic Multi-Page Blog site
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    I developed a Multi-Page Blog using Next.js and Tailwind
                    CSS, featuring dynamic routing for seamless navigation and
                    an interactive comments section to boost user engagement.
                    This project highlights my skills in creating scalable,
                    responsive web applications with clean design.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://dynamic-blog-site-by-hooriya.netlify.app/"}
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3  sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt=" E-commerce Website "
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  src={image6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                    To-do App Project
                  </h2>
                  <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                    To-do App
                  </h1>
                  <p className="leading-relaxed font-serif line-clamp-3">
                    I built a To-Do App featuring add, edit, and delete
                    functionality for tasks. With optimized performance and a
                    clean, responsive design, this project showcases my ability
                    to create efficient, user-friendly applications.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://to-do-app-by-hooriya.netlify.app/"}
                  >
                    <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

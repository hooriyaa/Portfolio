import Image from "next/image";
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
            <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={require("../../../public/assests/projects/facebook_login_page_clone.png")}
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
            <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={require("../../../public/assests/projects/calculator.png")}
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
            <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src={require("../../../public/assests/projects/amazon_clone.jpg.png")}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

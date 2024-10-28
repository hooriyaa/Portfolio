"use client"
import { IoMdCheckboxOutline } from "react-icons/io";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init(({
     once:false,
    }))
 }, [])
  return (
    <div  id="Skills">
<section className="text-gray-600 body-font">
  <div data-aos="zoom-in" data-aos-duration="1000"   className="container px-5 py-19 mx-auto">
    <div className="flex flex-col font-serif  text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 font-serif  tracking-widest font-medium title-font mb-1">
      SKILLS
      </h2>
      <h1 className="sm:text-5xl text-5xl font-serif font-bold  title-font text-gray-900">
            My
            <span className="text-5xl text-blue-700 sm:text-5xl font-serif font-bold ml-[15px]">
              Skills
            </span>
          </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        {/* Skill */}
      <div className="p-4 md:w-1/3 font-serif">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">100%</p>
          </div>
        </div>
      </div>
        {/* Skill */}
      <div className="p-4 md:w-1/3 font-serif ">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">90%</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 font-serif">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Javascript/Typescript
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">85%</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 font-serif">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            NEXT.JS 
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">70%</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 font-serif">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            TAILWIND CSS
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">90%</p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 md:w-1/3 font-serif">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoMdCheckboxOutline className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            CANVA
            </h2>
          </div>
          <div className="flex-grow">
          <div className="relative h-1 w-full bg-gray-300 ">
                  <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]"></div>
                </div>
                <p className="font-bold text-blue-500 text-right">85%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  
  );
};

export default Skills;

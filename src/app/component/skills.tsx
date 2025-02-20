"use client";
import { IoMdCheckboxOutline } from "react-icons/io";

const skillsData = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "90%" },
  { name: "Javascript/Typescript", level: "85%" },
  { name: "NEXT.JS", level: "80%" },
  { name: "TAILWIND CSS", level: "90%" },
  { name: "CANVA", level: "85%" },
];

const Skills = () => {
  return (
    <div id="Skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-19 mx-auto">
          <div className="flex flex-col font-serif text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 font-serif tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font text-gray-900">
              My
              <span className="text-5xl text-blue-700 sm:text-5xl font-serif font-bold ml-[15px]">
                Skills
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="p-4 md:w-1/3 font-serif" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                      <IoMdCheckboxOutline className="text-xl font-bold" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300">
                      <div className="absolute bg-blue-500 h-1 rounded-xl" style={{ width: skill.level }}></div>
                    </div>
                    <p className="font-bold text-blue-500 text-right">{skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

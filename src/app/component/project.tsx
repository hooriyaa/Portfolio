"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Projects Data Array
const projects = [
  {
    image: "/assests/projects/facebook_login_page_clone.png",
    title: "Facebook Login Page Clone",
    description:
      "This project was all about honing my front-end skills and focusing on the design aspects of web development.",
    link: "https://facebook-login-page-clone-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/calculator.png",
    title: "Calculator Web App",
    description:
      " This project pushed my web dev skills and was a blast to build! If you love coding or need a cool project idea, building a calculator is a fantastic way to hone your skills and create something awesome! 💪",
    link: "https://calculator-by-hooriya-muhammad-fareed.netlify.app/",
  },
  {
    image: "/assests/projects/amazon_clone.png",
    title: "Amazon Clone",
    description:
      " I recreated the Amazon homepage using only HTML and CSS, highlighting sleek design and responsive layouts. It is a powerful example of what can be achieved with pure front-end skills.",
    link: "https://amazon-clone-project-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/e-commerce_website.png",
    title: "E-commerce Website",
    description:
      "  I developed an e-commerce platform that integrates product data for seamless display and management. This includes 'Add to Cart' functionality and detailed product pages, alongside API routes for efficient server-side operations. The project leverages both static and dynamic pages to ensure optimal performance.",
    link: "https://e-commerce-site-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/blog-site.png",
    title: "Dynamic Multi-Page Blog Site",
    description:
      "  I developed a Multi-Page Blog using Next.js and Tailwind CSS, featuring dynamic routing for seamless navigation and an interactive comments section to boost user engagement. This project highlights my skills in creating scalable, responsive web applications with clean design.",
    link: "https://dynamic-blog-site-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/resume_builder.jpeg",
    title: "Shareable Resume Builder",
    description:
      "  Created a Resume Builder using HTML, CSS, and JavaScript, featuring customizable templates that allow users to add, edit, and arrange sections for a professional resume. With a responsive design and PDF export functionality, this project showcases my skills in crafting intuitive, front-end applications.",
    link: "https://your-resume-builder-link.netlify.app/",
  },
  {
    image: "/assests/projects/hackathon_ecommerce.jpg",
    title: "Modern E-commerce Platform",
    description:
      "I developed an advanced e-commerce platform that integrates product data for seamless display and efficient management. Key features include 'Add to Cart' functionality, detailed product pages, and API routes for optimized server-side operations. The project leverages a mix of static and dynamic pages to ensure fast performance and scalability. Additionally, it integrates payment processing via Stripe, user authentication with Clerk, and real-time shipping updates with ShipEngine.",
    link: "https://portfolio-by-hooriya-muhammad-fareed.netlify.app/",
  },
  {
    image: "/assests/projects/ecommerce_admin_dashboard.jpg",
    title: "E-commerce Admin Dashboard",
    description:
      "A feature-rich admin dashboard designed to efficiently manage an e-commerce platform. Built with Next.js and Tailwind CSS, it offers real-time order tracking, product management, user analytics, and role-based authentication. The dashboard includes dynamic data visualization with Recharts, ensuring clear insights into sales and performance metrics.",
    link: "https://ecommerce-dashboard-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/agentic_world.jpg",
    title: "Agentic World Website",
    description:
      "This interactive platform is built with Next.js, Tailwind CSS, and ShadCN. It features a custom AI chatbot for enhanced user interaction, smooth animations powered by Framer Motion, and a fully responsive UI, ensuring a seamless and engaging experience.",
    link: "https://agentic-world-by-hooriya.netlify.app/",
  },
  {
    image: "/assests/projects/interview_prep_agent.jpg",
    title: "Interview Preparation Agent",
    description:
      "I created an AI-powered Interview Preparation Agent using OpenAI Agents SDK, Gemini AI, and Streamlit. It provides real-time, intelligent answers to mock interview questions and helps users improve their communication skills in a fun and interactive way.",
    link: "https://interview-prep-agent-by-hooriya.streamlit.app/",
  },
];

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font mb-4 text-gray-900">
              My
              <span className="text-5xl ml-3 text-blue-700 sm:text-5xl font-serif font-bold">
                Projects
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div className="flex relative">
                  <Image
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    src={project.image}
                    width={500}
                    height={300}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed font-serif line-clamp-3">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </Link>
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

export default Project;

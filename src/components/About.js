import React from "react";
import colors from 'tailwindcss/colors'


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Stephany.
            <div></div>
            <br className="hidden lg:inline-block text-lg" /> A software engineer fueled by a drive to grow and conquer challenges through code
            </h1>
           <div></div>
          <p className="mb-8 leading-relaxed">
            I believe in continuous learning and staying up-to-date with the latest advancements in the tech world. This drive for knowledge fuels my desire to grow as a software engineer and provide cutting-edge solutions to meet the demands of our ever-evolving digital landscape.

            Feel free to explore my portfolio to get a glimpse of my work and the projects I've worked on.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className= "inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className= "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
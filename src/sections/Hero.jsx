import React from 'react';
import profile from '../assets/images/profile.png';
import react from '../assets/images/physics.png';
import js from '../assets/images/js.png';
import java from '../assets/images/java.png';
import html from '../assets/images/html-5.png';
import profile2 from '../assets/images/Profilepic.png';
import profile3 from '../assets/images/profile3.png';
import { STATS } from '../utils/data';
import StatInfoCard from '../components/statInfoCard';

const Hero = () => {
  return (
    <section id="hero" className='container mx-auto px-5 md:px-8 py-12 lg:py-20'>
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between'>
        <div className='order-2 lg:order-1 text-center lg:text-left'>
          <h3 className='text-xl lg:text-2xl font-medium text-gray-800 mt-10 lg:mt-[20px]'>👋 Hi, I'm Bharat Jawa</h3>
          <h1 className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600'>
            Building Scalable & User Centric Web Apps
          </h1>
          <p className='w-full lg:w-[500px] text-gray-600 text-sm lg:text-base mt-4'>
            I'm a passionate Full Stack Developer crafting responsive, accessible, and dynamic web experiences using React, Node.js, and TailwindCSS
          </p>
          <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-8'>
            <a
              href="https://github.com/Bharatjawa2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-12 px-6 text-sm md:text-base font-medium text-amber-900 rounded-full border-2 border-amber-900 transition-all duration-300 hover:scale-105 hover:shadow-md text-center leading-[3rem]"
            >
              View my Work
            </a>

            <a
              href="https://drive.google.com/file/d/1hbdZWdXHBnNNtJqe7YmVVs9zcnalCgBV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block h-12 px-6 text-sm md:text-base font-medium text-white bg-gradient-to-r from-amber-700 to-amber-900 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md text-center leading-[3rem]">
              Download Resume
            </a>

          </div>
        </div>

        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2'>
          <img
            src={profile2}
            alt="Profile"
            className='w-full h-full object-cover rotate-[5.75deg] transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-[3deg] rounded-3xl'
          />
          {/* Tech Icons */}
          <img
            src={react}
            alt="React"
            className='w-12 md:w-16 h-12 md:h-16 absolute transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-0 -left-10 bottom-20 rotate-[15deg]'
          />
          <img
            src={js}
            alt="JavaScript"
            className='w-12 md:w-16 h-12 md:h-16 absolute transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-0 left-5 md:left-10 -bottom-6 rotate-[10deg]'
          />
          <img
            src={java}
            alt="Java"
            className='w-12 md:w-16 h-12 md:h-16 absolute transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-0 left-[110px] md:left-[150px] -bottom-12 rotate-[5deg]'
          />
          <img
            src={html}
            alt="HTML"
            className='w-12 md:w-16 h-12 md:h-16 absolute transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-0 right-5 md:right-10 -bottom-15 rotate-[8deg]'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24'>
        {STATS.map((item) => (
          <StatInfoCard
            key={item.id}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
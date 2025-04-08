import React from 'react';
import PROFILE_PIC from "../assets/images/profile2.png";
import { ABOUT_ME } from '../utils/data';

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      
      {/* About heading for small screens */}
      <h4 className="block lg:hidden text-4xl font-bold leading-[50px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-left mb-10">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">

        {/* Image first on small screens, second on large */}
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-1">
          <img
            src={PROFILE_PIC}
            alt="Profile_pic"
            className="w-full h-full object-cover rotate-[5.75deg] transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-[3deg] rounded-3xl"
          />
        </div>

        {/* Content second on small screens, first on large */}
        <div className="flex-1 order-2 lg:order-2">
          {/* About heading for large screens */}
          <h4 className="hidden lg:block text-5xl font-bold leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-left">
            About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>

          <div className='flex gap-4 mt-6'>
            {ABOUT_ME.socailLinks.map((item)=>(
              <a 
              key={item.label} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='cursor-pointer group'>
                <item.icon className='text-2xl text-[#d68a39] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-[#917254]'/>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;

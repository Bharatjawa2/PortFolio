import React, { useState } from 'react'
import { SKILLS, SKILLS_TABS } from '../utils/data';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import {motion} from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData,setTabData]=useState(SKILLS);
  const [activeTab,setActiveTab]=useState("all");

  const handleTabValueChange=(value)=>{
    if(value==="all"){
      setTabData(SKILLS)
      setActiveTab("all")
      return;
    }
    const updatedList=SKILLS.filter((skill)=>skill.type===value)
    setTabData(updatedList)
    setActiveTab(value);
  }
  return (
    <section id="skills" className='bg-white py-16 md:py-20'>
      <div className='container mx-auto px-5 md:px-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h4 className='text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800'>
            Technical Proficiency
          </h4>
          <p className='text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose'>
            A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, 
            dedicated to building efficient, scalable, and user-centric solutions. With strong problem-solving 
            skills and a passion for clean code, I bridge the gap between functionality and seamless 
            user experiences.
          </p>
        </div>

        <Tabs
          tabList={SKILLS_TABS}
          activeTab={activeTab}
          onchange={handleTabValueChange}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]'>
          {tabData.map((skill,index)=>(
            <motion.div
             key={skill.id}
             initial={{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.4,delay:index*0.1}}
             >
              <SkillCard
                icon={<skill.icon className='w-6 h-6 text-[#d68a39]'/>}
                skillname={skill.skillname}
                description={skill.description}
                progress={skill.progress}
                />
                </motion.div>
          ))}
          </div>
      </div>
    </section>
  )
}

export default TechnicalProficiency
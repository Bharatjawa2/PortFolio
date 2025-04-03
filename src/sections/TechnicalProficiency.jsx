import React from 'react'

const TechnicalProficiency = () => {
  return (
    <section id="skills" className='bg-white py-16 md:py-20'>
      <div className='container mx-auto px-5 md:px-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Gradient Heading */}
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800'>
            Technical Proficiency
          </h2>

          {/* Professional Summary */}
          <p className='text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose'>
            A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, 
            dedicated to building efficient, scalable, and user-centric solutions. With strong problem-solving 
            skills and a passion for clean code, I bridge the gap between functionality and seamless 
            user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalProficiency
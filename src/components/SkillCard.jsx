import React from 'react'

const SkillCard = ({icon,skillname,description,progress}) => {
  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-4'>
        <div className='flex gap-4'>
            <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-xl'>{icon}</div>
            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <p className='text-[13px] text-black font-medium'>{skillname}</p>
                    <p className='text-xs text-[#d68a39] font-medium'>{progress}%</p>
                </div>

                <div className='w-full bg-white rounded-md h-[5px] relative mt-2'>
                    <div className='bg-[#d68a39] h-[5px] rounded-md' style={{width:`${progress}%`}}>

                    </div>
                </div>
            </div>
        </div>
        <p className='text-xs text-gray-600 text-justify leading-5 mt-2'>{description}</p>
    </div>

  )
}

export default SkillCard
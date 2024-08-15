import React, { useState } from 'react'
import { diarybook, equipmentsgym, union, vision } from '../../assets'

function Story () {
    const [activeTab, setActiveTab] = useState('story'); // Initialize activeTab with 'story'

    const tabWidths = {
        story: '0%',    // Starting position for "Our Story"
        vision: '30%', // Starting position for "Our Vision"
        values: '61%'  // Starting position for "Our Values"
    };
  return (
    <section>
        <div>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Story, Vision and Values</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>The driving force behind US</h2>
        </div>

    <div>
        <div>
            {/* Tab Headers */}
            <div className='flex items-center justify-items-center lg:justify-center justify-center gap-5 lg:gap-48 lg:px-20 mt-5'>
        <h1 
          className={`cursor-pointer lg:text-[20px] text-[12px] flex items-center gap-2 ${activeTab === 'story' ? 'text-[#8C5B00]' : 'text-[#1B1B1B]'}`} 
          onClick={() => setActiveTab('story')}
        >
          <img src={diarybook} alt="" /> Our Story
        </h1>
        <h1 
          className={`cursor-pointer lg:text-[20px] text-[12px] flex items-center gap-2 ${activeTab === 'vision' ? 'text-[#8C5B00]' : 'text-[#1B1B1B]'}`} 
          onClick={() => setActiveTab('vision')}
        >
          <img src={vision} alt="" /> Our Vision
        </h1>
        <h1 
          className={`cursor-pointer lg:text-[20px] text-[12px] flex items-center gap-2 ${activeTab === 'values' ? 'text-[#8C5B00]' : 'text-[#1B1B1B]'}`} 
          onClick={() => setActiveTab('values')}
        >
          <img src={union} alt="" /> Our Values
        </h1>
      </div>

      {/* Tab Indicator */}
        <div className='lg:pl-20 mt-3 flex items-center'>
            <div className='relative w-full'>
            {/* Static background */}
            <div className='absolute lg:w-[1092px] w-[290px] h-[10px] bg-[#D0D5DD] rounded-r-full rounded-l-full'></div>
            {/* Moving tab background */}
            <div 
                className='absolute h-[10px] bg-[#FFA500] rounded-r-full rounded-l-full transition-all duration-500' 
                style={{
                width: '33.33%', 
                left: tabWidths[activeTab]
                }}
            ></div>
            </div>
        </div>
    </div>
    </div>
    <div>
        <div className='grid lg:grid-cols-2 mt-10 mb-10'>
            <img src={equipmentsgym} alt="" className='lg:pl-20'/>
            <div>
                <h1 className='lg:text-[24px] text-[20px] lg:mt-0 mt-5 font-semibold text-[#1B1B1B]'>We are more than just a GYM.</h1>
                <p className='text-[16px] font-normal line leading-loose text-[#3E3838]'>At <span className='font-semibold text-[#1b1b1b]'>FITFORM</span>, our story begins with a shared passion for fitness and a <br className='lg:block hidden'/> deep-rooted commitment to transforming lives. Founded by Esosa <br className='lg:block hidden'/> Imunee in 2015, our journey started with a simple yet powerful vision: to <br className='lg:block hidden'/> create a welcoming space where individuals of all backgrounds could <br className='lg:block hidden'/> come together to pursue their fitness goals and embark on a journey of <br className='lg:block hidden'/> self-discovery.</p>
                <p className='text-[16px] font-normal mt-2 text-[#3E3838] leading-loose'>We embarked on a mission to provide more than just a gym—we aimed to <br className='lg:block hidden'/> cultivate a supportive environment where members could thrive <br className='lg:block hidden'/> physically, mentally, and emotionally.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Story
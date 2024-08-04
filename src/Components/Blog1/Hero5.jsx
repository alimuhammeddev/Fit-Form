import React, {useState} from 'react'
import { arrowright, arrrowleft, beginners, calendar, eventsrecap, fitnesstrend, knowledge, knowledge2, leftarrow, motivation, nutrition, nutrition2, pentool, rightarrow, successstories } from '../../assets';
import { Link } from 'react-router-dom';

const Hero5 = () => {

    const [activeDay, setActiveDay] = useState('All');
    const days = ['All', 'Beginners', 'Knowledge', 'Events Recap', 'Motivation', 'Nutrition', 'Sucess Stories', 'Fitness Trends'];

  return (
    <section>
      <div>
        <h1 className='text-[#1B1B1B] font-semibold text-[40px] text-center'>Blog categories</h1>
      </div>

      <div className="flex flex-wrap gap-3 gap-x-6 mt-5 pl-24">
        {days.map((day,) => (
          <React.Fragment key={day}>
            <div>
              <button
                onClick={() => setActiveDay(day)}
                className={`w-[240px] h-[80px] ${
                  activeDay === day ? 'bg-[#FFA500]' : 'bg-[#FFF6E6CC]'
                }`}
              >
                {day}
              </button>
            </div>
            {day === 'Events Recap' && <div className="w-full"></div>}
          </React.Fragment>
        ))}
      </div>
        
        <div className='grid lg:grid-cols-3 gap-8 mt-10'>
          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={nutrition} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full rounded-Tz-full'>
                        NUTRITION
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Felicia Tilman</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" /> 1 March, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Nutrition 101: A Beginner's Guide to Healthy Eating</h1>
                    <div className='mt-5 text-right'>
                        <Link to="/blog-nutrition" className='text-[#E89600] lg:text-[20px]'>Learn More...</Link>
                    </div>
                </div>
          </div>


          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={successstories} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                        SUCCESS STORIES
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Hari Haryanto </h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />28 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Learn from Elizabeth John’s Fitness Journey</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={fitnesstrend} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    FITNESS TRENDS
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Bella De Jon</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />26 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Home Gym: Tips for Putting Your Own Workout Space</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={eventsrecap} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    EVENTS RECAP
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Fatima Chidubem</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />25 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Balancing Act: Prioritizing Fitness in a Busy Lifestyle</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={beginners} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    BEGINNERS
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Antonia Romero</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />20 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>10 Essential Tips for Starting Your Fitness Journey</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={knowledge} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    FITNESS TRENDS
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Mariam Mambwe</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />12 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Power of HIIT: High-Intensity Interval Training Explained</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={motivation} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    MOTIVATION
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />William Brown</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />18 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Mind Over Matter: Overcoming Mental Blocks</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={knowledge2} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    KNOWLEDGE
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Camila Castro</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />18 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Fitness Myths Debunked: Separating Fact from Fiction</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>

          <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                <div className='relative'>
                    <img src={nutrition2} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-3 px-8 text-[16px] rounded-ee-full'>
                    NUTRITION
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Laden Shariq</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" />17 February, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Nutrition 102: Some Things You Should Avoid</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
          </div>
        </div>
        <div className='mt-10 pb-20 flex items-center gap-5 justify-center'>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 w-fit'><img src={leftarrow} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 w-fit'><img src={arrowright} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E89600] cursor-pointer text-[#E89600] p-4 px-6 w-fit'>1</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 px-6 w-fit'>2</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 px-6 w-fit'>3</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 w-fit'><img src={arrrowleft} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] cursor-pointer p-4 w-fit'><img src={rightarrow} alt="" /></h1>  
        </div>
    </section>
  )
}

export default Hero5
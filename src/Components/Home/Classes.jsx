import React from 'react'
import { cardio, cycling, dance, looper, pilates, strength, yoga } from '../../assets';

const Classes = () => {
    const headingStyle = {
        fontFamily: 'Bungee Outline, sans-serif',
      };
  return (
    <section className='bg-[#ffffff] w-full relative'>
        <div>
            <h1 style={headingStyle} className='text-[#396BAA] md:text-[80px] text-[35px]'>Classes</h1>
        </div>
        <div>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Classes</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>We are available if you need recommendation</h2>
        </div>

        <div className='grid lg:grid-cols-3 lg:-ml-5 lg:gap-0 gap-5'>
            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={cardio} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Cardio Blast</h1>
                    <p className='text-[#3E3838] text-[16px]'>The cardio workout was designed to improve <br className='lg:block hidden'/> endurance, burn calories and increase...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={yoga} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Yoga</h1>
                    <p className='text-[#3E3838] text-[16px]'>Classes ranging from gentle to advanced, focusing on flexibility, balance, relaxation...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={pilates} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Pilates</h1>
                    <p className='text-[#3E3838] text-[16px]'>Core-focused workouts that strengthen and lengthen muscles, improve posture...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4 z-10'>
                <img src={strength} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Strength Training</h1>
                    <p className='text-[#3E3838] text-[16px]'>Resistance-based workouts focusing on building muscle strength, tone, and ...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={cycling} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Spinning/Circling</h1>
                    <p className='text-[#3E3838] text-[16px]'>Indoor cycling classes led by certified trainers, incorporating interval training, hill ...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={dance} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Dance Fitness</h1>
                    <p className='text-[#3E3838] text-[16px]'>Fun and energetic dance-based workouts set to upbeat music, combining Latin rhythms...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolut bottom-0 left-0 -mt-40 -ml-28 lg:block hidden'>
            <img src={looper} alt="" />
        </div>
        <div className='mx-auto flex justify-center mt-10'>
            <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] lg:w-[220px] lg:p-0 p-3 lg:px-0 px-7 lg:h-[67px] font-semibold'>See all</button>
        </div>
    </section>
  )
}

export default Classes
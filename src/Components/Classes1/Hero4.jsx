import React from 'react'
import { barre, cardio, cycling, dance, intensity, meditation, pilates, strength, yoga } from '../../assets'

const Hero4 = () => {
  return (
    <section>
        <div>
            <h1 className='lg:text-[40px] text-[30px] font-semibold text-[#1B1B1B] text-center'>Explore Our Fitness Classes</h1>
        </div>

        <div className='grid lg:grid-cols-3 lg:-ml-5 lg:gap-0 gap-5 lg:mt-0 mt-5'>
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

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={meditation} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Meditation</h1>
                    <p className='text-[#3E3838] text-[16px]'>Classes focusing on mindfulness practices, meditation techniques, and relaxation ...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={barre} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Barre</h1>
                    <p className='text-[#3E3838] text-[16px]'>Classes focusing on mindfulness practices, meditation techniques, and relaxation ...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={intensity} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>High-Intensity Interval Training</h1>
                    <p className='text-[#3E3838] text-[16px]'>Short bursts of intense exercise followed by brief rest periods, aimed at maximizing ...</p>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero4
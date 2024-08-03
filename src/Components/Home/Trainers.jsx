import React from 'react'
import { nathan, rating, sharon, shola, star } from '../../assets';

const Trainers = () => {
    const headingStyle = {
        fontFamily: 'Bungee Outline, sans-serif',
      };
  return (
    <section>
       <div>
            <h1 style={headingStyle} className='text-[#396BAA] md:text-[80px] text-right lg:mr-6'>Trainers</h1>
        </div> 
        <div>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Trainers</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Selected for You...</h2>
        </div>

        <div className='relative bg-cover bg-center'>
            <img src={star} alt="Star" className="absolute top-0 left-0 m-4 mt-28 -ml-[100px]" />
            <img src={star} alt="Star" className="absolute top-0 right-0 m-4 mt-28 lg:-mr-[65px]" />

            <div className='grid lg:grid-cols-3 lg:gap-0 gap-5 lg:-ml-7'>
            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4 z-10'>
                <img src={shola} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Shola Oyerinde</h1>
                    <img src={rating} alt="" />
                    <p className='text-[#1B1B1B] font-semibold text-[16px] mt-3'>Specialization:</p>
                    <p className='text-[#3E3838] text-[16px]'>Cardio blast, Strength building, Dance fitness</p>  
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <img src={nathan} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Nathan Miles</h1>
                    <img src={rating} alt="" />
                    <p className='text-[#1B1B1B] font-semibold text-[16px] mt-3'>Specialization:</p>
                    <p className='text-[#3E3838] text-[16px]'>Strength building, Barre, Dance fitness, Yoga</p>  
                </div>
            </div>

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4 z-10'>
                <img src={sharon} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Sharon Emu</h1>
                    <img src={rating} alt="" />
                    <p className='text-[#1B1B1B] font-semibold text-[16px] mt-3'>Specialization:</p>
                    <p className='text-[#3E3838] text-[16px]'>Strength building, Barre, Dance fitness, Yoga</p>  
                </div>
            </div>
            </div>
        </div>
        <div className='mx-auto flex justify-center mt-5'>
            <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] lg:w-[220px] lg:h-[67px] font-semibold'>See all Trainers</button>
        </div>
    </section>
  )
}

export default Trainers
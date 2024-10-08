import React from 'react'
import { burstpucker2, nathan, rating, sharon, shola, tachaemu } from '../../assets'

const Trainers2 = () => {
  return (
    <section>
        <div className='lg:mt-0 mt-5'>
            <h1 className='text-[#1B1B1B] text-[16px] gap-5 text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2 flex items-center mx-auto justify-center lg:gap-10 lg:pl-28'>Our Trainers <img src={burstpucker2} alt="" className='w-10'/></h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Selected for YOU...</h2>
        </div>

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

            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4 z-10'>
                <img src={tachaemu} alt="" />
                <div className='p-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Tacha Emu</h1>
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
    </section>
  )
}

export default Trainers2
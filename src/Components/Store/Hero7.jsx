import React from 'react'
import { nathan, rating, stars4, storehero, yogaoutfit } from '../../assets'

const Hero7 = () => {
  return (
    <section>
        <div className="relative">
            <img src={storehero} alt="" className="w-full" />
            <div className="absolute inset-0 bg-[#000B194D] opacity-100"></div>
            <div className="absolute inset-0 items-center justify-center mt-44">
                <h1 className="text-[#ffffff] text-center text-[40px] font-semibold">Elevate your fitness style by shopping <br className='lg:block hidden'/> from us!</h1>
                <p className='text-[#ffffff] text-center text-[20px]'>Our stylish wears ensures you look and feel your best, whether you're hitting <br /> the gym or breaking a sweat at home. Shop now and unleash your potential!</p>
                <div className='mt-5 justify-center mx-auto flex'>
                    <button className='text-[#1B1B1B] text-[20px] font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>Shop Now</button>
                </div>
            </div>
        </div>

        <div>
            <div>
                <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Recent Bestsellers</h1>
                <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Don’t Miss it!</h2>
            </div>

            <div className='grid lg:grid-cols-3 gap-10 pl-1'>
                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={yogaoutfit} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Yoga Outfits 2 Piece Workout Crop Top with High Waist Running Shorts</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦18,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦15,500</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(29 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>4 Items left!</p> 
                    </div>
                </div>
                <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                    <img src={nathan} alt="" />
                    <div className='p-3'>
                        <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Nathan Miles</h1>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] font-semibold text-[16px] mt-3'>Specialization:</p>
                        <p className='text-[#3E3838] text-[16px]'>Strength building, Barre, Dance fitness, Yoga</p>  
                    </div>
                </div>
                <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md'>
                    <img src={nathan} alt="" />
                    <div className='p-3'>
                        <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Nathan Miles</h1>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] font-semibold text-[16px] mt-3'>Specialization:</p>
                        <p className='text-[#3E3838] text-[16px]'>Strength building, Barre, Dance fitness, Yoga</p>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero7
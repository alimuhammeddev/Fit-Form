import React from 'react'
import { alarmclock2, dedicate, looper2, playcircle } from '../../assets'

const Prompt2 = () => {
  return (
    <section className='pb-10'>
        <div className='grid lg:grid-cols-2 gap-5'>
            <div className='mt-10'>
                <h1 className='text-[#1B1B1B] text-[16px] font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Ready to transform?</h1>
                <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold'>Start your journey today!</h2>
                <p className='text-[#3E3838] text-[16px] leading-loose'>Whether you're looking to shed those extra pounds, build lean muscle, or <br /> simply improve your overall health and well-being, our fitness center <br /> provides the perfect platform to kickstart your goals. <br />
                Join us and start your journey towards a fitter, stronger, and more <br /> confident you!</p>
                <div className='mx-auto mt-5'>
                    <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] p-2 lg:w-[220px] lg:h-[67px] font-semibold'>Get Started</button>
                </div>
            </div>
            <div>
                <div className='relative pr-6'>
                    <img src={dedicate} alt="" />
                    <div className='absolute top-0 left-0 m-2 text-white bg-[#1B1B1B26] rounded-full backdrop-blur-md'>
                        <h1 className='text-[#ffffff] text-[16px] flex items-center gap-1 p-1'><img src={alarmclock2} alt="" /> 01:20</h1>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                        <img src={playcircle} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Prompt2
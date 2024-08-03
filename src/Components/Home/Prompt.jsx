import React from 'react'
import { manbuilding } from '../../assets'

const Prompt = () => {
  return (
    <section>
        <div className="relative">
        <img src={manbuilding} alt="" className="w-fit" />
        <div className="absolute top-0 left-0 lg:p-7 p-3 bg-[#1B1B1B40] backdrop-blur-md lg:mt-12 mt-1 ml-10">
            <h1 className="lg:text-[40px] text-[#FFFFFF] font-semibold">Unlock your full potential <br /> with us</h1>
            <p className="mt-2 lg:text-[20px] text-[#FFFFFF]">Let’s embark on a thrilling journey towards a <br /> healthier, happier, and more vibrant life.</p>
            <div className='mx-auto mt-5'>
            <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] p-2 lg:w-[220px] lg:h-[67px] font-semibold'>Get Started</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Prompt
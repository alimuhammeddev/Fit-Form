import React from 'react'
import { communitygroup, dumbbellgym, lottery, vcard } from '../../assets'

const Choose = () => {
  return (
    <section>
        <div className='lg:mt-0 mt-5'>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Why Choose US?</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Benefits of joining US</h2>
        </div>

        <div className='flex flex-wrap gap-10 justify-center mt-10'>
            <div className='bg-[#ffffff] shadow-lg border border-[#B7AFAF33] p-5 lg:w-[468px] lg:h-[198px]'>
                <img src={vcard} alt="" />
                <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Flexible Membership Options</h1>
                <p className='text-[#3E3838] text-[16px] leading-loose'>Choose from a variety of membership plans to suit your <br /> lifestyle and budget, with trainers, group classes, and <br /> additional amenities.</p>
            </div>
            <div className='bg-[#ffffff] shadow-lg border border-[#B7AFAF33] p-5 lg:w-[468px] lg:h-[198px]'>
                <img src={dumbbellgym} alt="" />
                <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Flexible Membership Options</h1>
                <p className='text-[#3E3838] text-[16px] leading-loose'>Choose from a variety of membership plans to suit your lifestyle and budget, with trainers, group classes, and additional amenities.</p>
            </div>
            <div className='bg-[#ffffff] shadow-lg border border-[#B7AFAF33] p-5 lg:w-[468px] lg:h-[198px]'>
                <img src={communitygroup} alt="" />
                <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Flexible Membership Options</h1>
                <p className='text-[#3E3838] text-[16px] leading-loose'>Choose from a variety of membership plans to suit your lifestyle and budget, with trainers, group classes, and additional amenities.</p>
            </div>
            <div className='bg-[#ffffff] shadow-lg border border-[#B7AFAF33] p-5 lg:w-[468px] lg:h-[198px]'>
                <img src={lottery} alt="" />
                <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Flexible Membership Options</h1>
                <p className='text-[#3E3838] text-[16px] leading-loose'>Choose from a variety of membership plans to suit your lifestyle and budget, with trainers, group classes, and additional amenities.</p>
            </div>
        </div>
    </section>
  )
}

export default Choose
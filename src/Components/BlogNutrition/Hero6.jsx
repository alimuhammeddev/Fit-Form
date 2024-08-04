import React from 'react'
import { calendar, nutritionhero, pentool, pentool3 } from '../../assets'

const Hero6 = () => {
  return (
    <section>
        <div>
            <h1 className='text-center text-[#514A4A] text-[12px]'>Home - Blog - Blog Single</h1>
            <h2 className='text-[#1B1B1B] font-semibold lg:text-[40px] text-center'>Blog</h2>
        </div>

        <div className='mt-10'>
            <h1 className='text-[16px] text-[#0071FE] underline decoration-[#0071FE] decoration'>NUTRITION</h1>
            <h2 className='text-[#1B1B1B] text-[32px] font-semibold mt-2'>Nutrition 101: <br /> A Beginner's Guide to Healthy Eating</h2>
            <div className='leading-loose mt-3'>
                <h1 className='flex items-center text-[20px] text-[#514A4A] gap-[3px]'><img src={pentool3} alt=""/>Felicia Tilman</h1>
                <h1 className='flex items-center text-[14px] text-[#787070] gap-[3px]'><img src={calendar} alt="" /> 1 March, 2024</h1>
            </div>
        </div>

        <div className='mt-5'>
            <img src={nutritionhero} alt="" />
        </div>

        <div>
            <div>
                <h1 className='text-[#0071FE] text-[16px]'>POINTS...</h1>
                <div className='space-y-5'>
                    <p className='text-[#1B1B1B] font-semibold text-[16px] mt-1 underline decoration-[#787070] decoration'>Incorporating Whole Foods</p>
                    <p className='text-[#645D5D] text-[16px]'>Choosing Healthy Fats</p>
                    <p className='text-[#645D5D] text-[16px]'>Balancing Macronutrients</p>
                    <p className='text-[#645D5D] text-[16px]'>Hydration and Mindful Eating</p>
                    <p className='text-[#645D5D] text-[16px]'>Conclusion</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero6
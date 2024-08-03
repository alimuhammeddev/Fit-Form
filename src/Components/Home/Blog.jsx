import React from 'react'
import { beginners, calendar, knowledge, nutrition, pentool, } from '../../assets';

const Blog = () => {
    const headingStyle = {
        fontFamily: 'Bungee Outline, sans-serif',
      };
    
  return (
    <section>
        <div>
            <h1 className="text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-8 decoration-[#0071FE] decoration-2">
            Blog
            </h1>
            <h2 className="text-[#1B1B1B] lg:text-[40px] font-semibold text-center">
            Tips, Insights, and Inspiration
            </h2>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-5 lg:-ml-[430px] lg:mt-0 mt-5'>
        <div>
            <h1 style={headingStyle} className="text-[#396BAA] md:text-[62px] text-right lg:-mt-40">
                J <br /> o <br />i <br /> n <br /> <br /><span>U <br /> s </span>           
            </h1>
        </div>
            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <div className='relative'>
                    <img src={nutrition} alt=""  className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-2 px-8 text-[18px] rounded-ee-full'>
                        Nutrition
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Felicia Tilman</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" /> 1 March, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Nutrition 101: A Beginner's Guide to Healthy Eating</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <div className='relative'>
                    <img src={beginners} alt="" className='w-full' />
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-2 px-8 text-[18px] rounded-ee-full'>
                        Beginners
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Antonia Romero</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" /> 5 March, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>10 Essential Tips for Starting Your Fitness Journey</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffffff] max-w-sm overflow-hidden shadow-md lg:m-4'>
                <div className='relative'>
                    <img src={knowledge} alt="" className='w-full'/>
                    <div className='absolute top-0 left-0 bg-[#396baa] font-medium text-white p-2 px-8 text-[18px] rounded-ee-full'>
                        Knowledge
                    </div>
                </div>
                <div className='p-3'>
                    <div className='flex items-center gap-7'>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={pentool} alt="" />Mariam Mambwe</h1>
                        <h1 className='flex items-center text-[14px] text-[#8D8484] gap-[3px]'><img src={calendar} alt="" /> 7 March, 2024</h1>
                    </div>
                    <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold mt-2'>Power of HIIT: High-Intensity Interval Training Explained</h1>
                    <div className='mt-5 text-right'>
                        <a href="#" className='text-[#E89600] lg:text-[20px]'>Learn More...</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto flex justify-center mt-5'>
            <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] lg:w-[220px] lg:h-[67px] font-semibold'>All Blogs</button>
        </div>
    </section>
  )
}

export default Blog
import React from 'react'
import { diarybook, equipmentsgym, union, vision } from '../../assets'

const Story = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Story, Vision and Values</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>The driving force behind US</h2>
        </div>

        <div className='grid lg:grid-cols-3 justify-items-center px-20 mt-5'>
            <h1 className='text-[#8C5B00] text-[20px] flex items-center gap-2'><img src={diarybook} alt="" /> Our Story</h1>
            <h1 className='text-[#1B1B1B] text-[20px] flex items-center gap-2'><img src={vision} alt="" /> Our Visions</h1>
            <h1 className='text-[#1B1B1B] text-[20px] flex items-center gap-2'><img src={union} alt="" /> Our Values</h1>
        </div>

        <div className='pl-20 mt-3 flex items-center'>
            <h1 className='bg-[#FFA500] w-[370px] h-[10px] rounded-r-full rounded-l-full'></h1>
            <h1 className='bg-[#D0D5DD] w-[370px] h-[10px] rounded-r-full -ml-[1.2px]'></h1>
            <h1 className='bg-[#D0D5DD] w-[370px] h-[10px] rounded-r-full rounded-l-full -ml-5'></h1>
        </div>

        <div>
        <div className='grid lg:grid-cols-2 mt-10 mb-10'>
            <img src={equipmentsgym} alt="" className='pl-20'/>
            <div>
                <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>We are more than just a GYM.</h1>
                <p className='text-[16px] font-normal line leading-loose text-[#3E3838]'>At <span className='font-semibold text-[#1b1b1b]'>FITFORM</span>, our story begins with a shared passion for fitness and a <br /> deep-rooted commitment to transforming lives. Founded by Esosa <br /> Imunee in 2015, our journey started with a simple yet powerful vision: to <br /> create a welcoming space where individuals of all backgrounds could <br /> come together to pursue their fitness goals and embark on a journey of <br /> self-discovery.</p>
                <p className='text-[16px] font-normal mt-2 text-[#3E3838] leading-loose'>We embarked on a mission to provide more than just a gym—we aimed to <br /> cultivate a supportive environment where members could thrive <br /> physically, mentally, and emotionally.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Story
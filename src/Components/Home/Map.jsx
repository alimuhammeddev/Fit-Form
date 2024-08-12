import React from 'react'
import { alarmclock, calender03, fullmap } from '../../assets'

const Map = () => {
  return (
    <section>
        <div className='inline-flex items-center gap-5 border border-[#CDC4C4] w-fit p-2'>
            <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Map</h1>
            <div className='w-px h-7 bg-[#FBF1F1]'></div>
            <h1 className='text-[#98A2B3] text-[20px]'>satelite</h1>
        </div>

        <div className='flex items-center lg:flex-row flex-col lg:gap-5 gap-5'>
            <div>
                <img src={fullmap} alt="" className='mt-10'/>
            </div>
            <div className='bg-[#ffffff] p-3 shadow-lg lg:w-[463px] lg:h-[382px] border border-[#FFF6E6] lg:mt-10'>
                <div className='space-y-2'>
                    <h1 className='lg:text-[20px] font-semibold text-[#1B1B1B]'>Main Office</h1>
                    <p className='text-[14px] text-[#3E3838]'>30 Affisbi, Drioeyrm, Ikeja, Lagos State</p>
                    <p className='text-[#787070] text-[14px]'>(234) 70 5155 0104</p>
                    <p className='text-[#787070] text-[14px]'>(234) 70 5155 0117</p>
                    <h2 className='text-[14px] text-[#787070] flex items-center gap-2'><img src={alarmclock} alt="" /> 5am- 10pm</h2>
                    <h2 className='text-[14px] text-[#787070] flex items-center gap-2'><img src={calender03} alt="" />Sun - Sat</h2>
                </div>
                <h1 className='border border-[#FFD68A66] mt-2'></h1>
                <div className='space-y-2'>
                    <h1 className='lg:text-[20px] font-semibold text-[#1B1B1B] mt-1'>Branch Office</h1>
                    <p className='text-[14px] text-[#3E3838]'>04 Laun Street, Alausa, Ikeja, Lagos State</p>
                    <p className='text-[#787070] text-[14px]'>(234) 70 5333 0105</p>
                    <p className='text-[#787070] text-[14px]'>(234) 70 2173 0113</p>
                    <h2 className='text-[14px] text-[#787070] flex items-center gap-2'><img src={alarmclock} alt="" /> 5am- 10pm</h2>
                    <h2 className='text-[14px] text-[#787070] flex items-center gap-2'><img src={calender03} alt="" />Sun - Sat</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map
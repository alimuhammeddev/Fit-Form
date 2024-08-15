import React from 'react'
import { alarmclock, calender03, contactimage, fullmap } from '../../assets'

const ContactHero = () => {
  return (
    <section>
        <div className='grid lg:grid-cols-2'>
            <div>
                <img src={contactimage} alt="" />
            </div>

            <div>
            <div>
                <div className='lg:mt-0 mt-3'>
                    <h1 className='text-[#1B1B1B] lg:text-[40px] text-[20px] font-semibold'>Send us a message</h1>
                    <p className='text-[#645D5D] text-[16px]'>You can’t find what you need? We can help!</p>
                </div>
            <form action="#" className="space-y-4">
            <div className='leading-loose mt-3'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="name">Your name</label>
                <input
                className="lg:w-[600px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                placeholder="Enter your name"
                type="text"
                id="name"
                />
            </div>

                <div className='leading-loose'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="email">Your email address</label>
                <input
                    className="lg:w-[600px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                    placeholder="Enter your email address"
                    type="email"
                    id="email"
                />
                </div>
            
            <div className='leading-loose'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="message">Your message</label>

                <textarea
                className="lg:w-[600px] lg:h-[147px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                placeholder="Tell us how we can help"
                rows="8"
                id="message"
                ></textarea>
            </div>

            <div className="mt-4">
                <div className='mt-5'>
                    <button className='text-[#1B1B1B] text-[20px] p-2 lg:px-0 px-7 font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>Submit</button>
                </div>
            </div>
            </form>
        </div>
        </div>
        </div>

        <div className='mt-24'>
        <div className='inline-flex items-center gap-5 border rounded-lg border-[#CDC4C4] w-fit p-2'>
            <h1 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>Map</h1>
            <div className='w-px h-7 bg-[#FBF1F1]'></div>
            <h1 className='text-[#98A2B3] lg:text-[20px]'>satelite</h1>
        </div>

        <div className='flex items-center lg:flex-row flex-col lg:gap-5 gap-5 -mt-7'>
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
        </div>
    </section>
  )
}

export default ContactHero
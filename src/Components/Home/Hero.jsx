import React from 'react'
import { hero, socials, union1, union2 } from '../../assets'

const Hero = () => {
  return (
    <section style={{
        backgroundImage: `url(${union2}), url(${union1})`,
        backgroundSize: 'contain, contain',
        backgroundPosition: 'center, top',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundAttachment: 'scroll, scroll',
        width: '100%',
        height: '100%',
    }}>
        <div className='mx-auto relative md:mt-36 mt-32 pb-10 max-w-screen-xl'>
            <img src={hero} alt=""/>
            <div className="absolute inset-y-0 left-0 flex items-center justify-start">
                <div className="text-left  lg:ml-10 px-5 -mt-10">
                <h1 className='lg:text-[56px] text-[16px] font-semibold text-[#FFFFFF]'>Elevate Your Fitness <br className='md:block hidden'/> Journey</h1>
                <p className='lg:text-[20px] text-[12px] font-normal text-[#FFFFFF]'>We are dedicated to transforming lives through fitness <br className='md:block hidden'/> solutions. A healthier you is a happier you. Start your <br className='md:block hidden'/> transformation today!</p>
                <div className='lg:mt-5 mt-1'>
                    <button className='text-[#1B1B1B] text-[20px] lg:p-0 p-1 font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>Get Started</button>
                </div>

                <div className='lg:flex items-center md:mt-36 gap-5 md:block hidden'>
                    <h1 className='text-[#ffffff] lg:text-[20px] text-[12px] font-medium'>SOCIALS</h1>
                    <h3 className='w-[60px] border-[2px] border-[#FFC354]'></h3>
                    <div><img src={socials} alt="" /></div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
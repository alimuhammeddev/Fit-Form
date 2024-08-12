import React from 'react'
import { burstpucker2, smilingfriends } from '../../assets';

const Who = () => {
    const headingStyle = {
      fontFamily: 'Bungee Outline, sans-serif',
    };
  
    return (
      <section>
        <div>
          <h1 style={headingStyle} className='text-[#396BAA] md:text-[80px] text-[35px]'>Who We Are</h1>
          <div className='grid lg:grid-cols-2 mx-auto justify-center gap-10'>

            <div className='relative'>
                <img src={smilingfriends} alt="" />
                <div className="absolute bottom-0 lg:left-[416px] right-0 p-2 bg-[#396BAA4D] backdrop-blur-md lg:w-[184px] lg:h-[104px] text-white">
                    <p className='text-center lg:text-[40px] text-[20px] font-semibold'>300+</p>
                    <p className='text-center lg:text-[16px] text-[10px]'>Happy Clients</p>
                </div>
            </div>

            <div>
                <h1 className='text-[#1B1B1B] text-[16px] font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>About Us</h1>
                <div className='flex  items-center'>
                    <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold'>We are here to empower <br className='lg:block hidden'/> your wellness journey</h2>
                    <div>
                        <img src={burstpucker2} alt="" />
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-2 lg:text-left text-justify'>At <span className='font-semibold'>FITFORM</span>, we are more than just a gym. We are your dedicated partner <br className='lg:block hidden'/> in achieving your fitness goals and enhancing your well-being. <br className='lg:block hidden'/> Our state-of-the-art facility offers a holistic approach to fitness that goes <br className='lg:block hidden'/> beyond traditional workouts. <br className='lg:block hidden'/>
                Driven by our mission to inspire, educate, and support our members, we <br className='lg:block hidden'/> provide a diverse range of fitness programs and amenities tailored to <br className='lg:block hidden'/> meet your unique needs. </p>
                <button className='text-[#1B1B1B] lg:w-[220px] lg:h-[67px] p-2 rounded-sm text-[20px] font-semibold bg-[#FFA500] mt-4'>Our Story</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Who
import React from 'react'
import { hero2image } from '../../assets'

const Hero2 = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#1B1B1B] font-semibold text-center lg:text-[40px] text-[20px]'>We Celebrate Fitness, Community, and <br className='lg:block hidden'/> Your Personal Triumphs</h1>
            <div className='mt-3'>
                <img src={hero2image} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero2
import React from 'react'
import { dumbbells } from '../../assets'

const Find = () => {
  return (
    <ssection>
        <div className='relative'>
            <img src={dumbbells} alt=""  className='rounded-lg'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                <h1 className='text-[#ffffff] lg:text-[40px] font-semibold text-center'>Find a gym near you!</h1>
                <p className='text-[16px] text-[#ffffff] text-center'>Do you want to find the nearest gym to you? </p>

                <div className='flex items-center mt-3'>
                    <input type="text" className='w-[750px] h-[83px] p-5' placeholder='Enter your nearest landmark'/>
                    <button className='bg-[#FFA500] w-[220px] h-[67px] text-[#1b1b1b] font-semibold -ml-56'>Find Gym</button>
                </div>
            </div>
        </div>
    </ssection>
  )
}

export default Find
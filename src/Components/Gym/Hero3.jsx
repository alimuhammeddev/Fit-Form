import React from 'react'
import { arrowdown, crown, rhombus, rocket, warn } from '../../assets'

const Hero3 = () => {
  return (
    <section>
        <div>
            <h1 className='text-center text-[40px] font-semibold text-[#1b1b1b]'>Browse Plans</h1>
            <h2 className='bg-[#0071FE] text-[#ffffff] text-[16px] gap-2 flex items-center p-3 w-fit justify-center mx-auto mt-3'><img src={warn} alt="" /> Every new member has to pay a fee of ₦2,000. This fee is for your membership card which you need to access the facility.</h2>
            <p className='border border-[#E4E7EC] w-[1216px] ml-5 mt-6'></p>
        </div>

        <div className=' flex flex-wrap justify-center items-center gap-96 mt-10'>
            <div className='flex items-center gap-3'>
                <h1 className='text-[#645D5D]  text-[12px]'>Showing</h1>
                <h2 className='flex items-center border w-fit p-3 border-[#396BAA] gap-3 text-[16px] text-[#1B1B1B]'>Plans with a Trainer <img src={arrowdown} alt="" /></h2>
            </div>

            <div className='bg-[#FFF6E6] w-fit p-3 flex items-center gap-10'>
                <h1 className='text-[#1B1B1B] text-[16px] hover:bg-[#FFA500] p-2 px-4 hover:font-semibold cursor-pointer transition ease-out duration-700'>Monthly Plan</h1>
                <h2 className='text-[#1B1B1B] text-[16px] hover:bg-[#FFA500] p-2 px-4 hover:font-semibold cursor-pointer transition ease-out duration-700'>Yearly Plan</h2>
            </div>
        </div>

        <div className='grid lg:grid-cols-3 pb-10 mt-16 pl-10'>
            <div className='bg-[#FFFFFF] border border-[#5FA5FD80] w-[374px] h-[517px] p-10 hover:shadow-2xl cursor-pointer transition ease-out duration-500'>
                <h1 className='text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center'><img src={rhombus} alt="" /> Basic</h1>
                <h2 className='text-[32px] text-[#1B1B1B] font-semibold text-center'>₦20,000</h2>
                <p className='border border-[#D0D5DD] w-[276px] mt-6 mx-auto'></p>
                <div className='mt-8 leading-loose'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Unlimited Gym Access</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Quarterly fitness assessments</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>2 days per week</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>2 supplements monthly</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Goal tracking sessions</h1>
                </div>
                <div className='flex mx-auto justify-center mt-8'>
                    <button className='w-[220px] h-[67px] text-[#ffffff] font-semibold bg-[#1B1B1B]'>Choose Plan</button>
                </div>
            </div>

            <div className='bg-[#FFFFFF] border border-[#396BAA1A] w-[374px] h-[570px] shadow-2xl cursor-pointer transition ease-out duration-500'>
                <div>
                    <h1 className='bg-[#EAF3FF] p-2 text-[16px] text-[#0071FE] font-semibold text-center'>Most Popular</h1>
                </div>
                <div className='p-10'>
                    <h1 className='text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center -mt-7'><img src={rocket} alt="" /> Pro</h1>
                    <h2 className='text-[32px] text-[#1B1B1B] font-semibold text-center'>₦35,000</h2>
                    <p className='border border-[#D0D5DD] w-[276px] mt-6 mx-auto'></p>
                    <div className='mt-8 leading-loose'>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Unlimited Gym Access</h1>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Monthly fitness assessments</h1>
                        <h1 className='text-[#1B1B1B] text-[20px]'>5 days per week</h1>
                        <h1 className='text-[#1B1B1B] text-[20px]'>5 supplements monthly</h1>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Goal tracking sessions</h1>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Discounts on merchandise</h1>
                    </div>
                    <div className='flex mx-auto justify-center mt-5'>
                        <button className='w-[220px] h-[67px] text-[#1b1b1b] font-semibold bg-[#FFA500]'>Choose Plan</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#FFFFFF] border border-[#5FA5FD80] w-[374px] h-[517px] p-10 hover:shadow-2xl cursor-pointer transition ease-out duration-500'>
                <h1 className='text-[24px] text-[#1B1B1B] font-semibold flex items-center gap-1 justify-center'><img src={crown} alt="" /> Premium</h1>
                <h2 className='text-[32px] text-[#1B1B1B] font-semibold text-center'>₦50,000</h2>
                <p className='border border-[#D0D5DD] w-[276px] mt-6 mx-auto'></p>
                <div className='mt-8 leading-loose'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>All of Pro Membership</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Weekly fitness assessments</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Classes at off-peak hours</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Provision of gym wears</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Refreshments everyday</h1>
                </div>
                <div className='flex mx-auto justify-center mt-8'>
                    <button className='w-[220px] h-[67px] text-[#ffffff] font-semibold bg-[#1B1B1B]'>Choose Plan</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero3
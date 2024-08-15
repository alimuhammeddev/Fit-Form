import React from 'react'
import { Link } from 'react-router-dom';
import { armless, golddumbbells, headphone, rating, shoes, stars4, storehero, yogabra, yogaoutfit } from '../../assets'

const Hero7 = () => {
  return (
    <section>
        <div className="relative">
            <img src={storehero} alt="" className="w-fit" />
            <div className="absolute inset-0 bg-[#000B194D] opacity-100 lg:w-[1210px]"></div>
            <div className="absolute inset-0 items-center justify-center lg:mt-44 mt-2 lg:p-0 p-1">
                <h1 className="text-[#ffffff] text-center lg:text-[40px] text-[13px] font-semibold">Elevate your fitness style by shopping <br className='lg:block hidden'/> from us!</h1>
                <p className='text-[#ffffff] text-center lg;text-[20px] text-[13px]'>Our stylish wears ensures you look and feel your best, whether you're hitting <br className='lg:block hidden'/> the gym or breaking a sweat at home. Shop now and unleash your potential!</p>
                <div className='lg:mt-5 mt-1 justify-center mx-auto flex'>
                    <button className='text-[#1B1B1B] lg:text-[20px] p-1 font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>Shop Now</button>
                </div>
            </div>
        </div>

        <div className='mt-16'>
            <div>
                <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Recent Bestsellers</h1>
                <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Don’t Miss it!</h2>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-0 gap-5 pl-1 mt-5'>
                <Link to="/yoga">
                    <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                        <img src={yogaoutfit} alt="" />
                        <div className='p-3 leading-loose'>
                            <h1 className='text-[#1B1B1B] lg:text-[16px]'>Yoga Outfits 2 Piece Workout Crop Top with High Waist Running Shorts</h1>
                            <div className='flex items-center gap-3'>
                            <p className='text-[#787070] text-[12px] line-through'>₦18,000</p>
                            <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦15,500</h2>
                            </div>
                            <div className='flex items-center gap-2'>
                            <img src={stars4} alt="" />
                            <p className='text-[#1B1B1B] text-[12px]'>(29 ratings)</p>
                            </div>
                            <p className='text-[#DD900D] font-semibold text-[16px]'>4 Items left!</p> 
                        </div>
                    </div>
                </Link>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={armless} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Solid Sleeveless Drawstring Armhole Branded T-Shirt for Men</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦25,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦18,200</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(184 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>2 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={shoes} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Shoes Striped Fashion Women Sports Running Sneakers Breathable Shoes</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦35,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦24,000</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(31 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>12 Items left!</p> 
                    </div>
                </div>
            </div>
            <div>
            <div className='mt-10 justify-center mx-auto flex'>
                <button className='text-[#1B1B1B] lg:text-[20px] lg:px-0 px-7 p-2 font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>See All</button>
            </div>
            </div>
        </div>


        <div className='mt-20'>
            <div>
                <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Be Inspired</h1>
                <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>What's on your shopping list?</h2>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-0 gap-5 pl-1 mt-5'>
                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={yogabra} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>One Shoulder Yoga Bra Cutout Straps Athletic Sports Running Top</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦10,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦5,800</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(411 ratings)</p>
                        </div> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={golddumbbells} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Gold dumbbells with blush pink, duck egg blue, and teal accent grips</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦40,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦25,350</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(43 ratings)</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={headphone} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Wireless Bluetooth Headphones, FM Radio, Sd Card MP3</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦35,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦24,000</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(75 ratings)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='mt-10 justify-center mx-auto flex'>
                <button className='text-[#1B1B1B] lg:text-[20px] lg:px-0 px-7 p-2 font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>See All</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero7
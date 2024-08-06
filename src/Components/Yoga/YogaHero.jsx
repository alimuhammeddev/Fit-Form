import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { armless, call, girl, girl1, girl2, girl3, goldarrow, oneyoga, rating, return1, shoes, smallyoga, stars4, truck, yogaoutfit } from '../../assets'

const YogaHero = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <section>
        <div>
            <h1 className='text-[#514A4A] text-center text-[14px]'>Home - Store - Product</h1>
            <h2 className='font-semibold text-[40px] text-[#1B1B1B] text-center'>Product</h2>
        </div>

        <div className=' flex lg:flex-row gap-7'>
            <div>
                <img src={girl} alt="" className='w-full'/>
                <div className='flex items-center gap-[15px] mt-7'>
                    <img src={girl1} alt=""/>
                    <img src={girl2} alt=""/>
                    <img src={girl3} alt=""/>
                    <img src={girl2} alt=""/>
                    <img src={girl1} alt=""/>
                    <img src={girl3} alt=""/>
                    <img src={girl2} alt=""/>
                </div>
            </div>

            <div className='leading-loose'>
                <div>
                    <h1 className='text-[#645D5D] text-[12px]'>Product ID: RT358310PF</h1>
                    <h2 className='text-[#1B1B1B] text-[24px]'>Yoga Outfits 2 Piece Workout Crop Top with <br /> High Waist Running Shorts</h2>
                    <div className='flex items-center gap-3'>
                    <p className='text-[#787070] text-[14px] line-through'>₦18,000</p>
                    <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦15,500</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                    <h1 className='text-[14px] text-[#1B1B1B]'>4.0</h1>
                    <img src={stars4} alt="" />
                    <p className='text-[14px] text-[#FFA500] underline decoration-[#FFA500] ml-3'>114 ratings</p>
                    </div>
                    <p className='text-[12px] text-[#DD900D]'>4 Items left!</p>
                </div>

                <div>
                    <h1 className='font-semibold text-[12px] text-[#1B1B1B]'>Colors</h1>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-[12px] text-[#1B1B1B] flex items-center gap-3 bg-[#FFF6E6] w-[84px] h-[36px] border border-[#FFA500] p-1'><img src={smallyoga} alt="" /> Pink</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] flex items-center gap-3 bg-[#FFFFFF] w-[84px] h-[36px] border border-[#B7AFAF] p-1'><img src={smallyoga} alt="" /> Black</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] flex items-center gap-3 bg-[#FFFFFF] w-[84px] h-[36px] border border-[#B7AFAF] p-1'><img src={smallyoga} alt="" /> Red</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] flex items-center gap-3 bg-[#FFFFFF] w-[84px] h-[36px] border border-[#B7AFAF] p-1'><img src={smallyoga} alt="" /> White</h1>
                    </div>

                    <div className='flex justify-between mt-3'>
                        <h1 className='text-[12px] font-semibold text-[#1B1B1B]'>Size</h1>
                        <p className='text-[12px] underline decoration-[#1B1B1B] mr-36'>Size guide</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <h1 className='text-[12px] text-[#1B1B1B] w-[60px] h-[36px] p-2 border border-[#B7AFAF] text-center'>Small</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] w-[60px] h-[36px] p-2 border border-[#B7AFAF] text-center'>Medium</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] w-[60px] h-[36px] p-2 border border-[#B7AFAF] text-center'>Large</h1>
                        <h1 className='text-[12px] text-[#1B1B1B] w-[60px] h-[36px] p-2 border border-[#B7AFAF] text-center'>X-Large</h1>
                    </div>

                    <div className='mt-3'>
                        <h1 className='text-[12px] font-semibold text-[#1B1B1B]'>Quantity</h1>
                        <div className='mt-2'>
                            <div className="flex items-center space-x-4 ">
                                <button 
                                className="bg-[#F7F9FC] border hover:border-[#FFD68A] text-[#1B1B1B] px-4 py-2 rounded-md"
                                onClick={decrement}                              >
                                -
                                </button>
                                <span className="text-[16px]">{count}</span>
                                <button 
                                className="bg-[#ffffff] border border-[#FFD68A] text-[#1b1b1b] px-4 py-2 rounded-md"
                                onClick={increment}
                                >
                                +
                                </button>
                            </div>
                        </div>
                            <div className='text-[16px] mt-3'>
                                <button className='text-[#1B1B1B] text-[16px] bg-[#FFA500] lg:w-[360px] lg:h-[47px] font-semibold'>Add to Cart - ₦15,500</button> <br />
                                <button className='text-[#FFA500] text-[16px] border border-[#FFA500] lg:w-[360px] lg:h-[47px] font-semibold mt-5'>Buy Now</button>
                            </div>   
                    </div>

                    <div>
                        <div className='flex items-center mt-4'>
                        <h1 className='w-[253px] h-[42px] font-semibold text-[16px] text-[#1B1B1B] bg-[#FFE3B0] p-2 text-center'>Description</h1>
                        <h1 className='w-[253px] h-[42px] font-semibold text-[16px] text-[#1B1B1B] bg-[#FFF6E680] p-2 text-center'>Reviews</h1>
                        </div>
                        <div>
                            <h1 className='text-[14px] text-[#3E3838]'>Elevate your yoga practice with our stylish and comfortable yoga outfit, <br /> designed to enhance your performance and inspire confidence on the mat. <br /> Crafted from premium materials with a focus on both functionality and <br /> fashion, this outfit is perfect for yogis of all levels.</h1>
                            <h2 className='text-[14px] text-[#3E3838]'><span className='font-semibold text-[#1b1b1b]'>Crop Top:</span> Our lightweight and breathable yoga top features a flattering <br /> silhouette and moisture-wicking fabric to keep you cool and dry during even <br /> the most intense yoga sessions. With its four-way stretch construction and <br /> seamless design, this top provides maximum freedom of movement and a <br /> comfortable fit that moves with your body</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-[14px] text-[#E89600] flex items-center gap-2 justify-end'>See more <img src={goldarrow} alt="" /></h1>
                    <div>
                        <h1 className='text-[16px] text-[#3E3838] flex items-center gap-3'><img src={truck} alt="" /> 2-3 days for delivery</h1>
                        <h1 className='text-[16px] text-[#3E3838] flex items-center gap-3'><img src={return1} alt="" className='-mt-7'/> Eligible for return within 14 days, 100% money refund <br /> guarantted</h1>
                        <h1 className='text-[16px] text-[#3E3838] flex items-center gap-3'><img src={call} alt="" /> access support at: <span className='text-[#396BAA] underline decoration-[#396BAA]'>fitform@gmail.com</span></h1>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#1b1b1b] text-[40px] font-semibold'>Similar Products</h1>
                <Link to="/store-product">
                    <h2 className='text-[#E89600] text-[20px] font-semibold'>See all</h2>
                </Link>
            </div>

            <div className='grid lg:grid-cols-3 gap-10 pl-1 mt-5'>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={oneyoga} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>One Shoulder Yoga Bra Cutout Straps Athletic Sports Running Top</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦10,000</p>
                        <h2 className='text-[#1B1B1B] text-[20px] font-semibold'>₦5,800</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(19 ratings)</p>
                        </div> 
                    </div>
                </div>

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
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div> 
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
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default YogaHero
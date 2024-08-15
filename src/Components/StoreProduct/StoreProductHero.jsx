import React from 'react'
import { armless, arrowdown, arrowright, arrrowleft, classic, fitness, gymbag, leftarrow, oneyoga, preference, rating, rightarrow, shirt, shoes, sneakers, solid, stars4, strappy, tanktop, timeless, yogaoutfit } from '../../assets'

const StoreProductHero = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#514A4A] text-center text-[14px]'>Home - Store - Product</h1>
            <h2 className='font-semibold lg:text-[40px] text-[25px] text-[#1B1B1B] text-center'>Shop Now!!!</h2>
        </div>

        <div className='lg:flex items-center gap-4 lg:space-y-0 space-y-2 mt-10'>
            <h1 className='flex items-center gap-1 bg-[#FFD68A] border border-[#FFC354] w-fit p-2 lg:w-[154px] lg:h-[55px] lg:justify-center'>Filters <img src={preference} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[163px] lg:h-[55px] lg:justify-center'>Categories <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[174px] lg:h-[55px] lg:justify-center'>Price Range <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[101px] lg:h-[55px] lg:justify-center'>Size <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[114px] lg:h-[55px] lg:justify-center'>Color <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[133px] lg:h-[55px] lg:justify-center'>Ratings <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[107px] lg:h-[55px] lg:justify-center'>Tag <img src={arrowdown} alt="" /></h1>
            <h1 className='flex items-center gap-1 border border-[#FFC354] w-fit p-2 lg:w-[166px] lg:h-[55px] lg:justify-center'>Collections <img src={arrowdown} alt="" /></h1>
        </div>

        <div className='grid lg:grid-cols-3 mt-10 gap-7'>
        
                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={fitness} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Black, Dimensions: 34"D x 57"W x 76"H
                        104.78 Kilograms Horizon Fitness T202</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦125,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦108,400</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>2 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={gymbag} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Small Waterproof Sports Gym Bag, with Shoes Compartment and Wet Pocket - Purple</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦10,500</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦9,560</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>6 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={sneakers} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Thick Soled Lace-up Decor Wedge Sneakers
                        - 9.5 / Black</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦99,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦52,000</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(31 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>5 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={oneyoga} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>One Shoulder Yoga Bra Cutout Straps Athletic Sports Running Top</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦10,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦5,800</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(19 ratings)</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={strappy} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>An exploration of a classic collection; <br /> 
                        Strappy bras </h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦22,400</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦15,280</h2>
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
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦24,000</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(31 ratings)</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={solid} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Solid Sleeveless Drawstring Armhole Branded T-Shirt for Men</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦25,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦18,200</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>5 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={armless} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Solid Sleeveless Drawstring Armhole Branded T-Shirt for Men</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦25,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦18,200</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>2 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={tanktop} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Tank Top Outdoor Running Quick Drying Sports Bra - Gray</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦24,600</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦14,000</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(31 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>10 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={shirt} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Solid Sleeveless Drawstring Armhole Branded T-Shirt for Men</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦25,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦18,200</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>2 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={classic} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>An exploration of a classic collection; <br /> 
                        Strappy bras</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦22,400</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦15,820</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={rating} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(84 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>12 Items left!</p> 
                    </div>
                </div>

                <div className='bg-[#ffffff] max-w-sm overflow-hidden border border-[#1019280D] shadow-md'>
                    <img src={timeless} alt="" />
                    <div className='p-3 leading-loose'>
                        <h1 className='text-[#1B1B1B] lg:text-[16px]'>Dark Stainless Steel Bottle <br />Lightest and Sturdiest</h1>
                        <div className='flex items-center gap-3'>
                        <p className='text-[#787070] text-[12px] line-through'>₦12,000</p>
                        <h2 className='text-[#1B1B1B] lg:text-[20px] font-semibold'>₦6,500</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                        <img src={stars4} alt="" />
                        <p className='text-[#1B1B1B] text-[12px]'>(31 ratings)</p>
                        </div>
                        <p className='text-[#DD900D] font-semibold text-[16px]'>6 Items left!</p> 
                    </div>
                </div>
        </div>

        <div className='mt-12 pb-20 flex items-center lg:gap-5 gap-2 justify-center'>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg:p-4 w-fit'><img src={leftarrow} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg;p-4 w-fit'><img src={arrowright} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E89600] p-3 cursor-pointer text-[#E89600] lg:p-4 lg:px-6 w-fit'>1</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg:p-4 lg:px-6 w-fit'>2</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg:p-4 lg:px-6 w-fit'>3</h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg:p-4 w-fit'><img src={arrrowleft} alt="" /></h1>
          <h1 className='bg-[#F9FAFB] border border-[#E4E7EC] p-3 cursor-pointer lg:p-4 w-fit'><img src={rightarrow} alt="" /></h1>  
        </div>
    </section>
  );
};

export default StoreProductHero
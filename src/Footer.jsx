import React from 'react'
import { footerimage, socials2 } from './assets'

const Footer = () => {
  const headingStyle = {
    fontFamily: 'Bebas Neue, sans-serif',
  };
  return (
    <div className="relative bg-[#396BAA] lg:p-10 lg:pl-48 p-5">
  <img src={footerimage} alt="Background Image" className="absolute inset-0 w-full object-cover opacity-50" />
  <div className="relative">
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-10'>

      <div>
        <h1 style={headingStyle} className='text-[#FFF6E6] text-[36px]'>Fitform</h1>
        <p className='text-[#FBF1F1] text-[16px] font-light'>Let’s embark on a thrilling journey towards <br className='lg:block hidden'/> a healthier, happier, and more vibrant life.</p>
      </div>

      <div className='space-y-5'>
        <h1 className='text-[#FFFFFF] font-semibold text-[16px]'>Company</h1>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">About Us</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Gym Membership</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Classes</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Blog</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Contact Us</a></p>
      </div>

      <div className='space-y-5'>
        <h1 className='text-[#FFFFFF] font-semibold text-[16px]'>Store</h1>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Fitness Equipment</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Gym Wears</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Nutritional Supplements</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Our Branded Merchandise</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">My Cart</a></p>
      </div>

      <div className='space-y-5'>
        <h1 className='text-[#FFFFFF] font-semibold text-[16px]'>Help</h1>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Money Refund</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Pending Reviews</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Orders</a></p>
        <p className='text-[16px] text-[#FBF1F1] font-light'><a href="#!">Terms of Use</a></p>
      </div>
    </div>

    <div className='lg:flex items-center lg:justify-between lg:space-y-0 space-y-3 lg:mt-10'>
      <div className='lg:mt-0 mt-5 lg:mx-0 justify-center mx-auto flex'>
        <img src={socials2} alt="" />
      </div>
      <div>
        <h1 className='text-[#ffffff] text-[14px] lg:mr-40 text-center'>© 2024 Fitform. All rights reserved.</h1>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer
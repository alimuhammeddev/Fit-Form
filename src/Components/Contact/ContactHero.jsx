import React from 'react'
import { contactimage } from '../../assets'

const ContactHero = () => {
  return (
    <section>
        <div className='grid lg:grid-cols-2'>
            <div>
                <img src={contactimage} alt="" />
            </div>

            <div>
            <div>
                <div>
                    <h1 className='text-[#1B1B1B] text-[40px] font-semibold'>Send us a message</h1>
                    <p className='text-[#645D5D] text-[16px]'>You can’t find what you need? We can help!</p>
                </div>
            <form action="#" className="space-y-4">
            <div className='leading-loose'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="name">Your name</label>
                <input
                className="w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                placeholder="Enter your name"
                type="text"
                id="name"
                />
            </div>

                <div className='leading-loose'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="email">Your email address</label>
                <input
                    className="w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                    placeholder="Enter your email address"
                    type="email"
                    id="email"
                />
                </div>
            
            <div className='leading-loose'>
                <label className="text-[#1B1B1B] text-[16px] font-semibold" htmlFor="message">Your message</label>

                <textarea
                className="lg:w-[616px] lg:h-[147px] w-full border border-[#E4E7EC] bg-[#F9FAFB66] p-3 text-sm placeholder:text-[#8D8484]"
                placeholder="Tell us how we can help"
                rows="8"
                id="message"
                ></textarea>
            </div>

            <div className="mt-4">
                <div className='mt-5'>
                    <button className='text-[#1B1B1B] text-[20px] font-medium rounded-sm lg:w-[220px] lg:h-[67px] bg-[#FFA500]'>Shop Now</button>
                </div>
            </div>
            </form>
        </div>
        </div>
        </div>
    </section>
  )
}

export default ContactHero
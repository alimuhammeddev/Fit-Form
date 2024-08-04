import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { logo, navvector, search, shoppingcart } from './assets';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "Gym Membership", link: "/gym-membership" },
        { name: "Classes", link: "/classes" },
        { name: "Blog", link: "/blog" },
        { name: "Store", link: "/" },
        { name: "Contact Us", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full bg-white fixed top-0 left-0 md:px-[135px] z-20'>
            <div className='md:flex items-center bg-white py-4 md:px-10 px-2'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <span><img src={logo} alt="" /></span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-5 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in justify-center mx-auto ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7 flex flex-col items-center'>
                            <Link to={link.link} className='font-semibold text-[16px] text-[#787070] hover:text-[#8C5B00] duration-500'>
                                {link.name}
                            </Link>
                            {link.name === "Home" && <img src={navvector} alt="navvector" className='mt-2' />}
                        </li>
                    ))}

                    <div className='flex items-center gap-7'>
                        <img src={search} alt="search" className='lg:ml-48' />
                        <img src={shoppingcart} alt="shoppingcart" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

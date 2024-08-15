import React, {useState} from 'react'
import { ebonyellipse, nathanellipse, sharonellipse, sholaellipse, tachaellipse } from '../../assets';

const Schedule = () => {
    const headingStyle = {
        fontFamily: 'Bungee Outline, sans-serif',
      };
    const [activeDay, setActiveDay] = useState('Sunday');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section>
        <div>
            <h1 style={headingStyle} className='text-[#396BAA] md:text-[80px] text-[35px] text-left'>Schedule</h1>
        </div>
        <div>
            <h1 className='text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2'>Our Schedule</h1>
            <h2 className='text-[#1B1B1B] lg:text-[40px] font-semibold text-center'>Explore our class schedule</h2>
        </div>

        <div className="grid lg:grid-cols-7 gap-4">
            {days.map((day) => (
                <div key={day}>
                <button
                    onClick={() => setActiveDay(day)}
                    className={`w-[175px] h-[68px] ${
                    activeDay === day ? 'bg-[#FFA500]' : 'bg-[#FFFFFF]'
                    }`}
                >
                    {day}
                </button>
                </div>
            ))}
        </div>

        <div className='container mx-auto mt-5 bg-[#FFFBF5] p-7'>
            <div className='grid lg:grid-cols-3 grid-cols-1 text-center gap-4'>
                <div>
                    <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Time</h1>
                </div>
                <div>
                    <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Workout</h1>
                </div>
                <div>
                    <h1 className='text-[#1B1B1B] text-[20px] font-semibold'>Trainer (s)</h1>
                </div>
            </div>
        </div>

            <div className='container mx-auto p-7 bg-[#fffdfa]'>
            <div className='grid lg:grid-cols-3 text-center items-center gap-4 border-t border-l border-r border-b border-[#FFFBF5] border'>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>05:00 - 07:00am</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Dance Fitness</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Cardio Blast</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] flex items-center justify-center gap-2 -ml-3'>
                    <img src={sholaellipse} alt=""/>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Shola</h1>
                </div>

                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>08:00 - 09:00am</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Strength Building</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>HIIT</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] space-y-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={nathanellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Nathan</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={sharonellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Sharon</h1>
                    </div>
                </div>

                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>10:00 - 12:00pm</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Yoga</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Pilates</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] flex items-center justify-center gap-2 -ml-3'>
                    <img src={tachaellipse} alt=""/>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Tacha</h1>
                </div>

                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>12:30 - 01:40pm</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>HIIT</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Barre</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] space-y-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={nathanellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Nathan</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={sharonellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Sharon</h1>
                    </div>
                </div>

                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>02:00 - 03:00pm</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Meditation</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Cycling</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] flex items-center justify-center gap-2'>
                    <img src={ebonyellipse} alt=""/>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Ebony</h1>
                </div>

                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>03:00 - 4:20pm</h1>
                </div>
                <div className='border-r border-b border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Strength Building</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Yoga</h1>
                </div>
                <div className='border-b p-4 border-[#FFFBF5] space-y-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={nathanellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Nathan</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 -ml-3'>
                        <img src={tachaellipse} alt=""/>
                        <h1 className='text-[#1B1B1B] text-[20px]'>Tacha</h1>
                    </div>
                </div>

                <div className='border-r border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px] text-center'>03:00 - 4:20pm</h1>
                </div>
                <div className='border-r border-[#FFFBF5] p-4'>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Dance Fitness</h1>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Cardio Blast</h1>
                </div>
                <div className='p-4 flex items-center justify-center gap-2 -ml-3'>
                    <img src={sholaellipse} alt=""/>
                    <h1 className='text-[#1B1B1B] text-[20px]'>Shola</h1>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Schedule
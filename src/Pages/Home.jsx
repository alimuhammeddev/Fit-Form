import React from 'react'
import { Blog, Classes, Hero, Map, Prompt, Schedule } from '../Components'
import Who from '../Components/Home/Who'
import styles from '../style'
import Trainers from '../Components/Home/Trainers'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#F5F9FF] w-full pb-20`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Who />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#ffffff] w-full p-5`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Classes />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} w-full bg-gradient-to-r from-white via-white to-[#0071FE08] pb-20 mt-16`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Trainers />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#FFFFFF] w-full pb-20`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Schedule />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#FFF6E65B] w-full pb-20`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Testimonials />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} w-full bg-[#ffffff] pb-20 mt-16`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Blog />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} pb-10`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Prompt />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} pb-10`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <Map />
        </div>
      </div>

      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
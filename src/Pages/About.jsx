import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero2 from '../Components/About/Hero2'
import Carousel from '../Components/About/Carousel'
import Story from '../Components/About/Story'
import Choose from '../Components/About/Choose'
import Trainers2 from '../Components/About/Trainers2'
import Prompt2 from '../Components/About/Prompt2'
import { looper2 } from '../assets'
import Faqs from '../Components/About/Faqs'
import Find from '../Components/About/Find'
import Footer from '../Footer'

const About = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-44`}>
        <div className={`${styles.boxWidth} pl-10`}>
          <Hero2 />
        </div>
        </div>

        <div className='bg-[#0071fe] pb-5 lg:mt-12 mt-10'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} pl-10`}>
            <Carousel />
            </div>
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-16`}>
        <div className={`${styles.boxWidth} pl-10`}>
          <Story />
        </div>
        </div>

        <div className='bg-[#0073FF08] pb-20'>
            <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-10`}>
            <div className={`${styles.boxWidth} pl-10`}>
            <Choose />
            </div>
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-10`}>
        <div className={`${styles.boxWidth} pl-10`}>
          <Trainers2 />
        </div>
        </div>

        <div className='bg-gradient-to-r from-[#0073FF08] via-[#0073FF00] to-[#0073FF12] p-10 mt-16'>
            <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-10`}>
            <div className={`${styles.boxWidth} pl-10`}>
            <Prompt2 />
            </div>
            </div>
            <div className='flex justify-end -mt-32 mr-10'>
            <img src={looper2} alt="" />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-10`}>
        <div className={`${styles.boxWidth} pl-10`}>
          <Faqs />
        </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-40`}>
        <div className={`${styles.boxWidth} pl-10`}>
          <Find />
        </div>
        </div>

        <div>
        <div className='mt-24'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero6 from '../Components/BlogNutrition/Hero6'
import Footer from '../Footer'

const BlogNutrition = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-36`}>
            <div className={`${styles.boxWidth} lg:pl-10`}>
            <Hero6 />
            </div>
        </div>

        <div>
        <div className='mt-16'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BlogNutrition
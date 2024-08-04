import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero6 from '../Components/BlogNutrition/Hero6'

const BlogNutrition = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-36`}>
            <div className={`${styles.boxWidth} pl-10`}>
            <Hero6 />
            </div>
        </div>
    </div>
  )
}

export default BlogNutrition
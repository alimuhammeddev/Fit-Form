import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import YogaHero from '../Components/Yoga/YogaHero'
import Footer from '../Footer'

const Yoga = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-40`}>
            <div className={`${styles.boxWidth} lg:pl-10`}>
            <YogaHero />
            </div>
        </div>

        <div>
        <div className='mt-20'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Yoga
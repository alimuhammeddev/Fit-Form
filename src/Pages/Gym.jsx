import React from 'react'
import Navbar from '../Navbar'
import styles from '../style'
import Hero3 from '../Components/Gym/Hero3'
import Footer from '../Footer'

const Gym = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-32`}>
        <div className={`${styles.boxWidth}`}>
          <Hero3 />
        </div>
        </div>

        <div>
          <div className='mt-28'>
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default Gym
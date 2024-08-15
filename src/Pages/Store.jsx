import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero7 from '../Components/Store/Hero7'
import Footer from '../Footer'

const Store = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-36 mt-24`}>
            <div className={`${styles.boxWidth} lg:pl-10`}>
            <Hero7 />
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

export default Store
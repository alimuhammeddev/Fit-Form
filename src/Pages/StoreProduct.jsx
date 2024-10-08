import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import StoreProductHero from '../Components/StoreProduct/StoreProductHero'
import Footer from '../Footer'

const StoreProduct = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-40 mt-24`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <StoreProductHero />
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default StoreProduct
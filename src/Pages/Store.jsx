import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero7 from '../Components/Store/Hero7'

const Store = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-36`}>
            <div className={`${styles.boxWidth} lg:pl-10`}>
            <Hero7 />
            </div>
        </div>
    </div>
  )
}

export default Store
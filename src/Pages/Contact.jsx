import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import ContactHero from '../Components/Contact/ContactHero'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-40`}>
        <div className={`${styles.boxWidth} lg:pl-10`}>
          <ContactHero />
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

export default Contact
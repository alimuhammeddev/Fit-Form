import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero4 from '../Components/Classes1/Hero4'
import Footer from '../Footer'

const Classes1 = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-44 mt-24`}>
          <div className={`${styles.boxWidth} lg:pl-10`}>
            <Hero4 />
          </div>
        </div>

        <div>
          <div className='mt-28'>
            <Footer />
          </div>
        </div>
    </section>
  )
}

export default Classes1
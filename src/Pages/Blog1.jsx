import React from 'react'
import styles from '../style'
import Navbar from '../Navbar'
import Hero5 from '../Components/Blog1/Hero5'
import Footer from '../Footer'

const Blog1 = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} lg:mt-36 mt-24`}>
            <div className={`${styles.boxWidth} lg:pl-10`}>
            <Hero5 />
            </div>
        </div>

        <div>
          <div>
            <Footer />
          </div>
        </div>
    </section>
  )
}

export default Blog1
import React from 'react'
import styles from './style.js'
import {Navbar, Hero, AboutUs, Service, Expertise, FutureUse ,Testimonials ,Clients ,CTA ,Footer} from './components'


const App = () => {
  return (
    <div className='bg-white w-full overflow-x-hidden'>
      {/* Navbar Wrap */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* Hero section */}
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
        {/* Other sections */}
       <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs/>
          <Service/>
          <Expertise/>
          <FutureUse/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          
        </div>
      </div>
      <div className={`bg-[#284750] rounded-t-4xl ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
      </div>
      
    </div>
  )
}

export default App